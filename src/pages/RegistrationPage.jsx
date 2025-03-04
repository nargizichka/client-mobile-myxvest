import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Up from "../assets/image/png/up.png";
import axios from "axios";

const RegistrationPage = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    sex: "male",
    birthday: "",
    email: "",
    phone_number: "",
    password: "",
    password_confirmation: "",
    qoida: false,
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.qoida) {
      alert("Qoidalarga rozilik bildiring!");
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post(
        "https://api.sysdc.uz/api/v1/user/auth/register",
        {
          firstname: formData.firstname,
          lastname: formData.lastname,
          sex: formData.sex,
          birthday: formData.birthday,
          email: formData.email,
          phone_number: formData.phone_number,
          password: formData.password,
          password_confirmation: formData.password_confirmation,
        },
        { headers: { Accept: "application/json" } }
      );

      console.log("Ro‘yxatdan o‘tish muvaffaqiyatli:", response);
      navigate("/login");
    } catch (error) {
      console.error("Xatolik:", error.response?.data);
      alert(
        error.response?.data?.message ||
          "Ro‘yxatdan o‘tishda xatolik yuz berdi!"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="get_ajax_content">
      <div id="set_ajax_content">
        <div className="mOm">
          <div className="block first">
            <div className="title">Регистрация</div>
            <form onSubmit={handleSubmit}>
              <div className="menu">
                Имя:
                <br />
                <input
                  type="text"
                  name="firstname"
                  value={formData.firstname}
                  onChange={handleChange}
                  required
                />
                <br />
                Фамилия:
                <br />
                <input
                  type="text"
                  name="lastname"
                  value={formData.lastname}
                  onChange={handleChange}
                  required
                />
                <br />
                Пол:
                <br />
                <select
                  name="sex"
                  value={formData.sex}
                  onChange={handleChange}
                  required
                >
                  <option value="male">Мужской</option>
                  <option value="female">Женский</option>
                </select>
                <br />
                Дата рождения:
                <br />
                <input
                  type="date"
                  name="birthday"
                  value={formData.birthday}
                  onChange={handleChange}
                  required
                />
                <br />
                Адрес электронной почты:
                <br />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <br />
                Номер телефона:
                <br />
                <input
                  type="text"
                  name="phone_number"
                  pattern="\+998[0-9]{9}"
                  placeholder="+998 90 1234567"
                  value={formData.phone_number}
                  onChange={handleChange}
                  required
                />
                <br />
                Пароль:
                <br />
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                <br />
                Подтверждение пароля:
                <br />
                <input
                  type="password"
                  name="password_confirmation"
                  value={formData.password_confirmation}
                  onChange={handleChange}
                  required
                />
                <br />
                <label htmlFor="qoida">
                  <input
                    type="checkbox"
                    id="qoida"
                    name="qoida"
                    checked={formData.qoida}
                    onChange={handleChange}
                    required
                  />
                  Вы согласны с нашими <Link to="/rules">Правилами</Link>{" "}
                  хостинга?
                </label>
                <br />
                <input
                  className="btn btn-default"
                  type="submit"
                  value={loading ? "Yuklanmoqda..." : "Зарегистрироваться"}
                  disabled={loading}
                />
                <label style={{ marginTop: "5px" }}>
                  У вас уже есть аккаунт? <Link to="/login">Войти</Link> в
                  систему.
                </label>
              </div>
            </form>
          </div>
          <div className="menu">
            <Link to="/">
              <img src={Up} alt="На главную" /> На главную
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
