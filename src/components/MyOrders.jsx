import { Link } from 'react-router-dom';
import Up from "../assets/image/png/up.png";
const MyOrders = () => {
  return (
            <div className="mOm">
              <div className="block first">
                <div className="title">
                  <a href="product/hosting.html">Hosting</a> (6)
                </div>
                <div className="menu">
                  Интернет-хостинг - это вид услуг, который предоставляет
                  физическим и юридическим лицам возможность размещать свои
                  веб-страницы на веб-серверах, которые постоянно подключены к
                  Интернету. Вы можете использовать сайт для размещения в
                  Интернете.
                </div>
                <div className="title">
                  <a href="product/reseller.html">Reselling</a> (5)
                </div>
                <div className="menu">
                  Реселинг - это тип сервиса, который состоит из нескольких
                  пользователей и может обслуживать этих нескольких
                  пользователей.
                </div>
              </div>
              <div className="menu">
                <Link to="/"> <img src={Up} alt="Up" /> На
                  главную
                </Link>
              </div>
            </div>
  );
};

export default MyOrders;
