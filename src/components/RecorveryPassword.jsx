import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import Up from "../assets/image/png/up.png";
const RecorveryPassword = () => {
  const [email, setEmail] = useState("");
  const [captcha, setCaptcha] = useState(generateCaptcha());
  const [captchaInput, setCaptchaInput] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [messageType, setMessageType] = useState("");
  function generateCaptcha() {
    const digits = "0123456789";
    let captcha = "";
    for (let i = 0; i < 4; i++) {
      captcha += digits[Math.floor(Math.random() * 10)];
    }
    return captcha;
  }

  const handleRegenerateCaptcha = () => {
    setCaptcha(generateCaptcha());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (captcha !== captchaInput) {
      setMessage("Captcha mos emas.");
      setMessageType("alert alert-danger");
      return;
    }

    setLoading(true);
    try {
      await axios.post(
        "https://api.sysdc.uz/api/v1/user/auth/forget-password/email/get-code",
        { email },
        { headers: { Accept: "application/json" } }
      );

      setMessage("Passwordni qaytadan tiklash uchun havola yuborildi.");
      setMessageType("alert alert-success");
    } catch (error) {
      console.error(error.response);

      if (error.response?.data?.code === 422) {
        setMessage("Email xato. Iltimos tekshirib qaytadan kiriting!");
      }
      setMessageType("alert alert-danger");
    } finally {
      setLoading(false);
      setTimeout(() => {
        setMessage("");
      }, 1500);
    }
  };

  return (
    <div id="get_ajax_content">
      <div id="set_ajax_content">
        <div className="mOm">
          <div className="block first">
            <div className="title">Восстановление пароля</div>
            <form onSubmit={handleSubmit}>
              <div className="menu">
                <label>Email:</label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <br />
                <label>Введите капчу:</label>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      width: "100px",
                    }}
                  >
                    {captcha.split("").map((digit, index) => (
                      <span
                        key={index}
                        style={{
                          color: `#${Math.floor(
                            Math.random() * 16777215
                          ).toString(16)}`,
                          fontFamily: "Arial, sans-serif",
                          fontSize: "20px",
                          fontWeight: "bold",
                        }}
                      >
                        {digit}
                      </span>
                    ))}
                  </div>
                  <button
                    type="button"
                    onClick={handleRegenerateCaptcha}
                    style={{ marginLeft: "10px", marginBottom: "5px" }}
                  >
                    &#x21bb;
                  </button>
                </div>
                <input
                  type="text"
                  name="captchaInput"
                  value={captchaInput}
                  onChange={(e) => setCaptchaInput(e.target.value)}
                  required
                />
                <br />
                <input
                  className="btn btn-default"
                  type="submit"
                  value={loading ? "Восстановил" : "Восстановить"}
                  disabled={loading}
                />
                {message && (
                  <p className={messageType} style={{ margin: "5px" }}>
                    {message}
                  </p>
                )}
              </div>
            </form>
          </div>
          <div className="menu">
            <Link to="/">
              <img src={Up} alt="Up" /> На главную
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecorveryPassword;
