import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Up from "../assets/image/png/up.png";

const ChangePhone = () => {
  const token = localStorage.getItem("token");
  const [oldPhone, setOldPhone] = useState(""); // Eski telefon raqami
  const [newPhone, setNewPhone] = useState(""); // Yangi telefon raqami
  const [password, setPassword] = useState(""); // Parol
  const [code, setCode] = useState(""); // Tasdiqlash kodi
  const [message, setMessage] = useState("");
  const [codeSent, setCodeSent] = useState(false);

  // Eski telefon raqamni olish
  useEffect(() => {
    const fetchPhoneNumber = async () => {
      try {
        const response = await axios.get(
          "https://api.sysdc.uz/api/v1/user/profile",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (response.data?.data?.phone_number) {
          setOldPhone(response.data.data.phone_number);
        }
      } catch (error) {
        console.error("Telefon raqam olishda xatolik:", error);
      }
    };

    if (token) {
      fetchPhoneNumber();
    }
  }, [token]);

  // Inputlarni yangilash
  const handleNewPhoneChange = (e) => setNewPhone(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleCodeChange = (e) => setCode(e.target.value);

  // Kod olish
  const handleGetCode = async (e) => {
    e.preventDefault();
    if (!newPhone || !password) {
      setMessage("Iltimos, yangi telefon raqami va parolni kiriting!");
      return;
    }

    try {
      const response = await axios.post(
        "https://api.sysdc.uz/api/v1/user/security/phone-number/change/get-code",
        {
          phone_number: newPhone,
          password: password, // 🔥 API parolni ham talab qilgan
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("Javob:", response.data);
      setCodeSent(true);
      setMessage("Tasdiqlash kodi yuborildi! Telefoningizni tekshiring.");
    } catch (error) {
      console.error("Kod olishda xatolik:", error.response?.data || error);
      setMessage(
        error.response?.data?.errors?.password?.[0] || "Xatolik yuz berdi."
      );
    }
  };

  // Kodni tasdiqlash
  const handleConfirmCode = async (e) => {
    e.preventDefault();
    if (!code) {
      setMessage("Iltimos, tasdiqlash kodini kiriting!");
      return;
    }

    try {
      const response = await axios.post(
        "https://api.sysdc.uz/api/v1/user/security/phone-number/change/confirmation",
        {
          phone_number: newPhone,
          code: code,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("Tasdiqlash javobi:", response.data);
      setMessage("Telefon raqami muvaffaqiyatli o'zgartirildi! ✅");
      setOldPhone(newPhone);
      setNewPhone("");
      setPassword("");
      setCode("");
      setCodeSent(false);
    } catch (error) {
      console.error("Tasdiqlashda xatolik:", error.response?.data || error);
      setMessage("Kod noto‘g‘ri yoki muddati tugagan.");
    }
  };

  return (
    <div>
      <div className="mOm">
        <div className="block first">
          <div className="title">Смена телефона</div>
          <div className="menu">
            {!codeSent ? (
              <form onSubmit={handleGetCode} className="change-data-form">
                <p>Текущий номер: {oldPhone || "Yuklanmoqda..."}</p>
                <label>Новый номер:</label>
                <input
                  type="tel"
                  value={newPhone}
                  onChange={handleNewPhoneChange}
                  placeholder="+998 XX XXX XX XX"
                  required
                />
                <label>Пароль:</label>
                <input
                  type="password"
                  value={password}
                  onChange={handlePasswordChange}
                  placeholder="********"
                  required
                />
                <br />
                <button className="btn btn-default" type="submit">
                  Получить код
                </button>
              </form>
            ) : (
              <form onSubmit={handleConfirmCode}>
                <p>На номер {newPhone} был отправлен код подтверждения.</p>
                <label>Введите код:</label>
                <input
                  type="text"
                  value={code}
                  onChange={handleCodeChange}
                  placeholder="123456"
                  required
                />
                <button className="btn btn-default" type="submit">
                  Подтвердить
                </button>
              </form>
            )}
            {message && <p style={{ color: "red" }}>{message}</p>}
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

export default ChangePhone;
