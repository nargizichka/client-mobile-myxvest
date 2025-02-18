import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="not-found-container">
      <div className="not-found-card">
        <h1>404</h1>
        <h2>Sahifa topilmadi!</h2>
        <p>Kechirasiz, siz izlayotgan sahifa mavjud emas.</p>
        <Link to="/" className="back-home-link">
          🏠 Bosh sahifaga qaytish
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
