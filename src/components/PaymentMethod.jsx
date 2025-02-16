import Click from "../assets/image/pay/clickuz.png";
import Payme from "../assets/image/pay/payme.png";
import Humans from "../assets/image/pay/humans.png";
import Qiwi from "../assets/image/pay/qiwi.png";
import Wapkassa from "../assets/image/pay/wapkassa.png";
import FreeKassa from "../assets/image/pay/freekassa.png";
import InterKassa from "../assets/image/pay/inter_kassa.png";
import Payyer from "../assets/image/pay/payeer.png";
import Webmoney from "../assets/image/pay/webmoney.png";
import YandexMoney from "../assets/image/pay/yandex_money.png";
import Smsbill from "../assets/image/pay/smsbill.png";
import Up from "../assets/image/png/up.png";
import { Link } from 'react-router-dom';


const PaymentMethods = () => {
  return (
    <div id="get_ajax_content">
      <div id="set_ajax_content">
        <div className="mOm">
          <div className="block first">
            <div className="title">Способы оплаты</div>
            <div className="menu">
              На данный момент мы принимаем платежи следующими способами:
              <br />
              - Webmoney (Автоматическая оплата):
              <br />
              В данный момент через данный шлюз можно оплатить 20 способами.
              <br />
              Вот самые популярные и востребованные:
              <br />
              -- Яндекс.Деньги (Y.M RUR)
              <br />
              -- Мобильный платеж «Мегафон»/«МТС» (RUR, USD)
              <br />
              -- Терминалы России (RUR)
              <br />
              -- Терминалы Украины (UAH)
              <br />
              - Оплата с помощью SMS (sms шлюз SmsCoin)
              <br />
              -- В данный момент поддерживает более 30 стран.
              <br />
              -- Учтите при пополнении по SMS денег снимается больше (Комиссия оператора)
              <br />
              -- (!) Внимание если Вы выбрали свою страну и для Вас не нашлось подходящего способа пополнить счёт через Смс, попробуйте уменьшить сумму пополнения.
              <br />
              =====
              <br />
              Все эти платежи проходят ЧЕРЕЗ Qiwi WapKassa.Ru WapKassa.Ru WeBmoney Merchant
              <br />
              Если Вы не обнаружили подходящего способа оплаты, обратитесь в Техническую поддержку в рабочие часы, и мы обязательно что-нибудь придумаем для Вас.
            </div>
            <div className="title">Способы оплаты</div>
            <div className="menu">
              <table className="fon_tem" style={{ borderRadius: '5px' }}>
                <tbody>
                  <tr style={{ borderBottom: '1px solid rgb(0 0 0 / 5%)' }}>
                    <td style={{ height: '85px', textAlign: 'center' }} className="r_bar fon_tem myorder_chiziq1">
                      <img src={Click} width="130px" height="100px" />
                    </td>
                    <td className="r_bar fon_tem" style={{ height: '85px', textAlign: 'center' }}>
                      <b>Click Uzbekistan</b>
                      <br />
                    </td>
                  </tr>

                  <tr style={{ marginTop: '20px', borderBottom: '1px solid rgb(0 0 0 / 5%)' }}>
                    <td style={{ height: '85px', textAlign: 'center' }} className="r_bar fon_tem myorder_chiziq1">
                      <img src={Payme} width="100px" height="35px" />
                    </td>
                    <td className="r_bar fon_tem" style={{ height: '85px', textAlign: 'center' }}>
                      <b>PayMe Uzbekistan</b>
                      <br />
                    </td>
                  </tr>

                  <tr style={{ marginTop: '20px', borderBottom: '1px solid rgb(0 0 0 / 5%)' }}>
                    <td style={{ height: '85px', textAlign: 'center' }} className="r_bar fon_tem myorder_chiziq1">
                      <img src={Humans} width="120px" height="75px" />
                    </td>
                    <td className="r_bar fon_tem" style={{ height: '85px', textAlign: 'center' }}>
                      <b>Humans Uzbekistan</b>
                      <br />
                    </td>
                  </tr>

                  <tr style={{ marginTop: '20px', borderBottom: '1px solid rgb(0 0 0 / 5%)' }}>
                    <td style={{ height: '85px', textAlign: 'center' }} className="r_bar fon_tem myorder_chiziq1">
                      <img src={Qiwi} width="100px" height="100px" />
                    </td>
                    <td className="r_bar fon_tem" style={{ height: '85px', textAlign: 'center' }}>
                      <b>Qiwi</b>
                      <br />
                    </td>
                  </tr>

                  <tr style={{ marginTop: '20px', borderBottom: '1px solid rgb(0 0 0 / 5%)' }}>
                    <td style={{ height: '85px', textAlign: 'center' }} className="r_bar fon_tem myorder_chiziq1">
                      <img src={Wapkassa} />
                    </td>
                    <td className="r_bar fon_tem" style={{ height: '85px', textAlign: 'center' }}>
                      <b>Wapkassa</b>
                      <br />
                    </td>
                  </tr>

                  <tr style={{ marginTop: '20px', borderBottom: '1px solid rgb(0 0 0 / 5%)' }}>
                    <td style={{ height: '85px', textAlign: 'center' }} className="r_bar fon_tem myorder_chiziq1">
                      <img src={FreeKassa} />
                    </td>
                    <td className="r_bar fon_tem" style={{ height: '85px', textAlign: 'center' }}>
                      <b>Free-Kassa</b>
                      <br />
                    </td>
                  </tr>

                  <tr style={{ marginTop: '20px', borderBottom: '1px solid rgb(0 0 0 / 5%)' }}>
                    <td style={{ height: '85px', textAlign: 'center' }} className="r_bar fon_tem myorder_chiziq1">
                      <img src={InterKassa} />
                    </td>
                    <td className="r_bar fon_tem" style={{ height: '85px', textAlign: 'center' }}>
                      <b>Inter-Kassa</b>
                      <br />
                    </td>
                  </tr>

                  <tr style={{ marginTop: '20px', borderBottom: '1px solid rgb(0 0 0 / 5%)' }}>
                    <td style={{ height: '85px', textAlign: 'center' }} className="r_bar fon_tem myorder_chiziq1">
                      <img src={Webmoney} />
                    </td>
                    <td className="r_bar fon_tem" style={{ height: '85px', textAlign: 'center' }}>
                      <b>Webmoney</b>
                      <br />
                    </td>
                  </tr>

                  <tr style={{ marginTop: '20px', borderBottom: '1px solid rgb(0 0 0 / 5%)' }}>
                    <td style={{ height: '85px', textAlign: 'center' }} className="r_bar fon_tem myorder_chiziq1">
                      <img src={Payyer} />
                    </td>
                    <td className="r_bar fon_tem" style={{ height: '85px', textAlign: 'center' }}>
                      <b>Payyer</b>
                      <br />
                    </td>
                  </tr>

                  <tr style={{ marginTop: '20px', borderBottom: '1px solid rgb(0 0 0 / 5%)' }}>
                    <td style={{ height: '85px', textAlign: 'center' }} className="r_bar fon_tem myorder_chiziq1">
                      <img src={YandexMoney} />
                    </td>
                    <td className="r_bar fon_tem" style={{ height: '85px', textAlign: 'center' }}>
                      <b>Yandex Money</b>
                      <br />
                    </td>
                  </tr>

                  <tr style={{ marginTop: '20px', borderBottom: '1px solid rgb(0 0 0 / 5%)' }}>
                    <td style={{ height: '85px', textAlign: 'center' }} className="r_bar fon_tem myorder_chiziq1">
                      <img src={Smsbill} />
                    </td>
                    <td className="r_bar fon_tem" style={{ height: '85px', textAlign: 'center' }}>
                      <b>Payyer</b>
                      <br />
                    </td>
                  </tr>
                </tbody>
              </table>
              </div>
              <div className="menu">
                <Link to="/"> <img src={Up} alt="Up" /> На
                  главную
                </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethods;
