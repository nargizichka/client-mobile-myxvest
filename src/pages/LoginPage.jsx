import { Link } from "react-router-dom";
import Up from "../assets/image/png/up.png";
import axios from "axios";

const LoginPage = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    axios
      .post("https://api.sysdc.uz/api/v1/user/auth/login", {
        login: e.target.login.value,
        password: e.target.pass.value,
      })
      .then((response) => {
        localStorage.setItem("token", response.data.data.access_token);
        window.location.replace("/");
      });
  };
  return (
    <div id="get_ajax_content">
      <div id="set_ajax_content">
        <div className="mOm">
          <div className="block first">
            <div className="title">Авторизация</div>
            <div className="menu">
              <form onSubmit={handleLogin}>
                <b>Электронная почта:</b>
                <br />
                <input type="text" name="login" />
                <br />
                <b>Пароль:</b>
                <br />
                <input type="password" name="pass" />
                <br />
                <label htmlFor="zap">
                  <input
                    type="checkbox"
                    name="save"
                    value="1"
                    id="zap"
                    defaultChecked
                  />
                  ㅤ<b>Запомнить</b>
                </label>
                <br />
                <input
                  type="submit"
                  className="btn btn-default"
                  name="auth"
                  value="Войти"
                />
                <input
                  type="hidden"
                  name="SID"
                  value="6b0d8a2b9ba5a3c1170a1208c39ce2a0"
                />
              </form>
            </div>
            <div className="title">Забыл Пароль?</div>
            <div className="menu">
              • <a href="../../../../user/repass.html">Восстановление пароля</a>
            </div>
          </div>
          <div className="menu">
            <Link to="/">
              <img src={Up} alt="Up" /> На главную
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
