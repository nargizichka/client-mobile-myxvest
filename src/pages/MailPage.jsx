import Up from "../assets/image/png/up.png";
import useFetchUserProfile from "../components/useFetchUserProfile";
const MailPage = () => {
  useFetchUserProfile();
  return (
    <div id="get_ajax_content">
      <div id="set_ajax_content">
        <div className="mOm">
          <div className="block first">
            <form method="get" className="menu">
              <table style={{ width: "100%" }}>
                <tr>
                  <td style={{ width: "100%" }}>
                    <input
                      style={{ width: "90%", marginBottom: "0px" }}
                      placeholder="Введите ID номер"
                      type="number"
                      name="id_user"
                    />
                  </td>
                  <td>
                    <input
                      className="btn btn-default"
                      type="submit"
                      value="Переписоватся"
                    />
                  </td>
                </tr>
              </table>
            </form>
            <div className="title">Контакты</div>
            <a href="/mail/chat/7538">
              <div className="menu">
                <b>Сохраненные сообщения</b>
              </div>
            </a>
          </div>
          <div className="menu">
            <a href="/">
              <img src={Up} alt="На главную" />
              На главную
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MailPage;
