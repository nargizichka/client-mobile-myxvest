import { useLocation, Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Up from "../assets/image/png/up.png";

const Confirmation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { tarif } = location.state || {};

  const [selectedPrice, setSelectedPrice] = useState("86400");
  const [message, setMessage] = useState(null);
  const [messageType, setMessageType] = useState(null);

  const token = localStorage.getItem("token");

  if (!tarif) {
    return <p>No package selected</p>;
  }

  const handleCancelClick = () => {
    navigate("/orders/product/infohosting/1");
  };

  const handlePriceChange = (e) => {
    setSelectedPrice(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "https://api.sysdc.uz/api/v1/services/hosting/orders/create",
        {
          tariff_id: tarif.id,
          pay_type: selectedPrice,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setMessage("To'lov muvaffaqiyatli amalga oshirildi!");
      setMessageType("success");
      setTimeout(() => {
        navigate("/my_orders");
      }, 1500);
    } catch (error) {
      console.error("To'lovni amalga oshirishda xatolik!", error);
      setMessage(
        error?.response?.data?.errors || "To'lovni amalga oshirishda xatolik!"
      );
      setMessageType("error");
      setTimeout(() => {
        setMessage(null);
      }, 2000);
    }
  };

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

  return (
    <div id="get_ajax_content">
      <div id="set_ajax_content">
        <div className="mOm">
          <div className="block first">
            <div className="tarif-card">
              <div className="title">
                <b>Buyurtmani Tasdiqlash</b>
              </div>
              <div className="menu">
                {message && (
                  <p className={`alert alert-${messageType}`}>{message}</p>
                )}
                <form onSubmit={handleSubmit}>
                  <div className="radio-group">
                    <input
                      type="radio"
                      id="daily"
                      name="price"
                      value="86400"
                      checked={selectedPrice === "86400"}
                      onChange={handlePriceChange}
                    />
                    <label htmlFor="daily">
                      Kunlik: {tarif.price["86400"]} so&apos;m
                    </label>
                  </div>
                  <div className="radio-group">
                    <input
                      type="radio"
                      id="monthly"
                      name="price"
                      value="2592000"
                      checked={selectedPrice === "2592000"}
                      onChange={handlePriceChange}
                    />
                    <label htmlFor="monthly">
                      Oylik: {tarif.price["2592000"]} so&apos;m
                    </label>
                  </div>
                  <div className="radio-group">
                    <input
                      type="radio"
                      id="yearly"
                      name="price"
                      value="31536000"
                      checked={selectedPrice === "31536000"}
                      onChange={handlePriceChange}
                    />
                    <label htmlFor="yearly">
                      Yillik: {tarif.price["31536000"]} so&apos;m
                    </label>
                  </div>

                  <p>
                    Siz {tarif.price[selectedPrice]} so&apos;m evaziga{" "}
                    {getPriceLabel(selectedPrice)} {tarif.name} sotib
                    olmoqchisiz, <br /> Ishonchingiz komilmi?{" "}
                  </p>
                  <center>
                    <input
                      className="btn btn-default"
                      type="button"
                      value={`Bekor Qilish`}
                      onClick={handleCancelClick}
                      style={{ marginLeft: "10px" }}
                    />
                    <input
                      className="btn btn-default"
                      type="submit"
                      value={`Tasdiqlash`}
                    />
                  </center>
                </form>
              </div>
            </div>
          </div>
          <div className="menu">
            <Link to="/">
              <img src={Up} alt="На главную" /> На главную
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
