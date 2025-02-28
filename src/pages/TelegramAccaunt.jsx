import useFetchUserProfile from "../components/useFetchUserProfile";

const TelegramAccount = () => {
  useFetchUserProfile();
  return (
    <div id="get_ajax_content">
      <div id="set_ajax_content">
        <div className="mOm">
          <div className="block first">
            <div className="title">Телеграм аккаунт</div>
            <div className="menu">
              <center>
                <font color="red">Ваш телеграм аккаунт не подключен!</font>
              </center>
            </div>
            <div className="menu">
              Для подключение телеграм аккаунт отправите код активация на наш
              бот!
              <br />
              <b>Наш бот</b>: @MyXvestRuBot
              <br />
              <b>Код активация</b>: 03e2b7c34abf9655973421e76160183d
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

export default TelegramAccount;
