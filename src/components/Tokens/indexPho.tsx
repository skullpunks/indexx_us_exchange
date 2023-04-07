import React from "react";
import Footer from "../Footer/Footer";
import { Typography, Button, Image } from "antd";
import "./Tokens.css";
import inex from "../../assets/coinAnimations/pho.webp";
import tokenguy from "../../assets/coinAnimations/img1.webp";
import { baseDEXURL } from "../../services/api";
const { Text } = Typography;
const IndexxPho = () => {
  return (
    <>
      <div className="scan-container how-it-works flex-direction-column  ">
        <Image src={inex} preview={false} width={200}></Image>
        <Text style={{ fontSize: 22, opacity: "70%", marginBottom: 30 }}>
          indexx Phoenix / INXP
        </Text>
        <Image src={tokenguy} preview={false} width={800}></Image>

        <div className="row center d-flex justify-content-center">
          <Text
            style={{
              fontSize: 60,
              color: "#11be6a",
              textAlign: "left",
              alignContent: "left",
              alignSelf: "left",
              marginTop: 70,
              marginLeft: 350,
            }}
          >
            indexxPhoenix-INXP
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
            indexx Phoenix/INXP is the cryptocurrency coin that powers the
            indexx.ai ecosystem. As one of the world's most popular utility
            tokens,
            <br /> not only can you trade INEX like any other cryptocurrency,
            you can also use INEX in a wide range of applications and use cases.
          </Text>
          <a href={baseDEXURL} style={{ textAlign: "center" }}>
            <Button
              style={{ textAlign: "center", marginTop: 40 }}
              type="primary"
              shape="round"
              className="fifthButton"
            >
              Buy Tokens
            </Button>{" "}
          </a>

          <br />
          <br />
          <br />
          <Text
            style={{
              fontSize: 60,
              opacity: "70%",
              marginTop: 70,
              marginLeft: 350,
            }}
          >
            How Does indexxPhoenix-INXP works
          </Text>
          <Text
            style={{
              fontSize: 22,
              opacity: "70%",
              marginTop: 15,
              marginLeft: 350,
            }}
          >
            Save even more on trading fees by qualifying for our VIP Program
            <br />
            Earn up to 50% commission via our Affiliate Referral Program Stake
            <br />
            INEX in one click to earn rewards using INEX Vault Lend through new
            <br />
            token farming opportunities on indexx Launchpool Access exclusive
            <br />
            token sales on indexx Launchpad Send and receive crypto payments
            <br />
            with indexx Pay Apply for crypto loans using indexx Loan Stake INEX
            <br />
            to earn rewards and help secure the indexx ecosystem Earn a flexible
            <br />
            percentage yield by depositing INEX on select indexx projects
            <br />
            <br />
            <br />
            <br />
            <strong style={{ fontSize: 26 }}>
              indexxPhoenix / INXP Burns
              <br />
            </strong>
            INXP uses an Auto-Burn system to reduce its total supply to
            100,000,000 INEX. The INXP Auto-Burn mechanism adjusts the amount of
            <br />
            INEX to be burned based on INXP&rsquo;s price and the number of
            blocks generated on INXP Chain during the quarter.
            <br />
            This offers greater transparency and predictability to the indexx
            community.
            <br />
            INXP lost in eligible case can also be reimbursed through the INXP
            Pioneer Burn Program.
            <br /> This counts users&rsquo; lost coins towards the official burn
            count and reimburses them with INXP.
            <br />
            INXP additionally uses a real-time burning mechanism based on gas
            fees.
            <br /> A fixed ratio of the gas fee collected is burned in each
            block, with the ratio decided by Indexx Scan validators.
          </Text>
          <Text
            strong
            style={{
              textAlign: "center",
              fontSize: 30,
              opacity: "70%",
              marginTop: 40,
            }}
          >
            Get your indexx cryptocurrency to power the indexx ecosystem
          </Text>
          <br />
          <br />
          <br />
          <a href={baseDEXURL} style={{ textAlign: "center" }}>
            <Button
              style={{ textAlign: "center", marginTop: 40 }}
              type="primary"
              shape="round"
              className="fifthButton"
            >
              {" "}
              Buy Tokens
            </Button>{" "}
          </a>
        </div>
      </div>

      <Footer></Footer>
    </>
  );
};

export default IndexxPho;
