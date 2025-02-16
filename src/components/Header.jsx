import Support from "../assets/image/png/support.png";
import Home from "../assets/image/png/home.png";
import Auth from "../assets/image/png/auth1.png";
import Reg from "../assets/image/png/reg1.png";

import User2 from "../assets/image/png/us2.png";
import Mail from "../assets/image/png/mail.png";
import N from "../assets/image/png/n.png";
const Header = () => {
  const token = localStorage.getItem("token");
  return (
    <div>
      <header>
        <table>
          <tbody>
            <tr>
              <td className="l_bar">
                <a href="/">
                  <img src={Home} width={23} alt="home" />
                </a>
              </td>
              <td className="c_bar">
                <h1 id="logo">Sysdc.uz</h1>
              </td>
              <td className="r_bar">
                <a href={token ? "/profile" : "/login"} title="Кабинет">
                  <img width={23} src={token ? User2 : Auth} alt="Кабинет" />
                </a>
              </td>
              <td className="r_bar">
                <a href={token ? "/mail" : "/registration"} title="Регистрация">
                  <img width={23} src={token ? Mail : Reg} alt="Регистрация" />
                </a>
              </td>
              {token ? (
                <td className="r_bar">
                  <a href="/user/inor" title="Регистрация">
                    <img width={23} src={N} alt="Регистрация" />
                  </a>
                </td>
              ) : null}
              <td className="r_bar">
                <a href="//t.me/myxvestru_support" title="Support">
                  <img width={23} src={Support} alt="Support" />
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </header>
    </div>
  );
};

export default Header;
