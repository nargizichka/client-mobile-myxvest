import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const EmailVerification = () => {
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  useEffect(() => {
    const savedEmail = localStorage.getItem("email");
    if (!savedEmail) {
      alert("Email topilmadi, iltimos, qayta ro'yxatdan o'ting.");
      navigate("/register");
    } else {
      setEmail(savedEmail);
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await axios.post("https://api.sysdc.uz/api/v1/user/security/email/verify/confirmation", {
        email,
        code,
      });

      alert("Email muvaffaqiyatli tasdiqlandi!");
      localStorage.removeItem("email"); // LocalStorage'dan emailni o'chiramiz
      navigate("/login");  // Login sahifasiga yo'naltirish
    } catch (error) {
      alert("Xatolik: " + (error.response?.data?.message || "Kod noto‘g‘ri!"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="verification-container">
      <h2>Emailni tasdiqlash</h2>
      <p>Emailingizga kod yuborildi: <b>{email}</b></p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Tasdiqlash kodi"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? "Tekshirilmoqda..." : "Tasdiqlash"}
        </button>
      </form>
    </div>
  );
};

export default EmailVerification;
