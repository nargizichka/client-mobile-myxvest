import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Up from "../assets/image/png/up.png";
const MyXvestHosting = () => {
  const [tarifs, setTarifs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // useFetchUserProfile();
  useEffect(() => {
    const fetchTarifs = async () => {
      try {
        const response = await axios.get(
          "https://api.sysdc.uz/api/v1/services/hosting/tarifs?server_id=1&per_page=100"
        );
        setTarifs(response.data.data);
      } catch (err) {
        setError("Tariflarni yuklashda xatolik yuz berdi!");
      } finally {
        setLoading(false);
      }
    };

    fetchTarifs();
  }, []);

  if (loading) return <p>Yuklanmoqda...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div id="get_ajax_content">
      <div id="set_ajax_content">
        <div className="mOm">
          <div className="block first">
            {tarifs.map((tarif) => {
              const getCharacteristic = (key) => {
                const found = tarif.characteristics.find(
                  (char) => char.key === key
                );
                return found ? found.value : "Noma'lum";
              };

              return (
                <div key={tarif.id} className="tarif-card">
                  <div className="title">
                    <b>{tarif.name}</b>
                  </div>
                  <div className="menu">
                    <b>Место на диске:</b> {getCharacteristic("limit_quota")} MB{" "}
                    <br />
                    <b>Оперативная память (RAM):</b>{" "}
                    {getCharacteristic("limit_memory")} MB <br />
                    <b>Трафик:</b> Unlimited <br />
                    <b>Доменов/поддоменов:</b>{" "}
                    {getCharacteristic("limit_domains")} шт.
                    <br />
                    <b>FTP-доступ:</b> {getCharacteristic("limit_ftp_users")}{" "}
                    шт.
                    <br />
                    <b>POP3-ящики:</b> {getCharacteristic("limit_emails")} шт.
                    <br />
                    <b>Базы данных:</b> {getCharacteristic("limit_db")} шт.
                    <br />
                    <b>Планировщик (CRON):</b>{" "}
                    {getCharacteristic("limit_scheduler")} шт.
                    <br />
                    __________________
                    <br />
                    <b>Цена в день:</b> {tarif.price["86400"]} сум
                    <br />
                    <b>Цена в месяц:</b> {tarif.price["2592000"]} сум
                    <br />
                    <b>Цена в год:</b> {tarif.price["31536000"]} сум
                    <br />
                    <a
                      href={`/orders/product/hosting/registration/${tarif.id}`}
                    >
                      <center>
                        <input
                          className="btn btn-default"
                          type="submit"
                          value={`Заказать "${tarif.name}"`}
                        />
                      </center>
                    </a>
                  </div>
                </div>
              );
            })}
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

export default MyXvestHosting;
