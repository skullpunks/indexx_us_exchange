import React from "react";
import Footer from "../Footer/Footer";
import { Typography, Button, Image } from "antd";
import "./Tokens.css";
import inex from "../../assets/coinAnimations/inex.png";
import tokenguy from "../../assets/coinAnimations/tokenguy.webp";
import { baseDEXURL } from "../../services/api";
const { Text } = Typography;
const IndexxEX = () => {
  return (
    <>
      <div className="scan-container how-it-works flex-direction-column  ">
        <Image src={inex} preview={false} width={200}></Image>
        <Text style={{ fontSize: 22, opacity: "70%", marginBottom: 30 }}>
          indexx Exchange / INEX
        </Text>
        <Image src={tokenguy} preview={false} width={500}></Image>

        <div className="row center d-flex justify-content-center">
          <Text
            style={{
              fontSize: 60,
              color: "#0165E9",
              textAlign: "left",
              alignContent: "left",
              alignSelf: "left",
              marginTop: 70,
              marginLeft: 350,
            }}
          >
            indexxExchange-INEX
          </Text>
          <Text
            style={{
              fontSize: 22,
              opacity: "70%",
              textAlign: "left",
              alignContent: "left",
              alignSelf: "left",
              marginLeft: 350,
            }}
          >
            indexx Exchange/INEX is the cryptocurrency coin that powers the
            indexx.ai ecosystem. As one of the world's most popular utility<br/>
            tokens, not only can you trade INEX like any other cryptocurrency,
            you can also use INEX in a wide range of applications and use cases.
          </Text>
          <a href={baseDEXURL} style={{textAlign:'center'}}>
          <Button
            style={{ textAlign: "center", marginTop:40 }}
            type="primary"
            shape="round"
            className="secondButton"
          >
            {" "}
            Buy Tokens
          </Button>
          </a>
   
          <br />
          <br />
          <br />
          <Text
            style={{
              fontSize: 60,
              opacity: "70%",
              marginTop: 70,
              marginLeft: 290,
            }}
          >
            How Does indexx Exchange-INEX works
          </Text>
          <Text
            style={{
              fontSize:22,
              opacity: "70%",
              marginTop: 15,
              marginLeft: 290,
            }}
          >
            Save even more on trading fees by qualifying for our VIP Program
            <br />
            Earn up to 50% commission via our Affiliate Referral Program
            <br />
            Stake INEX in one click to earn rewards using INEX Vault
            <br />
            Lend through new token farming opportunities on indexx Launchpool
            <br />
            Access exclusive token sales on indexx Launchpad
            <br />
            Send and receive crypto payments with indexx Pay
            <br />
            Apply for crypto loans using indexx Loan
            <br />
            Stake INEX to earn rewards and help secure the indexx ecosystem
            <br />
            Earn a flexible percentage yield by depositing INEX on select indexx
            projects
            <br />
            <br />
            <br />
            <strong style={{fontSize:26}}>
              indexx Exchange / INEX Burns
              <br />
            </strong>
            INEX uses an Auto-Burn system to reduce its total supply to
            100,000,000 INEX. The INEX Auto-Burn mechanism adjusts the amount of
            INEX to be burned based on INEX&rsquo;s price <br/>and the number of
            blocks generated on INEX Chain during the quarter. This offers
            greater transparency and predictability to the indexx community.
            <br />
          
            INEX lost in eligible case can also be reimbursed through the INEX
            Pioneer Burn Program. This counts users&rsquo; lost coins towards
            the official burn count and reimburses them with INEX.
            <br />
            
            INEX additionally uses a real-time burning mechanism based on gas
            fees. A fixed ratio of the gas fee collected is burned in each
            block, with the ratio decided by Indexx Scan validators.
          </Text>
          <Text strong style={{textAlign:'center',fontSize:30,opacity:'70%',marginTop:40}}>Get your indexx cryptocurrency to power the indexx ecosystem</Text><br/><br/><br/>
          <a href={baseDEXURL} style={{textAlign:'center'}}>
          <Button
            style={{ textAlign: "center",marginTop:40 }}
            type="primary"
            shape="round"
            className="secondButton"
          >
            {" "}
            Buy Tokens
          </Button> </a>
        </div>
      </div>

      <Footer></Footer>
    </>
  );
};

export default IndexxEX;
