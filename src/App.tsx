import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import IndexxSwap from "./components/IndexxSwap/IndexxSwap";
import BuySell from "./components/BuySell/BuySell";
import Help from "./components/Help/Help";
import Intro from "./components/Help/Intro";
import Team from "./components/Help/Team";
import ContactUs from "./components/Help/ContactUs";
import Tokens from "./components/Tokens/Tokens";
import Legal from "./components/Legal/Legal";
import Termsofservice from "./components/Legal/Termsofservice";
import Privacypolicy from "./components/Legal/Privacypolicy";
import TermsandConditions from "./components/Legal/Termsandconditions";
import Affiliateprogram from "./components/Legal/Affiliateprogram";
import Amlkmc from "./components/Legal/Amlkmc";
import Vlog from "./components/IndexVlog/Vlog"
import TradeToEarn from "./components/TradeToEarn/TradeToEarn";
import BuySellLogin from "./components/BuySell/BuySellLogin";
import BSWallet from "./components/BuySell/BSWallet";
import ChatBot from "./components/ChatBot/ChatBot";
// import BuySellLoggedVerfication from './components/BuySell/BuySellLoggedVerfication';
import BuySellLoggedWelcome from "./components/BuySell/BuySellLoggedWelcome";
import TradeChart from "./components/TradeChart/TradeChart";
import Markets from "./components/Markets/Markets";
import IndexBlog from "./components/IndexBlog/IndexBlog";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import HowCentralized from "./components/HowItWorks/howCentralized";
import HowFortune from "./components/HowItWorks/howFortuneDaily";
import HowTokens from "./components/HowItWorks/howTokens";
import HowTradeToEarn from "./components/HowItWorks/howTradeToEarn";
import HowDecentralized from "./components/HowItWorks/howDecentralized";
import BSWithdrawMain from "./components/BSDepositWithdraw/BSWithdrawMain";
import BSDepositWithdarwSelect from "./components/BSDepositWithdraw/BSDepositWithdarwSelect";
import BSWithdrawInfo from "./components/BSDepositWithdraw/BSWithdrawInfo";
import BSDWAmount from "./components/BSDepositWithdraw/BSDWAmount";
import BSDWRecorded from "./components/BSDepositWithdraw/BSDWRecorded";
import BuySellGetStartedLayout from "./components/BuySell/BuySellGetStartedLayout";
import BSDepositCryproLayout from "./components/BSDeposit/BSDepositCryproLayout";
import BSTransactionHistoryLayout from "./components/BSTransactionHistory/BSTransactionHistoryLayout";
import BSDepositFiatLayout from "./components/BSDeposit/BSDepositFiatLayout";
import BSWithdrawCryptoLayout from "./components/BSDepositWithdraw/BSWithdrawCryptoLayout";
import IndexxTokens from "./components/IndexxTokens/IndexxTokens";
import ComingSoon from "./components/ComingSoon/ComingSoon";
// import HeaderNew from "./components/Header/HeaderNew";
import About from "./components/About/About";
import IndexxCrypto from "./components/Tokens/indexCrypto";
import Index500 from "./components/Tokens/index500";
import IndexUSD from "./components/Tokens/indexUsd";
import Account from "./components/AccountSettings/Account";
import Xchange from "./components/Home/section1/sectionfirst";
// import BSDashhboard from './components/BuySell/BSDashboard';
import SecurityChange from "./components/AccountSettings/SecurityChange";
// import Blockpass from './components/Blockpass/Blockpass';
import BlockpassLink from "./components/Blockpass/BlockpassLink";
// import { useEffect, useState } from 'react';
// import { decodeJWT, getUserDetails } from '../src/services/api';

