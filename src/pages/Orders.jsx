import { useEffect, useState } from "react";
import axios from "axios";
import Up from "../assets/image/png/up.png";

const Orders = () => {
  const [purchasedPackages, setPurchasedPackages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
      } catch (err) {
        setError("Sotib olingan tariflarni yuklashda xatolik!.");
      } finally {
        setLoading(false);
      }
    };

    fetchPurchasedPackages();
  }, []);

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
              purchasedPackages?.map((pkg, index) => (
                <div key={index}>
                  <p>Пакет: {pkg.tariff.name}</p>
                  <p>Тариф: {getPriceLabel(pkg.settings.pay.type)}</p>
                  <hr />
                </div>
              ))
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
