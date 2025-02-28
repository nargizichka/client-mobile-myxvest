import { Link } from "react-router-dom";
import useFetchUserProfile from "../components/useFetchUserProfile";

const PromoCode = () => {
  useFetchUserProfile();
  return (
    <div id="get_ajax_content">
      <div id="set_ajax_content">
        <div className="mOm">
          <div className="block first">
            <div className="title">
              Полученные промо коды
              <a href="?" style={{ float: "right" }}>
                Введит промо-код
              </a>
            </div>
            <div className="menu">
              Обшая сумма дохода: 0 сум.{" "}
              <span style={{ float: "right" }}>Количество прибыли: 0 шт.</span>
            </div>
            <div className="menu">
              <Link to="/profile">« Назад</Link>
            </div>
          </div>
          <div className="menu">
            <a href="/">
              <img
                src="https://www.myxvest.ru/style/wap/style/image/png/up.png"
                alt="Na glavnuю"
              />{" "}
              На главную
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromoCode;
