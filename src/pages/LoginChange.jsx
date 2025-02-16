import { useState, useEffect } from "react";
import axios from "axios";
const LoginChange = () => {
  const token = localStorage.getItem("token");
  const [login, setLogin] = useState(localStorage.getItem("userLogin") || "");
  const [newLogin, setNewLogin] = useState(login);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const savedLogin = localStorage.getItem("userLogin");
    if (savedLogin) {
      setLogin(savedLogin);
      setNewLogin(savedLogin);
    }
  }, []);

  // 🔥 Input o'zgarishini to‘g‘ri ushlash
  const handleLoginChange = (e) => {
    setNewLogin(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
    .put("https://api.sysdc.uz/api/v1/user/profile", {
      username: newLogin,
    }, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
   
   
    setLogin(newLogin);
    setMessage("Логин успешно изменен!");

    // 🔥 Event jo‘natish
    window.dispatchEvent(new Event("userLoginUpdated"));

    setTimeout(() => setMessage(""), 3000);
  };

  return (
    <div>
      <div className="mOm">
        <div className="block first">
          <div className="title">Изменить логин</div>
          <div className="menu">
            <form onSubmit={handleSubmit}>
              Логин:
              <br />
              <input
                type="text"
                name="editlogin"
                maxLength="15"
                value={newLogin}
                onChange={handleLoginChange} // ✅ To‘g‘ri funksiya
                autoComplete="off"
              />
              <br />
              <input className="btn btn-default" type="submit" value="Изменить" />
            </form>
            {message && <p style={{ color: "green" }}>{message}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginChange;
