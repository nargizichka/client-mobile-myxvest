import axios from "axios";
import { useEffect, useState } from "react";
import Click from "../assets/image/pay/clickuz.png";
import Payme from "../assets/image/pay/payme.png";
import Humans from "../assets/image/pay/humans.png";
import Qiwi from "../assets/image/pay/qiwi.png";
import Payyer from "../assets/image/pay/payeer.png";
import YandexMoney from "../assets/image/pay/yandex_money.png";

const Pay = () => {
  const token = localStorage.getItem("token");
  const [amount, setAmount] = useState("");
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios
      .get("https://api.sysdc.uz/api/v1/user/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setUser(res.data.data);
      });
  }, [token]);

  const handleChange = (e) => {
    setAmount(e.target.value);
  };
  return (
    <>
      <div className="container">
        <div className="mOm">
          <div className="block first">
            <div className="title">Пополнение баланса</div>
            <div className="menu px-2">
              <b>Ваш баланс</b>: {user?.accounts?.amount} сум
            </div>
            <div className="menu">
              <div className="d-flex justify-content-between flex-wrap">
                <img src={Click} alt="Click" className="payment-logo" />
                <img src={Payme} alt="Payme" className="payment-logo" />
                <img src={Humans} alt="Humans" className="payment-logo" />
                <img
                  src={YandexMoney}
                  alt="YandexMoney"
                  className="payment-logo"
                />
                <img src={Qiwi} alt="Qiwi" className="payment-logo" />
                <img src={Payyer} alt="Payyer" className="payment-logo" />
              </div>
              <hr />
              <div className="nu">
                <form action="?" method="post" className="payment-form">
                  <label htmlFor="amount" className="">
                    Miqdorni kiriting:
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    value={amount}
                    onChange={handleChange}
                    step="0.01"
                    autoComplete="off"
                  />
                  <p>sum</p>
                  <button
                    type="submit"
                    className="btn btn-success"
                    disabled={!amount}
                  >
                    Balansni to&apos;ldirish
                  </button>
                </form>
              </div>
              <div className="menu">
                <p className="alert alert-success">
                  Shuningdek, balans hisobini{" "}
                  <b style={{ color: "blue" }}>Click.Uz</b> orqali to&apos;lov
                  tizimining rasmiy web-saytida ko&apos;rsatilgan barcha usullar
                  orqali to&apos;ldirishiz mumkin. To&apos;lovni amalga
                  oshirishda ID raqamini va kerakli to&apos;lov miqdorini
                  kiriting.
                </p>
              </div>
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
    </>
  );
};

export default Pay;
