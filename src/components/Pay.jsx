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
                    Balansni to'ldirish
                  </button>
                </form>
              </div>
              <div className="menu">
                <p className="alert alert-success">
                  Shuningdek, balans hisobini{" "}
                  <b style={{ color: "blue" }}>Click.Uz</b> orqali to'lov
                  tizimining rasmiy web-saytida ko'rsatilgan barcha usullar
                  orqali to'ldirishiz mumkin. To'lovni amalga oshirishda ID
                  raqamini va kerakli to'lov miqdorini kiriting.
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

// import axios from "axios";
// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import Click from "../assets/image/pay/clickuz.png";
// import Payme from "../assets/image/pay/payme.png";
// import Humans from "../assets/image/pay/humans.png";
// import Qiwi from "../assets/image/pay/qiwi.png";
// import Payyer from "../assets/image/pay/payeer.png";
// import YandexMoney from "../assets/image/pay/yandex_money.png";

// const Pay = () => {
//   const token = localStorage.getItem("token");
//   const [amount, setAmount] = useState("");
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     axios
//       .get("https://api.sysdc.uz/api/v1/user/profile", {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       })
//       .then((res) => {
//         setUser(res.data.data);
//       })
//       .catch((error) => {
//         console.error("Error fetching user data:", error);
//       });
//   }, [token]);

//   const handleChange = (e) => {
//     setAmount(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Amount submitted:", amount);
//   };

//   return (
//     <div className="container mt-4">
//       <div className="mOm">
//         <div className="block first"></div>
//         <div className="title">Пополнение баланса</div>
//       </div>
//       <div className="d-flex justify-content-between flex-wrap mb-3">
//         <img src={Click} alt="Click" className="payment-logo" />
//         <img src={Payme} alt="Payme" className="payment-logo" />
//         <img src={Humans} alt="Uzum Bank" className="payment-logo" />
//         <img src={YandexMoney} alt="Upay" className="payment-logo" />
//         <img src={Qiwi} alt="Paynet" className="payment-logo" />
//         <img src={Payyer} alt="Visa" className="payment-logo" />
//       </div>
//       <div className="card-body">
//         <div className="menu">
//           <b>Baw баланс:</b> {user?.accounts?.amount || "3730.00"} сум
//         </div>
//         <form onSubmit={handleSubmit}>
//           <div className="row mb-3">
//             <div className="col-md-6">
//               <div className="input-group">
//                 <input
//                   type="number"
//                   className="form-control"
//                   placeholder="Miqdorni kiriting:"
//                   value={amount}
//                   onChange={handleChange}
//                   step="0.01"
//                   autoComplete="off"
//                 />
//                 <button
//                   type="submit"
//                   className="btn btn-success"
//                   disabled={!amount}
//                 >
//                   Balansni to'ldirish
//                 </button>
//               </div>
//             </div>
//           </div>
//           <div className="mb-3">
//             <p className="alert alert-success">
//               Shuningdek, balans hisobini Click.Uz orqali to'lov tizimining
//               rasmiy web-saytida ko'rsatilgan barcha usullar orqali to'ldirishiz
//               mumkin. To'lovni amalga oshirishda ID raqamini va kerakli to'lov
//               miqdorini kiriting.
//             </p>
//           </div>
//         </form>
//         <div className="menu">
//           <Link to="/" className="btn btn-link">
//             <img
//               src="https://www.myxvest.ru/style/wap/style/image/png/up.png"
//               alt="Back to Home"
//               className="me-2"
//             />
//             На главную
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Add custom CSS
// const styles = `
//   .payment-logo {
//     max-width: 60px;
//     margin: 0 10px;
//   }

//   .card-header {
//     border-radius: 5px 5px 0 0;
//   }

//   .input-group .btn-success {
//     border-top-left-radius: 0;
//     border-bottom-left-radius: 0;
//   }

//   @media (max-width: 768px) {
//     .payment-logo {
//       max-width: 40px;
//       margin: 5px;
//     }
//   }
// `;

// const styleSheet = document.createElement("style");
// styleSheet.textContent = styles;
// document.head.appendChild(styleSheet);

// export default Pay;
