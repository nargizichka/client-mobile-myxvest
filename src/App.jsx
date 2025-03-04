import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Order from "./pages/Order";
import Domen from "./pages/Domen";
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
import MyHostingsPlans from "./pages/MyHostingsPlans";
import ChangePhone_Number from "./pages/ChangePhone_Number";
import ChangeUser_Information from "./pages/ChangeUser_Information";
import PrivateRoute from "./routes/PrivateRoute";
import GuestRoute from "./routes/GuestRoute";
import NotFound from "./pages/NoutFound";
import EmailVerification from "./pages/EmailVerify";
import PaymentConfirmation from "./pages/PaymentConfirmation";
import PasswordRecovery from "./pages/PasswordRecovery";

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

            {/* Faqat tizimga kirmaganlar (Guest) sahifalari */}
            <Route
              path="/registration"
              element={<GuestRoute element={<RegistrationPage />} />}
            />
            <Route
              path="/login"
              element={<GuestRoute element={<LoginPage />} />}
            />
            <Route
              path="/verify-email"
              element={<GuestRoute element={<EmailVerification />} />}
            />
            <Route
              path="/forgot-password"
              element={<GuestRoute element={<PasswordRecovery />} />}
            />

            {/* Faqat tizimga kirganlar (Private) sahifalari */}
            <Route
              path="/mail"
              element={<PrivateRoute element={<MailPage />} />}
            />
            <Route
              path="/user/inor"
              element={<PrivateRoute element={<Notifications />} />}
            />
            <Route
              path="/my_orders"
              element={<PrivateRoute element={<Orders />} />}
            />
            <Route
              path="/profile"
              element={<PrivateRoute element={<Profile />} />}
            />
            <Route
              path="/pay"
              element={<PrivateRoute element={<Payments />} />}
            />
            <Route
              path="/domen/mydomen"
              element={<PrivateRoute element={<MyDomenCabinet />} />}
            />
            <Route
              path="/user/listauth"
              element={<PrivateRoute element={<ListsAuth />} />}
            />
            <Route
              path="/user/exit"
              element={<PrivateRoute element={<ExitPage />} />}
            />
            <Route
              path="/user/moneyhistory"
              element={<PrivateRoute element={<MovementsPage />} />}
            />
            <Route
              path="/user/promo-code/list"
              element={<PrivateRoute element={<PromoCode />} />}
            />
            <Route
              path="/user/refereal"
              element={<PrivateRoute element={<ReferralsPage />} />}
            />
            <Route
              path="/user/tg"
              element={<PrivateRoute element={<TelegramAccount />} />}
            />
            <Route
              path="/profayl/my_profayl"
              element={<PrivateRoute element={<My_profayl />} />}
            />
            <Route
              path="/profayl/new"
              element={<PrivateRoute element={<ProfaylForm />} />}
            />
            <Route
              path="/user/editlogin"
              element={<PrivateRoute element={<LoginChange />} />}
            />
            <Route
              path="/user/sett"
              element={<PrivateRoute element={<ChangePassword />} />}
            />
            <Route
              path="/user/email"
              element={<PrivateRoute element={<EmailChanges />} />}
            />
            <Route
              path="/orders/product/infohosting/1"
              element={<PrivateRoute element={<MyHostingsPlans />} />}
            />
            <Route
              path="/user/tell"
              element={<PrivateRoute element={<ChangePhone_Number />} />}
            />
            <Route
              path="/user/personal"
              element={<PrivateRoute element={<ChangeUser_Information />} />}
            />
            <Route
              path="/pay/confirmation"
              element={<PrivateRoute element={<PaymentConfirmation />} />}
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
