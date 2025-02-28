import useFetchUserProfile from "../components/useFetchUserProfile";

const ReferralsPage = () => {
  useFetchUserProfile();
  return (
    <div id="get_ajax_content">
      <div id="set_ajax_content">
        <div className="mOm">
          <div className="block first">
            <div className="title">Рефереалы</div>
            <div className="menu">
              <font color="red"></font>
              <center>
                <font color="red">Пусто</font>
              </center>
            </div>
          </div>
          <div className="menu">
            <a href="/">
              <img
                src="https://www.myxvest.ru/style/wap/style/image/png/up.png"
                alt="Na glavnuju"
              />{" "}
              На главную
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReferralsPage;
