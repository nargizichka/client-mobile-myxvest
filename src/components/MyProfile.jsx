import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const MyProfile = () => {
  const token = localStorage.getItem("token");
  const [user, setUser] = useState();
  const [time, setTime] = useState(new Date().toLocaleTimeString("ru-RU"));
  const [authHistory, setAuthHistory] = useState(null); 
  const [moneyHistory, setMoneyHistory] = useState(null); 

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

   
    axios
      .get("https://api.sysdc.uz/api/v1/user/auth-history", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setAuthHistory(res.data.data);
      });

  
    axios
      .get("https://api.sysdc.uz/api/v1/user/payment/history", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setMoneyHistory(res.data.data);
      });


   
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString("ru-RU"));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

 
  useEffect(() => {
    const updateUserLogin = () => {
      const updatedLogin = localStorage.getItem("userLogin");
      setUser((prevUser) => ({
        ...prevUser,
        firstname: updatedLogin,
      }));
    };

    window.addEventListener("userLoginUpdated", updateUserLogin);

    return () =>
      window.removeEventListener("userLoginUpdated", updateUserLogin);
  }, []);

  return (
    <>
      <div>
        <div className="mOm">
          <div className="block first">
            <div className="title">
              Здравствуйте, {user?.firstname || "Гость"}!
            </div>
            <div className="menu">
              <b>ID Пользователя</b>: <b>7538</b>
              <br />
              <b>Ваш баланс</b>: <b>0.00 Сум</b>
              <br />
              <b>Курс валюты</b>: <b>1 руб. = 145 Сум</b>
              <br />
              <b>Время</b>: <span>{time} (UZB)</span>
              <br />
            </div>
            <div className="menu">
            • <Link to="/pay">
                Пополнить баланс
              </Link>
            </div>
            <div className="menu">
            • <Link to="/my_orders">
              Заказы хостингов [0]
              </Link>
            </div>
            {/* <div className="menu">
              •{" "}
              <Link to="/domen/mydomen/">
                Заказы доменов <font color="red">(новый)</font>
              </Link>
            </div> */}
            <div className="title">Кабинет</div>
            <div className="menu">
              •{" "}
              <Link to="/user/listauth">
                История авторизации{" "}
                {authHistory ? `[${authHistory.length}/0]` : ""}
              </Link>
            </div>
            <div className="menu">
              •{" "}
              <Link to="/user/moneyhistory">
                Движение средств{" "}
                {moneyHistory ? (
                  <span
                    className={
                      moneyHistory.length > 0 ? "green-text" : "red-text"
                    }
                  >
                    [{moneyHistory.length}/0]
                  </span>
                ) : (
                  ""
                )}
              </Link>
             
            </div>
            <div className="menu">
            • <Link to="/profayl/my_profayl">
            Профайл
              </Link>
            </div>
            {/* <div className="menu">
            • <Link to="/user/promo-code/list">
               История промо-кода
              </Link>
            </div> */}
            {/* <div className="menu">
              •{" "}
              <Link to="/user/refereal">
                Рефереалы
                <span
                  style={{
                    color:
                      referrals !== null && referrals !== 0 ? "green" : "red",
                  }}
                >
                  {referrals !== null ? `[${referrals}]` : "[0 сум]"}
                </span>
              </Link>
            </div> */}
            {/* <div className="menu">
              •{" "}
              <Link to="/user/tg">
                Телеграм аккаунт{" "}
                <span
                  style={{
                    color: telegramStatus === "Подключен" ? "green" : "red",
                  }}
                >
                  [{telegramStatus}]
                </span>
              </Link>
             
             
            </div> */}
            <div className="menu">
            • <Link to="/user/editlogin">
             Изменить логин
              </Link>
            </div>
            <div className="menu">
            • <Link to="/user/email">
             Изменить E-Mail
              </Link>
            </div>
            <div className="menu">
            • <Link to="/user/tell">
             Изменить Теллефон номер
              </Link>
            </div>
            <div className="menu">
            • <Link to="/user/personal">
             Изменить Персональная информация
              </Link>
            </div>
            <div className="menu">
            • <Link to="/user/sett">
             Изменить пароль
              </Link>
            </div>
            <div className="menu">
            • <Link to="/user/exit">
               Выход
              </Link>
            </div>
          </div>
          {/* <div className="title">Ваша рефереальная ссылка</div>
          <div className="menu">
            <font color="red">
              <b>*</b>
            </font>{" "}
            С этой ссылкой вы можете зарегистрировать нового пользователя на
            нашем хостинге, и каждый раз, когда этот пользователь пополнит свой
            счет, вы также получаете доход.
            <br />
            <input
              type="text"
              value="https://www.myxvest.ru/ref/7538/"
              disabled
            />
          </div> */}
        </div>
      </div>
    </>
  );
};

export default MyProfile;
