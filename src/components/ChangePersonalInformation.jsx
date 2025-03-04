import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Up from "../assets/image/png/up.png";

const ChangePersonalInfo = () => {
  const token = localStorage.getItem("token");

  const [userData, setUserData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    birthday: "",
    sex: "",
  });

  const [message, setMessage] = useState("");

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
          setUserData({
            firstname: response.data.data.firstname || "",
            lastname: response.data.data.lastname || "",
            email: response.data.data.email || "",
            birthday: response.data.data.birthday || "",
            sex: response.data.data.sex || "",
          });
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    if (token) {
      fetchUserData();
    }
  }, [token]);

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

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
      console.log("Update response:", response.data);
      setMessage("Shaxsiy ma'lumotlar muvaffaqiyatli o'zgartirildi.");
      setTimeout(() => {
        setMessage("");
      }, 1500);
    } catch (error) {
      console.error("Xatolik :", error.response?.data || error);
      setMessage("Shaxsiy ma'lumotlarni o'zgartirishda xatolik yuz berdi.");
      setTimeout(() => {
        setMessage("");
      }, 1500);
    }
  };

  return (
    <div>
      <div className="mOm">
        <div className="block first">
          <div className="title">Изменение личных данных</div>
          <div className="menu">
            {message && <p style={{ color: "green" }}>{message}</p>}
            <form onSubmit={handleUpdate}>
              <label>Имя:</label>
              <input
                type="text"
                name="firstname"
                value={userData.firstname}
                onChange={handleChange}
                required
              />

              <label>Фамилия:</label>
              <input
                type="text"
                name="lastname"
                value={userData.lastname}
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
                name="birthday"
                value={userData.birthday}
                onChange={handleChange}
                required
              />

              <label>Пол:</label>
              <select
                name="sex"
                value={userData.sex}
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
