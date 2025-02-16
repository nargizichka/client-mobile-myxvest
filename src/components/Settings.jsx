import Dark from "../assets/image/svg/Dark.svg";
import Default from "../assets/image/svg/DefaultActive.svg"
import Dim from "../assets/image/svg/Dim.svg"
import Up from "../assets/image/png/up.png";
const SiteSettings = () => {
  return (
    <div className="mOm">
      <div className="block first">
        <div className="title">Оформление сайта</div>
        <div className="menu">
          <div
            className="apperwanceBlock"
            app-xroot-id="appThemeDefault"
            style={{ display: "inline-block" }}
          >
            <img
            src={Default}
              app-xroot-id="appDefaultThemeIcon"
              alt="*"
              width="90px"
              style={{ display: "block" }}
            />
            <span
              style={{
                display: "block",
                textAlign: "center",
                fontWeight: "bold",
                paddingTop: "8px",
              }}
            >
              По умолчанию
            </span>
          </div>
          <div
            className="apperwanceBlock"
            app-xroot-id="appThemeDim"
            style={{ display: "inline-block" }}
          >
            <img
            src={Dim}
              app-xroot-id="appDimThemeIcon"
              alt="*"
              width="90px"
              style={{ display: "block" }}
            />
            <span
              style={{
                display: "block",
                textAlign: "center",
                fontWeight: "bold",
                paddingTop: "8px",
              }}
            >
              Сумерки
            </span>
          </div>
          <div
            className="apperwanceBlock"
            app-xroot-id="appThemeDark"
            style={{ display: "inline-block" }}
          >
            <img
              app-xroot-id="appDarkThemeIcon"
              src={Dark}
              alt="*"
              width="90px"
              style={{ display: "block" }}
            />
            <span
              style={{
                display: "block",
                textAlign: "center",
                fontWeight: "bold",
                paddingTop: "8px",
              }}
            >
              Ночной
            </span>
          </div>
        </div>
        <div className="title">Язык сайта (13)</div>
        <div className="menu">
          <a href="../language/kk.html">
            <img src="/languages/flag_kk.png" /> Қазақ тілі
          </a>
        </div>
        <div className="menu">
          <a href="../language/krl.html">
            <img src="/languages/flag_krl.png" /> Ўзбекча (Крил)
          </a>
        </div>
        <div className="menu">
          <a href="../language/gu.html">
            <img src="/languages/flag_gu.png" /> ქართული
          </a>
        </div>
        <div className="menu">
          <a href="../language/en.html">
            <img src="/languages/flag_en.png" /> English
          </a>
        </div>
        <div className="menu">
          <a href="../language/ky.html">
            <img src="/languages/flag_ky.png" /> Кыргыз тили
          </a>
        </div>
        <div className="menu">
          <a href="../language/uk.html">
            <img src="/languages/flag_uk.png" /> Українська
          </a>
        </div>
        <div className="menu">
          <a href="../language/tr.html">
            <img src="/languages/flag_tr.png" /> Türkçe
          </a>
        </div>
        <div className="menu">
          <a href="../language/am.html">
            <img src="/languages/flag_am.png" /> Հայոց լեզու
          </a>
        </div>
        <div className="menu">
          <a href="../language/tj.html">
            <img src="/languages/flag_tj.png" /> Тоҷикӣ
          </a>
        </div>
        <div className="menu">
          <a href="../language/az.html">
            <img src="/languages/flag_az.png" /> Azərbaycan dili
          </a>
        </div>
        <div className="menu">
          <a href="../language/uz.html">
            <img src="/languages/flag_uz.png" /> O'zbekcha (Lotin)
          </a>
        </div>
        <div className="menu">
          <a href="../language/be.html">
            <img src="/languages/flag_be.png" /> Belarus
          </a>
        </div>
        <div className="menu">
          <a href="../language/ru.html">
            <img src="/languages/flag_ru.png" /> Русский
          </a>
        </div>
      </div>
      <div className="menu">
        <a href="../language/ru.html">
          <img src={Up} /> На главную
        </a>
      </div>
    </div>
  );
};

export default SiteSettings;
