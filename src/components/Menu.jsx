import { Link } from "react-router-dom";
import News from "../assets/image/png/news.png";
import Admin from "../assets/image/png/admin.png";
import Qoida from "../assets/image/png/qoida.png";
import Pay from "../assets/image/png/pay.png";
import Manager from "../assets/image/png/manager.png";
const Menu = () => {
  const token = localStorage.getItem("token");
  return (
    <div>
      <div>
        <div>
          <div className="title">Меню Сайта</div>
          {token ? (
            <div className="menu">
              <img src={Manager} alt="*" width="16px" height="16px" />{" "}
              <Link to="/my_orders">Управление Сайтом </Link>
            </div>
          ) : null}
          <div className="menu">
            <img src={News} alt="*" width="16px" height="16px" />{" "}
            <Link to="/news">Новости </Link>[0]
          </div>
          <div className="menu">
            <img src={Admin} alt="*" width="16px" height="16px" />{" "}
            <a href="/info"> Служба поддержки</a>
          </div>
          <div className="menu">
            <img src={Qoida} alt="*" width="16px" height="16px" />{" "}
            <a href="rules"> Правила хостинга</a>
          </div>
          <div className="menu">
            <img src={Pay} alt="*" width="16px" height="16px" />{" "}
            <Link to="/payments">Способы оплаты</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
