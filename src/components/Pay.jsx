import React, { useState } from 'react'

const Pay = () => {
    const [amount, setAmount] = useState("");

  const handleChange = (e) => {
    setAmount(e.target.value);
  };
  return (
    <>
      <div className="container">
      <div className="mOm">
        <div className="block first">
          <div className="title">Пополнение баланса</div>
          <div className="menu">
            <b>Ваш баланс</b>: 0.00 сум
          </div>
          <div className="menu">
            <form action="?" method="post">
              <label>Сумма:</label>
              <input
                name="summa"
                type="number"
                step="0.01"
                autoComplete="off"
                value={amount}
                onChange={handleChange}
              />
              <br />
              <input
                name="clickuz"
                className="btn btn-default"
                type="submit"
                value="Click Uzbekistan"
              />
              <input
                name="paymeuz"
                className="btn btn-default"
                type="submit"
                value="Payme"
              />
              <input type="hidden" name="SID" value="1039bb52edf17d72d70cbc591eeb56eb" />
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
    
    </>
  )
}

export default Pay