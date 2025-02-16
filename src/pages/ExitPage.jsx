import { useNavigate } from "react-router-dom";

const ExitPage = () => {
  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault(); // Formani qayta yuklanishini oldini olish
    localStorage.removeItem("token"); // Tokenni o‘chirish
    navigate("/"); // Home sahifasiga yo‘naltirish
    setTimeout(() => {
      window.location.reload(); // Saytni yangilash
    }, 100); // 100ms kutish (yo‘naltirishdan keyin)
  };

  return (
    <div id="get_ajax_content">
      <div id="set_ajax_content">
        <div className="mOm">
          <div className="block first">
            <div className="title">Выйти с аккаунта</div>
            <div className="menu">
              <form onSubmit={handleLogout}>
                Вы действительно хотите выйти с аккаунта?
                <br />
                <input
                  type="submit"
                  className="btn btn-default"
                  name="exit"
                  value="Да, выйти"
                />
              </form>
            </div>
          </div>

          <div className="menu">
            <a href="/">
              <img
                src="https://www.myxvest.ru/style/wap/style/image/png/up.png"
                alt="На главную"
              />
              На главную
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExitPage;
