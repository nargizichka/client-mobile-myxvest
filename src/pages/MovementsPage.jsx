import { useState, useEffect } from "react";
import axios from "axios";

const MovementsPage = () => {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const token = localStorage.getItem("token"); // Tokenni localStorage yoki sessionStorage dan olish
        if (!token) throw new Error("Token topilmadi! Iltimos, qayta login qiling.");

        const response = await axios.get("https://api.sysdc.uz/api/v1/user/payment/history", {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (response.data && response.data.data) {
          setHistory(response.data.data); // `data` obyektidan haqiqiy ma'lumotlarni olish
        } else {
          throw new Error("Ma'lumotlarni yuklashda xatolik yuz berdi.");
        }
      } catch (err) {
        setError(`Xatolik: ${err.response ? err.response.data.message : err.message}`);
      } finally {
        setLoading(false);
      }
    };

    fetchHistory();
  }, []);

  return (
    <div>
      <div id="get_ajax_content">
        <div id="set_ajax_content">
          <div className="mOm">
            <div className="block first">
              <div className="title">Движение средств</div>
              <div className="menu">
                <a href="?">[Все операции]</a> <a href="?sort=1">[Прибыли]</a>{" "}
                <a href="?sort=2">[Расходы]</a>
              </div>

              {loading ? (
                <p>⏳ Ma’lumotlar yuklanmoqda...</p>
              ) : error ? (
                <p style={{ color: "red" }}>{error}</p>
              ) : history.length === 0 ? (
                <p style={{ color: "gray" }}>Sizda hali hech qanday to‘lov harakati yo‘q.</p>
              ) : (
                history.map((item, index) => (
                  <div key={index} className="menu">
                    <div className="title">
                      Время: {new Date(item.time).toLocaleString("ru-RU")}
                    </div>
                    <span style={{ color: "#000000" }}>Сумма:</span>{" "}
                    <b>
                      <span style={{ color: item.amount < 0 ? "red" : "green" }}>
                        {item.amount} сум
                      </span>
                    </b>
                    <br />
                    <span style={{ color: "black" }}>Действие: {item.action}</span>
                  </div>
                ))
              )}
            </div>

            <div className="menu">
              <a href="/">
                <img
                  src="https://www.myxvest.ru/style/wap/style/image/png/up.png"
                  alt="На главную"
                />
                На главную
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovementsPage;
