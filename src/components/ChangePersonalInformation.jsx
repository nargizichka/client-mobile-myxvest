import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Up from "../assets/image/png/up.png";

const ChangePersonalInfo = () => {
  const token = localStorage.getItem("token");

  // 🔥 Foydalanuvchi ma’lumotlarini olish va yangilash uchun state-lar
  const [userData, setUserData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    date_of_birth: "",
    gender: "",
  });

  const [message, setMessage] = useState("");

  // 🔥 API orqali foydalanuvchi ma’lumotlarini olish (GET)
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(
          "https://api.sysdc.uz/api/v1/user/profile",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (response.data?.data) {
          setUserData(response.data.data);
        }
      } catch (error) {
        console.error("Foydalanuvchi ma’lumotlarini olishda xatolik:", error);
      }
    };

    if (token) {
      fetchUserData();
    }
  }, [token]);

  // 🔥 Inputlarni o‘zgartirish
  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  // 🔥 Ma’lumotlarni yangilash (PUT orqali)
  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(
        "https://api.sysdc.uz/api/v1/user/profile",
        userData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("Yangilash javobi:", response.data);
      setMessage("Shaxsiy ma’lumotlar muvaffaqiyatli yangilandi! ✅");
    } catch (error) {
      console.error("Yangilashda xatolik:", error.response?.data || error);
      setMessage("Xatolik yuz berdi. Iltimos, qayta urinib ko‘ring.");
    }
  };

  return (
    <div>
      <div className="mOm">
        <div className="block first">
          <div className="title">Изменение личных данных</div>
          <div className="menu">
            <form onSubmit={handleUpdate}>
              <label>Имя:</label>
              <input
                type="text"
                name="first_name"
                value={userData.first_name}
                onChange={handleChange}
                required
              />

              <label>Фамилия:</label>
              <input
                type="text"
                name="last_name"
                value={userData.last_name}
                onChange={handleChange}
                required
              />

              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={userData.email}
                onChange={handleChange}
                required
              />

              <label>Дата рождения:</label>
              <input
                type="date"
                name="date_of_birth"
                value={userData.date_of_birth}
                onChange={handleChange}
                required
              />

              <label>Пол:</label>
              <select
                name="gender"
                value={userData.gender}
                onChange={handleChange}
                required
              >
                <option value="male">Мужчина</option>
                <option value="female">Женщина</option>
              </select>
              <br />

              <button className="btn btn-default" type="submit">
                Сохранить изменения
              </button>
            </form>
            {message && <p style={{ color: "green" }}>{message}</p>}
          </div>
        </div>

        <div className="menu">
          <Link to="/">
            <img src={Up} alt="На главную" /> На главную
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ChangePersonalInfo;
