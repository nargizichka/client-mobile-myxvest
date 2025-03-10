import { useState, useEffect } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

const ExtendPackage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { packageId } = location.state || {};
  const [extendPeriod, setExtendPeriod] = useState(0); // Default to 0 days
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentEndDate, setCurrentEndDate] = useState(null);
  const [newEndDate, setNewEndDate] = useState(null);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchPackageDetails = async () => {
      try {
        const response = await axios.get(
          `https://api.sysdc.uz/api/v1/services/hosting/orders/${packageId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setCurrentEndDate(new Date(response.data.data.expires_at));
      } catch (err) {
        setError(err.response.errors);
        console.log(err);
      }
    };

    fetchPackageDetails();
  }, [packageId, token]);

  useEffect(() => {
    if (currentEndDate) {
      const newDate = new Date(
        currentEndDate.getTime() + extendPeriod * 24 * 60 * 60 * 1000
      );
      setNewEndDate(newDate);
    }
  }, [extendPeriod, currentEndDate]);

  const handleExtendSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.put(
        `https://api.sysdc.uz/api/v1/services/hosting/orders/purchase/${packageId}`,
        {
          extend_period: extendPeriod * 24 * 60 * 60, // Convert days to seconds
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
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
  setTimeout(() => {
    setError(null);
  }, 5000);

  return (
    <div id="get_ajax_content">
      <div id="set_ajax_content">
        <div className="mOm">
          <div className="block first">
            <div className="title">Продлить заказ</div>
            <form onSubmit={handleExtendSubmit} className="menu">
              <label htmlFor="">
                <b>Tarif id:</b>
                {packageId}
              </label>
              <label>Введите количество дней для продления:</label>
              <input
                type="number"
                value={extendPeriod}
                onChange={(e) => setExtendPeriod(Number(e.target.value))}
                min="1"
              />
              <br />
              {currentEndDate && newEndDate && (
                <p>
                  Новый срок действия:{" "}
                  {newEndDate.toLocaleString("ru-RU", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </p>
              )}
              <button
                type="button"
                onClick={() => navigate("/my_orders")}
                className="btn btn-default"
              >
                Отмена
              </button>
              <button
                type="submit"
                className="btn btn-default"
                disabled={loading}
              >
                {loading ? "Продление..." : "Продлить"}
              </button>
              {error && <p style={{ color: "red" }}>{error}</p>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExtendPackage;