// import Header from './components/Header/Header';
// import BuySellGetStarted from './components/BuySell/BuySellGetStarted';
// import BuySellEmailAuth from './components/BuySell/BuySellEmailAuth';
// import BuySellSecureSteps from './components/BuySell/BuySellSecureSteps';
// import BuySellMobiAuth from './components/BuySell/BuySellMobiAuth';
// import BuySellmobiVerfication from './components/BuySell/BuySellmobiVerfication';
import ScrollToTop from "./utils/ScrollToTop";
import Nft from "./components/Nft/Nft";
import Notification from "./components/Notifications/Notification";
import AllNotification from "./components/Notifications/AllNotification";
import Activity from "./components/Notifications/Activity";
import SystemMsg from "./components/Notifications/SystemMsg";
import Career from "./components/Careers/Career";
import WelcomePage from "./components/WelcomePage";
import IndexxEX from "./components/Tokens/indexEx";
import IndexxPho from "./components/Tokens/indexPho";
// import CareerSoon from './components/Careers/CareerSoon';

function App() {
  /*
    const [email, setEmail] = useState('');
    const [userData, setUserData] = useState() as any;

    useEffect(() => {
        return () => {
            const access_token = localStorage.getItem("access_token") !== undefined ? String(localStorage.getItem("access_token")) : undefined;
            console.log(access_token)
            if (access_token !== undefined || access_token !== null) {
                let access_token = String(localStorage.getItem("access_token"));
                let decoded: any = decodeJWT(access_token);
                setEmail(decoded.email)
                getUserDetails(decoded.email).then((res: any) => {
                    console.log(res);
                    if (res.status === 200) {
                        console.log(res.data);
                        setUserData(res.data);
                    }
                });
            } else {
                console.log('token not found')
            }
        }
    }, [email]);
*/
  return (
    <div>
      <BrowserRouter>
        {/* <Header /> */}
        <ScrollToTop />
        {/* <HeaderNew /> */}
        <Routes>
        {/* Below line should be enabled for prod */}
        {/* <Route path="/" element={<Home />} />  */}
        {/* Below line should be enabled for test */}
{/* 
        {(localStorage.getItem("access_token") === undefined || localStorage.getItem("access_token") === null) ?
            <Route path="/*" element={<BuySellLogin />} />
            :
            <Route path="/*" element={<Home />} />
          } */}


<Route path="/*" element={<Home />} />
          <Route path="/indexx-exchange/dashboard" element={<Account />} />
          {/* {
                        // userData?.role === "Standard"
                            ? <Route path="/indexx-exchange/dashboard" element={<BSDashhboard />} />
                            : <Route path="/external-link" element={<External />} />
                    } */}

          <Route path="/indexx-exchange/kyc" element={<BlockpassLink />} />
          <Route path="/indexx-exchange/swap" element={<IndexxSwap />} />
          <Route path="/indexx-exchange/coming-soon" element={<ComingSoon />} />
          <Route path="/indexx-exchange/tokens" element={<IndexxTokens />} />
          <Route path="/indexx-exchange/buy-sell/*" element={<BuySell />} />
          <Route
            path="/indexx-exchange/buy-sell/login/*"
            element={<BuySellLogin />}
          />
          {/* <Route
          path="/"
          element={<Home />}
        />
         {(localStorage.getItem("access_token") === undefined || localStorage.getItem("access_token") === null) ?
            <Route path="/*" element={<BuySellLogin />} />
            :
            <Route
            path="/"
            element={<Home />}
          />
          } */}
       
          <Route
            path="/indexx-exchange/buy-sell/wallet"
            element={<BSWallet />}
          />
          <Route
            path="/indexx-exchange/buy-sell/withdraw-crypto/*"
            element={<BSWithdrawCryptoLayout />}
          />
          <Route
            path="/indexx-exchange/buy-sell/withdraw"
            element={<BSWithdrawMain />}
          >
            <Route index element={<BSDepositWithdarwSelect />} />
            <Route path="info" element={<BSWithdrawInfo />} />
            <Route path="amount" element={<BSDWAmount />} />
            <Route path="recorded" element={<BSDWRecorded />} />
          </Route>
          <Route
            path="/indexx-exchange/buy-sell/deposit-crypto/*"
            element={<BSDepositCryproLayout />}
          />
          <Route
            path="/indexx-exchange/buy-sell/deposit-fiat/*"
            element={<BSDepositFiatLayout />}
          />
          <Route
            path="/indexx-exchange/buy-sell/transaction-history/*"
            element={<BSTransactionHistoryLayout />}
          />
          <Route
            path="/indexx-exchange/buy-sell/get-started/*"
            element={<BuySellGetStartedLayout />}
          />
          <Route
            path="/indexx-exchange/buy-sell/welcome"
            element={<BuySellLoggedWelcome />}
          />
          <Route
            path="/indexx-exchange/trade-to-earn"
            element={<TradeToEarn />}
          />
          <Route
            path="/indexx-exchange/how-it-works"
            element={<HowItWorks />}
          />
           <Route
            path="/xchange"
            element={<Xchange />}
          />
          <Route
            path="/indexx-exchange/how-it-works/centralized"
            element={<HowCentralized />}
          />
          <Route
            path="/indexx-exchange/how-it-works/decentralized"
            element={<HowDecentralized />}
          />
          <Route
            path="/indexx-exchange/how-it-works/fortune"
            element={<HowFortune />}
          />
          <Route
            path="/indexx-exchange/how-it-works/tradetoearn"
            element={<HowTradeToEarn />}
          />
          <Route
            path="/indexx-exchange/how-it-works/tokens"
            element={<HowTokens />}
          />
          <Route path="/indexx-exchange/charts" element={<Home />} />
          <Route path="/indexx-exchange/charts" element={<Home />} />
          {localStorage.getItem("user") ? (
            <Route path="/indexx-exchange/markets" element={<Markets />} />
          ) : (
            <Route path="/indexx-exchange/markets" element={<Markets />} />
          )}
          <Route path="/indexx-exchange/trade" element={<TradeChart />} />
          <Route path="/indexx-exchange/token-details" element={<Tokens />} />
          <Route path="/indexx-exchange/token-details/crypto" element={<IndexxCrypto />} />
          <Route path="/indexx-exchange/token-details/in500" element={<Index500 />} />
          <Route path="/indexx-exchange/token-details/usd" element={<IndexUSD />} />
          <Route path="/indexx-exchange/token-details/inex" element={<IndexxEX />} />
          <Route path="/indexx-exchange/token-details/phoenix" element={<IndexxPho />} />
          <Route path="/indexx-exchange/chatbot" element={<ChatBot />} />
          <Route path="/indexx-exchange/about" element={<About />} />
          <Route path="/indexx-exchange/nfts" element={<Nft />} />
          <Route path="/indexx-exchange/help" element={<Help />}>
            <Route index element={<Intro />} />
            <Route path="team" element={<Team />} />
            <Route path="contact" element={<ContactUs />} />
          </Route>

          <Route path="/indexx-exchange/legal" element={<Legal />}>
            <Route index element={<Termsofservice />} />
            <Route path="privacypolicy" element={<Privacypolicy />} />
            <Route path="termsandconditions" element={<TermsandConditions />} />
            <Route path="affiliateprogram" element={<Affiliateprogram />} />
            <Route path="amlkmc" element={<Amlkmc></Amlkmc>} />
          </Route>

          <Route
            path="/indexx-exchange/notification"
            element={<Notification />}
          >
            <Route index element={<AllNotification />} />

            <Route path="Activities" element={<Activity />} />
            <Route path="system" element={<SystemMsg />} />
          </Route>
          <Route path="/indexx-exchange/careers" element={<Career />} />
          <Route path="/indexx-exchange/blog" element={<IndexBlog />} />
          <Route path="/indexx-exchange/vlog" element={<Vlog />} />
          <Route path="/indexx-exchange/welcome" element={<WelcomePage />} />
          <Route path="/indexx-exchange/account" element={<Account />} />
          <Route
            path="/indexx-exchange/change-password"
            element={<SecurityChange />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

// function External() {
//     console.log(' IAM HERE')
//     window.location.href = 'http://localhost:3002/';
//     return null;
// }

export default App;
