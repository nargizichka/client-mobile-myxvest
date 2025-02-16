import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Up from "../assets/image/png/up.png";
const ChangeEmail = () => {
  const token = localStorage.getItem("token");
  const [email, setEmail] = useState(""); 
  const [newEmail, setNewEmail] = useState(""); 
  const [message, setMessage] = useState("");
  useEffect(() => {
    const fetchEmail = async () => {
      try {
        const response = await axios.get("https://api.sysdc.uz/api/v1/user/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (response.data && response.data.data && response.data.data.email) {
          setEmail(response.data.data.email); 
        } else {
          console.error("API email qaytarmadi!");
        }
      } catch (error) {
        console.error("Email olishda xatolik:", error.response ? error.response.data : error);
      }
    };
  
    if (token) {
      fetchEmail();
    } else {
      console.error("Token mavjud emas!");
    }
  }, [token]);
  
  


  const handleEmailChange = (e) => {
    setNewEmail(e.target.value);
  };

  //  Emailni API orqali yangilash
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.put(
            "https://api.sysdc.uz/api/v1/user/profile",
            { email: newEmail }, // 🔥 API ga yuborilayotgan data
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          console.log("Javob:", response.data);
      setEmail(newEmail); // Emailni yangilash
      setMessage("E-mail успешно изменен!");

      setTimeout(() => setMessage(""), 3000);
    } catch (error) {
      console.error("Emailni yangilashda xatolik:", error);
      setMessage("Xatolik yuz berdi, qaytadan urinib ko'ring.");
    }
  };

  return (
    <div>
      <div className="mOm">
        <div className="block first">
          <div className="title">Смена E-mail</div>
          <div className="menu">
            <form onSubmit={handleSubmit}>
              <p>Нынешний E-mail: {email || "Yuklanmoqda..."}</p> {/* 🔥 API dan kelgan email */}
              <p>############################</p>
              <label>Новый E-mail:</label>
              <input
                type="email"
                name="email"
                value={newEmail}
                onChange={handleEmailChange}
                required
              />
              <br />
              <button className="btn btn-default" type="submit">
                Продолжить
              </button>
            </form>
            {message && <p style={{ color: "green" }}>{message}</p>}
          </div>
        </div>
        <div className="menu">
        <Link to="/">
            <img
              src={Up}
              alt="На главную"
            />
            На главную
        </Link>
        
        </div>
      </div>
    </div>
  );
};

export default ChangeEmail;
