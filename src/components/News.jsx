import { Link } from "react-router-dom";
import Up from "../assets/image/png/up.png";
const News = () => {
  return (
    <div id="get_ajax_content">
      <div id="set_ajax_content">
        <div className="mOm">
          <div className="block first">
            <div className="menu">
              <center>
                <font color="red">Нет новостей.</font>
              </center>
            </div>
          </div>
          <div className="menu">
            <Link to="/">
              <img src={Up} alt="На главную" /> На
              главную
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;