import { useEffect, useState } from "react";
import axios from "axios";
import Up from "../assets/image/png/up.png";
import { Link } from "react-router-dom";
import Recycle from "../assets/image/png/recycle.png";
const Orders = () => {
  const [purchasedPackages, setPurchasedPackages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);
  const token = localStorage.getItem("token");
  useEffect(() => {
    const fetchPurchasedPackages = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(
          "https://api.sysdc.uz/api/v1/services/hosting/orders",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setPurchasedPackages(response.data.data);
        console.log(response.data);
      } catch (err) {
        setError("Sotib olingan tariflarni yuklashda xatolik!.");
      } finally {
        setLoading(false);
      }
    };

    fetchPurchasedPackages();
  }, []);

  useEffect(() => {
    axios
      .get("https://api.sysdc.uz/api/v1/user/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setUser(res.data.data);
      });
  }, [token]);
  console.log(user);

  const getPriceLabel = (priceType) => {
    switch (priceType) {
      case "86400":
        return "Kunlik";
      case "2592000":
        return "Oylik";
      case "31536000":
        return "Yillik";
      default:
        return "";
    }
  };

  if (loading) {
    return <p>Yuklanmoqda...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }
  const calculateRemainingDays = (expiresAt) => {
    const expirationDate = new Date(expiresAt);
    const currentDate = new Date();

    // Calculate difference in milliseconds
    const diffInMs = expirationDate - currentDate;

    // Convert to days (milliseconds / seconds / minutes / hours)
    const daysRemaining = Math.ceil(diffInMs / (1000 * 60 * 60 * 24));

    // Format the date and time
    const formattedDate = expirationDate.toLocaleString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });

    return {
      days: daysRemaining,
      formattedDate: formattedDate,
    };
  };

  return (
    <div>
      <div className="mOm">
        <div className="block first">
          <div className="title">
            Мои заказы
            <span style={{ float: "right" }}>
              <a href="/order">Заказать новую услугу</a>
            </span>
          </div>
          <div className="menu">
            {purchasedPackages.length > 0 ? (
              purchasedPackages?.map((pkg, index) => {
                const { days, formattedDate } = calculateRemainingDays(
                  pkg.expires_at
                );
                return (
                  <>
                    <div key={index} className="menu">
                      <p>Заказ №: {pkg.id}</p>
                      <p>Тариф заказа: {pkg?.tariff?.name}</p>
                      <p>Баланс: {user?.accounts.amount} сум</p>
                      {/* <p>Тариф: {getPriceLabel(pkg.settings.pay.type)}</p> */}
                      <p>Статус: {pkg.status}</p>
                      <p>
                        Осталось:{" "}
                        <span className="text-success">
                          [{days}] (дней до {formattedDate})
                        </span>
                      </p>
                    </div>
                    {/* <div className="menu"> */}
                    <div className="menu btn-group">
                      <div
                        className="menu"
                        style={{ width: "100%", textAlign: "center" }}
                      >
                        <Link to={""} className="link">
                          {"</> "}Доступ к панели
                        </Link>
                      </div>
                      <div className="menu inner-btn_group">
                        <Link to={""} className="link">
                          ↩ Продлить
                        </Link>
                        {/* <div className="vl"></div> */}
                        <Link to={""} className="link">
                          ♻ Изменить тарифа
                        </Link>
                      </div>
                      <div className="menu inner-btn_group">
                        <Link to={""} className="link">
                          ⇄ Передать заказ
                        </Link>
                        {/* <div className="vl"></div> */}
                        <Link to={""} className="link" style={{ color: "red" }}>
                          ✘ Удалить заказ
                        </Link>
                      </div>
                    </div>
                    {/* </div> */}
                  </>
                );
              })
            ) : (
              <center>
                <font color="red">Вы ещё не заказали</font>
              </center>
            )}
          </div>
        </div>
        <div className="menu">
          <a href="/">
            <img src={Up} alt="Назад" /> На главную
          </a>
        </div>
      </div>
    </div>
  );
};

export default Orders;
