import Up from "../assets/image/png/up.png";

const Notifications = () => {
  return (
    <div id="get_ajax_content">
      <div id="set_ajax_content">
        <div className="mOm">
          <div className="block first">
            <div className="title">Уведомления</div>
            <div className="menu">
              <center>
                <font color="red">Уведомления пуст.</font>
              </center>
            </div>
          </div>
          <div className="menu">
            <a href="/">
              <img
                src={Up}
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

export default Notifications;
