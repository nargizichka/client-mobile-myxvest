import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Order from "./pages/Order";
import Domen from "./pages/Domen";
import Footer from "./components/Footer";
import New from "./pages/New";
import Information from "./pages/Information";
import Rules from "./pages/Rules";
import Payment from "./pages/Payment";
import RegistrationPage from "./pages/RegistrationPage";
import LoginPage from "./pages/LoginPage";
import MailPage from "./pages/MailPage";
import Notifications from "./pages/Notifications";
import Orders from "./pages/Orders";
import Settings from "./components/Settings";
import Profile from "./pages/Profile";
import Payments from "./pages/Payments";
import MyDomenCabinet from "./components/MyDomenCabinet";
import ListsAuth from "./pages/ListsAuth";
import ExitPage from "./pages/ExitPage";
import MovementsPage from "./pages/MovementsPage";
import PromoCode from "./pages/PromoCode";
import TelegramAccount from "./pages/TelegramAccaunt";
import My_profayl from "./pages/My_profayl";
import ProfaylForm from "./pages/ProfaylForm";
import LoginChange from "./pages/LoginChange";
import ChangePassword from "./pages/ChangePassword";
import ReferralsPage from "./pages/ReferralsPage";
import EmailChanges from "./pages/EmailChanges";

function App() {
  return (
    <>
      <Header />
      <div id="get_ajax_content">
        <div id="set_ajax_content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/order" element={<Order />} />
            <Route path="/domen" element={<Domen />} />
            <Route path="/news" element={<New />} />
            <Route path="/info" element={<Information />} />
            <Route path="/rules" element={<Rules />} />
            <Route path="/payments" element={<Payment />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/registration" element={<RegistrationPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/mail" element={<MailPage />} />
            <Route path="/user/inor" element={<Notifications />} />
            <Route path="/my_orders" element={<Orders />} />
            <Route path="/profile" element={<Profile/>} />
            <Route path="/pay" element={<Payments/>} />
            <Route path="/domen/mydomen" element={<MyDomenCabinet/>} />
            <Route path="/user/listauth" element= {<ListsAuth/>}/>
            <Route path="*" element={() => <h1>404 Not Found</h1>} />
            <Route path="/user/exit" element={<ExitPage/>} />
            <Route path="/user/moneyhistory" element={<MovementsPage/>} />
            <Route path="/user/promo-code/list" element={<PromoCode/>} />
            <Route path="/user/refereal" element={<ReferralsPage/>} />
            <Route path="/user/tg" element={<TelegramAccount/>} />
            <Route path="/profayl/my_profayl" element={<My_profayl/>} />
            <Route path="/profayl/new" element={<ProfaylForm/>} />
            <Route path="/user/editlogin" element={<LoginChange/>} />
            <Route path="/user/sett" element={<ChangePassword/>} />
            <Route path="/user/email" element={<EmailChanges/>} />
          </Routes>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
