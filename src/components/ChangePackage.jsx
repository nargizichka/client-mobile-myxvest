import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Up from "../assets/image/png/up.png";

const ChangePackage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { packageId, currentTariffId, currentPayType } = location.state || {};
  const [packages, setPackages] = useState([]);
  const [selectedPackage, setSelectedPackage] = useState(currentTariffId);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState("86400"); // Default to daily packages
  const [showConfirmation, setShowConfirmation] = useState(false);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        const response = await axios.get(
          "https://api.sysdc.uz/api/v1/services/hosting/tarifs?server_id=1&per_page=100",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setPackages(response.data.data);
      } catch (err) {
        setError("Failed to fetch packages.");
      } finally {
        setLoading(false);
      }
    };

    fetchPackages();
  }, [token]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(
        `https://api.sysdc.uz/api/v1/services/hosting/orders/tariff-change/${packageId}`,
        {
          tariff_id: selectedPackage,
          pay_type: filter,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      navigate("/my_orders");
    } catch (err) {
      setError(err.response.data.errors);
    }
  };
  const handleSetSelectedPackageAndConfimration = (pkgId) => {
    setSelectedPackage(pkgId);
    setShowConfirmation(true);
  };

  const handleCancel = () => {
    setShowConfirmation(false);
    setError(null);
  };

  const getCharacteristic = (pkg, key) => {
    const found = pkg.characteristics.find((char) => char.key === key);
    return found ? found.value : "Noma'lum";
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

  const selectedPackageDetails = packages.find(
    (pkg) => pkg.id === selectedPackage
  );

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div id="get_ajax_content">
      <div id="set_ajax_content">
        <div className="mOm">
          <div className="block first">
            <div className="title change-pkg_header">
              <b>Change Package</b>
              <div className="">
                <button onClick={() => setFilter("86400")}>Kunlik</button>
                <button onClick={() => setFilter("2592000")}>Oylik</button>
                <button onClick={() => setFilter("31536000")}>Yillik</button>
              </div>
            </div>
            <br />
            {loading && <p>Loading...</p>}
            <form>
              <div className="first">
                {packages.map((pkg) => (
                  <div
                    key={pkg.id}
                    className={`tarif-card ${
                      pkg.id === currentTariffId ? "current-package" : ""
                    }`}
                  >
                    <div className="title">
                      <b>{pkg.name}</b>
                    </div>
                    <div className="menu">
                      <b>Место на диске:</b>{" "}
                      {getCharacteristic(pkg, "limit_quota")} MB <br />
                      <b>Оперативная память (RAM):</b>{" "}
                      {getCharacteristic(pkg, "limit_memory")} MB <br />
                      <b>Трафик:</b> Unlimited <br />
                      <b>Доменов/поддоменов:</b>{" "}
                      {getCharacteristic(pkg, "limit_domains")} шт.
                      <br />
                      <b>FTP-доступ:</b>{" "}
                      {getCharacteristic(pkg, "limit_ftp_users")} шт.
                      <br />
                      <b>POP3-ящики:</b>{" "}
                      {getCharacteristic(pkg, "limit_emails")} шт.
                      <br />
                      <b>Базы данных:</b> {getCharacteristic(pkg, "limit_db")}{" "}
                      шт.
                      <br />
                      <b>Планировщик (CRON):</b>{" "}
                      {getCharacteristic(pkg, "limit_scheduler")} шт.
                      <br />
                      __________________
                      <br />
                      <b>Цена:</b> {pkg.price[filter]} сум/{" "}
                      {getPriceLabel(filter)}
                      <br />
                      <center>
                        {pkg.id === currentTariffId &&
                        filter == currentPayType ? (
                          <input
                            className="btn btn-default"
                            disabled
                            type="button"
                            value={`Tекущий тариф`}
                          />
                        ) : (
                          <input
                            className="btn btn-default"
                            type="button"
                            value={`Выбрать "${pkg.name}"`}
                            onClick={() =>
                              handleSetSelectedPackageAndConfimration(pkg.id)
                            }
                          />
                        )}
                      </center>
                    </div>
                  </div>
                ))}
              </div>
            </form>
          </div>
          <div className="menu">
            <Link to="/">
              <img src={Up} alt="На главную" /> На главную
            </Link>
          </div>
        </div>
      </div>
      {showConfirmation && selectedPackageDetails && (
        <div className="modal">
          <div className="modal-content">
            <div className="title">Tarifni o&apos;zgartirishni tasdiqlash</div>
            {!error ? (
              <>
                <p className="menu">
                  Siz {selectedPackageDetails.name} tarifini{" "}
                  {selectedPackageDetails.price[filter]} UZS evaziga{" "}
                  {getPriceLabel(filter)} uchun o&apos;zgartirmoqchisiz,
                  <br /> Ishonchingiz komilmi? <br /> Buyurtmani
                  o&apos;zgartirishdan keyin, sizning buyurtmangizni hozirgi
                  amal qilish muddati o&apos;z kuchini yo&apos;qotadi.
                </p>
                <div className=" menu modal_btns">
                  <button onClick={handleSubmit} className="btn btn-success">
                    Tasdiqlash
                  </button>
                  <button onClick={handleCancel} className="btn btn-danger">
                    Bekor qilish
                  </button>
                </div>
              </>
            ) : (
              <div className="menu">
                <p className="  alert text-danger">{error}</p>
                <button onClick={handleCancel} className="btn btn-danger">
                  Yopish
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ChangePackage;
