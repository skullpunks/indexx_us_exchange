import React from "react";
import Footer from "../Footer/Footer";
import { Typography, Button, Image } from "antd";
import "./Tokens.css";
import cryptoken from "../../assets/coinAnimations/crypto.webp";
import left from "../../assets/coinAnimations/leftimage.webp";
import { baseDEXURL } from "../../services/api";
import cryptoSpin from "../../assets/coinAnimations/INDEXX-CRYPTO.gif";
const { Text } = Typography;
const IndexxCrypto = () => {
  return (
    <>
      <div className="scan-container how-it-works flex-direction-column text-center ">
        <Text italic strong style={{ fontSize: 65, color: "#00B64F" }}>
          Indexx<span style={{ fontSize: 15, marginBottom:-10 }}>&#8482;</span>Crypto
          
        </Text>
        <br />
        <Text style={{ fontSize: 18, color: "#00B64F" }}>
          Hyper attitude, Crypto Performance.
        </Text>
        <Image preview={false} src={cryptoken} width={150}>
          {" "}
        </Image>
        <br />
        <Text style={{ fontSize: 20, color: "#00B64F" }}>What for?</Text>

        <Text strong style={{ fontSize: 50, color: "#00B64F" }}>
          High Velocity, High Risk, High Reward Hyper Token
        </Text>
        <Text style={{ fontSize: 17, color: "#00B64F" }}>
          Investing in the nascent cryptoasset market offers massive potential
          upside, but the historic uptrend has been punctuated by occasional
          sharp <br />
          downward moves. The fund mitigates the risk partially by holding a
          diversified portfolio of cryptos.
        </Text>
        <Text strong style={{ fontSize: 50, color: "#00B64F" }}>
          Long Term Grow
        </Text>
        <Text style={{ fontSize: 17, color: "#00B64F" }}>
          The indexx crypto token aims to capture expected gains in the broader
          crypto market, which is undergoing rapid development at present
          coinciding with significant volatility and promising <br /> new
          projects constantly coming to market. By rebalancing regularly, the
          fund aims to constantly reposition in order to benefit from long-term
          market growth.
        </Text>
        <br />
        <br />
        <a href={baseDEXURL}>
          <Button type="primary" shape="round" className="firstButton">
            {" "}
            Buy Tokens
          </Button>
        </a>
        <br />
        <br />
        <Text style={{ fontSize: 25, color: "#00B64F" }}>
          Indexx Crypto Token price flows with top 20 Crypto Index
        </Text>
        <Image
          preview={false}
          src={cryptoSpin}
          width={100}
        
        ></Image>
        <a href={`${baseDEXURL}/indexx-exchange/markets`}>
          <Button type="primary" shape="round" className="firstButton" style={{marginTop:-30}}>
            {" "}
            Today's Price
          </Button>
        </a>
        <br />
        <br />
        <br />
        <br />
        <br />

        <Text strong style={{ fontSize: 35, color: "#00B64F" }}>
          Advantages
        </Text>

        <div className="row">
          <div
            className="col-5 text-left text-aline-left"
            style={{
              paddingLeft: 100,
              paddingRight: 100,
              textAlign: "left",
              marginLeft: 200,
            }}
          >
            {" "}
            <br /> <br />
            <Text
              strong
              style={{ fontSize: 15, color: "#00B64F", textAlign: "left" }}
            >
              Diversified cryptocurrency investment <br /> <br />
            </Text>
            <Text style={{opacity:'70%'}}>
              This indexx crypto token holds the top 10 blue chip cryptoassets,
              allowing the token price to track movements of the broader crypto
              market.The token's holdings are re-balanced on a weekly basis
              (with no asset taking up over 10%). This greatly simplifies the
              effort required to track the broader market's performance.
            </Text>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <Image preview={false} src={left} />
          </div>
          <div
            className="col-5 text-left text-aline-left"
            style={{
              paddingLeft: 100,
              paddingRight: 100,
              textAlign: "left",
              marginLeft: -50,
            }}
          >
            {" "}
            <br /> <br />
            <Text
              strong
              style={{ fontSize: 15, color: "#00B64F", textAlign: "left" }}
            >
              Due diligence
              <br />
            </Text>
            <br />
            <Text style={{opacity:'70%'}}>
              Our experienced and knowledgeable analyst team assesses each
              crypto project before becoming eligible to enter the index -
              helping avoid suspect projects that the typical investor might not
              avoid.
            </Text>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <Text
              strong
              style={{ fontSize: 45, color: "#00B64F", textAlign: "left" }}
            >
              Disrupting the Global Market.
              <br />
            </Text>
            <Text style={{opacity:'70%'}}>
              <br />
              Indexx crypto tokens are the world first secured token pegged with
              world largest top 20 blue chip crypto currencies, having pioneered
              the concept in the digital token space. A disruptor to the
              conventional financial system and a trailblazer in the digital use
              of traditional currency market, Indexx crypto Tokens support and
              empower growing ventures and innovation throughout the blockchain
              space. Indexx crypto Tokens exist as a digital token built on
              multiple blockchains
            </Text>
          </div>
        </div>

        <div
          className="row text-center center d-flex justify-content-center"
          style={{
            marginTop: 200,
            textAlign: "center",
            alignContent: "center",
            alignItems: "center",
          }}
        >
          <div
            className="col-2 text-center center"
            style={{ textAlign: "center" }}
          >
            <Image preview={false} src={cryptoken} width={120}></Image>
            <br />
            <Text strong style={{ fontSize: 27, color: "#00B64F" }}>
              Unparalleled
              <br /> Liquidity <br />
            </Text>
            <Text style={{ fontSize: 14 ,opacity:'70%' }}>
              Indexx crypto tokens are among the most traded tokens in terms of
              daily volume, offering unequalled liquidity.
            </Text>
          </div>
          <div className="col-2">
            <Image preview={false} src={cryptoken} width={120}></Image>
            <br />
            <Text strong style={{ fontSize: 27, color: "#00B64F" }}>
              Fully <br />
              Transparent <br />
            </Text>
            <Text style={{ fontSize: 14 ,opacity:'70%'}}>
              Indexx crypto stock tokens’ issued and reserve assets are publicly
              available and updated
            </Text>
          </div>
          <div className="col-2">
            <Image preview={false} src={cryptoken} width={120}></Image>
            <br />
            <Text strong style={{ fontSize: 27, color: "#00B64F" }}>
              Widespread <br />
              Adoption <br />
            </Text>
            <Text style={{ fontSize: 14,opacity:'70%' }}>
              Indexx crypto tokens are among the most traded tokens in terms of
              daily volume, offering unequalled liquidity.
            </Text>
          </div>
          <div className="col-2">
            <Image preview={false} src={cryptoken} width={120}></Image>
            <br />
            <Text strong style={{ fontSize: 27, color: "#00B64F" }}>
              Best-in-Class <br />
              Customer Support <br />
            </Text>
            <Text style={{ fontSize: 14,opacity:'70%' }}>
              A highly-trained customer support team is ready to help you 24/7.
            </Text>
          </div>
        </div>

        <div
          className="row text-center center d-flex justify-content-center"
          style={{
            marginTop: 50,
            textAlign: "center",
            alignContent: "center",
            alignItems: "center",
          }}
        >
          <div
            className="col-2 text-center center"
            style={{ textAlign: "center" }}
          ><br /><br /><br />
            <Image preview={false} src={cryptoken} width={120}></Image>
            <br />
            <Text strong style={{ fontSize: 27, color: "#00B64F" }}>
              Backed by Blue <br />
              Chip 50 Crypto <br />
              Indexx Liquidity <br />
            </Text>
            <Text style={{ fontSize: 14 ,opacity:'70%'}}><br />
              All Indexx crypto crypto tokens are pegged at 1-to-50 with a
              matching crypto currency and are backed 80% by blue cheap crypto
              reserves.
            </Text>
          </div><br /><br />
          <div className="col-2"><br /><br />
          <br /><br />
            <Image preview={false} src={cryptoken} width={120}></Image>
            <br />
            <Text strong style={{ fontSize: 27, color: "#00B64F" }}>
              Multiple <br /> Blockchains Support
              <br />
            </Text>
            <Text style={{ fontSize: 14 ,opacity:'70%'}}><br />
              Indexx crypto tokens are built on multiple blockchains—offering
              easy integration and adoption. Supported blockchains are Bitcoin
              (Omni & Liquid protocol), Ethereum, TRON, EOS, Algorand, Solana,
              OMG Network, and Bitcoin Cash (SLP).
            </Text>
          </div>
          <div className="col-2"><br /><br />
            <Image preview={false} src={cryptoken} width={120}></Image>
            <br />
            <Text strong style={{ fontSize: 27, color: "#00B64F" }}>
              Available in
              <br /> Different Currencies
              <br />
            </Text>
            <Text style={{ fontSize: 14,opacity:'70%' }}><br />
              Indexx crypto supports US dollar (USD), euro (EUR) and offshore
              Chinese yuan (CNH). Represented by INXC, Indexx tokens are denoted
              as INXC in very near future.
            </Text>
          </div>
          <div className="col-2"><br /><br /><br />
            <Image preview={false} src={cryptoken} width={120}></Image>
            <br />
            <Text strong style={{ fontSize: 27, color: "#00B64F" }}>
              Regulatory <br />
              Compliant
              <br />
            </Text>
            <Text style={{ fontSize: 14,opacity:'70%' }}><br />
              Indexx crypto maintains world-class standardised compliance
              measures for anti-money laundering (AML), countering the financing
              of terrorism (CFT), sanctions, and know your customer (KYC) laws
              and regulations.
            </Text>
          </div>
        </div><br /><br />
        

        
      </div>

      <Footer></Footer>
    </>
  );
};

export default IndexxCrypto;
