import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChangePassword = async (e) => {
    e.preventDefault();
    setError("");

    if (newPassword !== confirmPassword) {
      setError("❌ Yangi parol tasdiqlash paroliga mos kelmaydi!");
      return;
    }

    const token = localStorage.getItem("token");
    if (!token) {
      setError("❌ Avtorizatsiya qilinmagan!");
      return;
    }

    try {
      setLoading(true);
      await axios.put(
        "https://api.sysdc.uz/api/v1/user/security/password",
        {
          old_password: oldPassword, // ✅ Eski parol
          password: newPassword, // ✅ Yangi parol
          password_confirmation: confirmPassword, // ✅ Tasdiqlash
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert(
        "✅ Parol muvaffaqiyatli o'zgartirildi! Qayta avtorizatsiya qilish kerak."
      );

      localStorage.removeItem("token");
      navigate("/login");
    } catch (error) {
      console.log("API Xatolik:", error.response?.data); // 🔍 Xatoni ko'rish uchun
      if (error.response?.status === 422) {
        const errorMessage =
          error.response?.data?.errors?.password?.[0] || "❌ Xato!";
        setError(errorMessage);
      } else {
        setError(
          "❌ Xatolik yuz berdi: " +
            (error.response?.data?.message || error.message)
        );
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="get_ajax_content">
      <div id="set_ajax_content">
        <div className="mOm">
          <div className="block first">
            <div className="title">Изменить пароль</div>
            <div className="menu">
              <form
                onSubmit={handleChangePassword}
                className="change-data-form"
              >
                {error && <p style={{ color: "red" }}>{error}</p>}

                <label>Действующий пароль:</label>
                <input
                  type="password"
                  value={oldPassword}
                  onChange={(e) => setOldPassword(e.target.value)}
                  maxLength="15"
                  required
                />

                <label>Новый пароль:</label>
                <input
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  maxLength="15"
                  required
                />

                <label>Повторите новый пароль:</label>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  maxLength="15"
                  required
                />
                <br />
                <button
                  className="btn btn-default"
                  type="submit"
                  disabled={loading}
                >
                  {loading ? "O'zgartirilmoqda..." : "Изменить"}
                </button>
              </form>
            </div>
          </div>
          <div className="menu">
            <Link to="/">
              <img
                src="https://www.myxvest.ru/style/wap/style/image/png/up.png"
                alt="На главную"
              />
              На главную
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
