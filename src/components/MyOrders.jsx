import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Up from "../assets/image/png/up.png";

const MyOrders = () => {
  const [servers, setServers] = useState([]);

  useEffect(() => {
    const fetchServers = async () => {
      try {
        const response = await axios.get("https://api.sysdc.uz/api/v1/services/hosting/servers");
        if (response.data.status && Array.isArray(response.data.data)) {
          setServers(response.data.data); // Faqat `data` ichidagi massivni olish
        } else {
          console.error("Noto'g'ri API ma'lumot tuzilishi:", response.data);
        }
      } catch (error) {
        console.error("API dan ma'lumot olishda xatolik:", error);
      }
    };

    fetchServers();
  }, []); 

  return (
    <div className="mOm">
      {servers.length > 0 ? (
        servers.map((server, index) => (
          <div key={server.id || index} className="block first">
            <div className="title">
              <Link to={`/orders/product/infohosting/${server.id}`}>
                {server.name} (ID: {server.id})
              </Link>
            </div>
            <div className="menu">
              <b>Местоположение:</b> {server.name} {/* Country nomi sifatida ishlatildi */}
              <br />
              <b>Процессор:</b> {server.characteristics?.CPU || "Noma'lum"}
              <br />
              <b>ОЗУ:</b> {server.characteristics?.RAM || "Noma'lum"}
              <br />
              <b>Панель:</b> 
              <a href={server.information?.PANEL_URL} target="_blank" rel="noopener noreferrer">
                {" "} {server.information?.PANEL_URL || "Noma'lum"}
              </a>
              <br />
              <b>Порты:</b> HTTP {server.ports?.HTTP}, HTTPS {server.ports?.HTTPS}, ISPMANAGER {server.ports?.ISPMANAGER}
              <br />
              <b>IP:</b> {server.ip}
              <br />
              <b>NS1:</b> {server.dns?.primary || "Noma'lum"}
              <br />
              <b>NS2:</b> {server.dns?.secondary || "Noma'lum"}
              <br />
              <b>PHPInfo:</b>
              <a href={`http://${server.ip}/phpinfo.php`} target="_blank" rel="noopener noreferrer">
                {" "} [посмотреть]
              </a>
            </div>
          </div>
        ))
      ) : (
        <p>Загрузка данных...</p>
      )}

      <div className="menu">
        <a href="/">
          <img src={Up} alt="up" />
          На главную
        </a>
      </div>
    </div>
  );
};

export default MyOrders;
