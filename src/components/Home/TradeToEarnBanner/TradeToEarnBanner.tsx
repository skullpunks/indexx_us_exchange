import React from "react";
import { baseDEXURL,baseCEXURL } from "../../../services/api";
import "./TradeToEarnBanner.css";

const TradeToEarnBanner = () => {
  return (
    <div
      className="trade_to_earn_banner d-flex flex-direction-row text-center center"
      style={{
        textAlign: "center",
        alignContent: "center",
        alignItems: "center",
      }}
    >
      <span className="text-center" style={{ textAlign: "center" }}>
        <div className="trade_right text-center justify-content-center ">
          <h1
            className="mega_heading text-white line_height_1  text-center "
            style={{ textAlign: "center" }}
          >
            Trade to Earn
            <sub className="tm_text">TM</sub>
          </h1>
          <h1 className="mega_heading  line_height_1 center">
            <span style={{ fontSize: 40, color: "white", fontWeight: 500 }}>
              Upto{" "}
            </span>
            <span style={{ fontSize: 60, color: "greenyellow" }}>30%</span>
          </h1>
          <p
            className="text-white "
            style={{ fontSize: 40, color: "white", fontWeight: 500 }}
          >
            on each transaction.
          </p>

          <div className="actions text-center" style={{ marginTop: -40 }}>
            
          {/* <a href={baseDEXURL}><button  className="earnbutton" style={{width:290,height:32}}>Exchange</button></a> */}
           
            <a
              href={`${baseDEXURL}/TradeToEarn`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="td-none">
                
                <div className="launch-app-button-banner cut_button">
                  <div className="launch-app-button-text">Swap</div>
                </div>
               
              </span>
            </a>
            <a
              className="td-none"
              href={`${baseCEXURL}/indexx-exchange/trade-to-earn`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="login-button-banner cut_button">
                <div className="login-button_text">Exchange</div>
              </div>
            </a>
            <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
          </div>
        </div>
      </span>
    </div>
  );
};

export default TradeToEarnBanner;
