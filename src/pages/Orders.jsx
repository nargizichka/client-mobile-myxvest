import Up from "../assets/image/png/up.png";

const Orders = () => {
  return (
    <div>
      <div className="mOm">
        <div className="block first">
          <div className="title">
            Мои заказы
            <span style={{ float: "right" }}>
              <a href="/order">Заказать новую услугу</a>
            </span>
          </div>
          <div className="menu">
            <center>
              <font color="red">Вы ещё не заказали</font>
            </center>
          </div>
        </div>
        <div className="menu">
          <a href="/">
            <img
              src={Up}
              alt="Назад"
            />{" "}
            На главную
          </a>
        </div>
      </div>
    </div>
  );
};

export default Orders;
