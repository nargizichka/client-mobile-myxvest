import { Link } from "react-router-dom";
import Cloud from "../assets/image/png/cloud.png";
import Domen from "../assets/image/png/domen.png";
const Services = () => {
  const token = localStorage.getItem("token");
  return (
    <div>
      <div>
        <div>
          <div className="title">Услуги</div>
          <div className="menu">
            <img src={Cloud} alt="*" width="16px" height="11px" />{" "}
            <Link to="/order">
              {" "}
              Виртуальный хостинг {!token ? "[Тарифы]" : null}
            </Link>
          </div>
          {/* <div className="menu">
            <img src={Domen} alt="*" width="16px" height="16px" />{" "}
            <a href={token ? "/domen" : "/login"}>
              {" "}
              Регистрация домена <font color="red">(Новый)</font>
            </a>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Services;
