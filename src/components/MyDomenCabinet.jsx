import { Link } from "react-router-dom";
const MyDomenCabinet = () => {
  // useFetchUserProfile();
  return (
    <>
      <div id="get_ajax_content">
        <div id="set_ajax_content">
          <div className="mOm">
            <div className="block first">
              <div className="title">
                Мои домены
                <div style={{ float: "right" }}>
                  <a href="/domen">Покупка домена</a>
                </div>
              </div>
              <div className="menu">
                <center>
                  <span style={{ color: "red" }}>Нет домена.</span>
                </center>
              </div>
              <div className="menu">
                <Link to="/profile">« Назад</Link>
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
    </>
  );
};

export default MyDomenCabinet;
