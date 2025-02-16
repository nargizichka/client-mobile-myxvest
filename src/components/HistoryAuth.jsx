import  { useEffect, useState } from "react";
import axios from "axios";

const HistoryAuth = () => {
  const token = localStorage.getItem("token");
  const [history, setHistory] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.sysdc.uz/api/v1/user/auth-history", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setHistory(res.data.data); // API javobiga qarab o'zgartiring
      })
      .catch((error) => {
        console.error("Error fetching auth history:", error);
      });
  }, []);

  return (
    <div id="get_ajax_content">
      <div id="set_ajax_content">
        <div className="mOm">
          <div className="block first">
            <div className="title">История авторизаций ({history.length})</div>
            <div className="menu">
              <a href="?exit">[Выйти со всех устройств]</a> ||
            </div>
            {history.length > 0 ? (
              history.map((item, index) => (
                <div key={index} className="menu">
                  <b>Время:</b> {item.login_time} {/* API dan keladigan vaqt */}
                  <br />
                  <b>Последнее посещение:</b> {item.last_active}
                  <br />
                  <b>IP:</b> {item.ip_address}
                  <br />
                  <b>UA:</b> {item.user_agent}
                  <div>
                    <a className="btn btn-default" href={`?reset=${item.session_id}`}>
                      Сбросить
                    </a>
                  </div>
                </div>
              ))
            ) : (
              <p>История авторизаций пока отсутствует.</p>
            )}
          </div>
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
  );
};

export default HistoryAuth;
