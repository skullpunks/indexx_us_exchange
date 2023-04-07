import React from "react";
import Footer from "../Footer/Footer";
import { Typography, Button, Image } from "antd";
import "./Tokens.css";
import in500 from "../../assets/coinAnimations/in500.webp";
import bg from "../../assets/coinAnimations/bg.webp";
import coinguy from "../../assets/coinAnimations/coinguy.webp";
import bigguy from "../../assets/coinAnimations/bigguy.webp";
import monk from "../../assets/coinAnimations/monk.webp"
import x4 from "../../assets/coinAnimations/x4.webp"
import { baseDEXURL } from "../../services/api";
import in500spin from '../../assets/coinAnimations/INDEXX-500.gif'
const { Text } = Typography;
const Index500 = () => {
  return (
    <>
      <div className="scan-container how-it-works flex-direction-column text-center center">
        <span
          style={{
            backgroundColor: "#0079FA",
            textAlign: "left",
            alignContent: "left",
            alignSelf: "left",
            width: "100%",
            paddingLeft: 250,
            height: 200,
          }}
        >
          <br></br> <br></br>
          <Text
            italic
            strong
            style={{ fontSize: 55, textAlign: "left", color: "white" }}
          >
            Indexx500
            <span style={{ fontSize: 35, marginTop: 12 }}>&#8482;</span> IN500
          </Text>
          <br />
          <Text style={{ fontSize: 22, color: "white" }}>
            The Future Of The Stocks grows with S&P 500
          </Text>
        </span>

        <div className="row" style={{ marginTop: 150 }}>
          <div
            className="col-5"
            style={{
              textAlign: "left",
              alignContent: "left",
              alignSelf: "left",
              paddingLeft: 250,
            }}
          >
            <Text style={{ fontSize: 22, color: "#0079FA" }}>
              Why Indexx500
            </Text>

            <br />
            <Image preview={false} src={in500}></Image>
            <br /><br />
            <Text style={{ fontSize:16,textAlign: "left", opacity: "60%" }}>
              Launched in summer of 2022, Indexx500 stock tokens (INXS)
              pioneered the stock index token model and are the world first
              traded. Indexx500 tokens offer the low risk, Secured and
              simplicity of S&P 500 stock index coupled with the innovative
              nature of blockchain technology, representing a perfect
              combination of both worlds
            </Text>
          </div>

          <div className="col-5">
            <Image
              preview={false}
              src={bigguy}
              width={590}
              style={{ marginTop: -100,marginLeft:50 }}
            ></Image>
            <br />
          </div>
        </div>
        <a href={baseDEXURL}>
          {" "}
          <Button
            type="primary"
            shape="round"
            className="secondButton"
            style={{marginTop: 150 }}
          >
            {" "}
            Buy Indexx500
          </Button>
        </a>

        <Text style={{ fontSize: 40, color: "#0079FA", marginTop: 200 }}>
          Indexx500 Token price flows with S&P 500 index
        </Text>
        <Image preview={false} src={in500spin} width={250}></Image><br/>

        <a href={baseDEXURL}>
          {" "}
          <Button
            type="primary"
            shape="round"
            className="secondButton"
          >
            {" "}
            Today's Price
          </Button>
        </a>
      </div>
      <div
        className="col d-flex justify-content-center"
        style={{ textAlign: "center" }}
      >
        <Text style={{ fontSize: 60, color: "#0079FA", marginTop: 150 }}>
          What are Indexx500 <br />
          Stock tokens?
        </Text>
      </div>
      <div className="row">
        <div
          className="col d-flex justify-content-center"
          style={{ textAlign: "center" }}
        >
          <Text style={{ fontSize: 14,opacity:'70%', color: "#0079FA", paddingBottom: 80 }}>
            {" "}
            <br />
            Indexx stock tokens, index fund tokens are assets that move across
            the blockchain just as <br /> easily as other digital currencies but
            that are pegged and backed by S&P 500 index range on a 1-to-1,000
            basis.
            <br /><br/><br/>
            <a href="https://indexx.ai/indexx-exchange/how-it-works">
              {" "}
              <Button
                type="primary"
                shape="round"
                className="secondButton"
              >
                {" "}
                How it Works
              </Button>
            </a>
          </Text>
        </div>

        <div
          className="row d-flex justify-content-center"
          style={{ marginTop: 50 }}
        >
          <div className="col-3">
            <Image
              preview={false}
              src={coinguy}
              width={460}
              style={{ marginTop: 100 }}
            ></Image>
            <br />
          </div>
          <div
            className="col-4"
            style={{
              textAlign: "left",
              alignContent: "center",
              alignSelf: "center",
              marginLeft:50
            }}
          >
            <Text
              strong
              style={{ fontSize: 45, color: "#0079FA", textAlign: "left" }}
            >
              Disrupting the Global Market.
              <br />
            </Text>
            <Text>
              <br />
              Indexx500 stock tokens are the world first securedcoins pegged with world largest stock market index S&P 500, having pioneered the concept in the digital token space. A disruptor to the conventional financial system and a trailblazer in the digital use of traditional stock market, Indexx500 Tokens support and empower growing ventures and innovation throughout the blockchain space. Indexx500 Tokens exist as a digital token built on multiple blockchains
            </Text>
            <br/>
            <a href={baseDEXURL}>
          {" "}
          <Button
            type="primary"
            shape="round"
            className="secondButton"
            style={{ width: 300, marginTop: 30, height: 40 }}
          >
            {" "}
            Buy Indexx500
          </Button>
        </a>

          </div>
        </div>

        <div

          className="row d-flex justify-content-center"
          style={{ marginTop: 50 }}
        >
       
       <div
            className="col-5"
            style={{
              textAlign: "left",
              alignContent: "center",
              alignSelf: "center",
              marginLeft:50
            }}
          >
            <Text
              strong
              style={{ fontSize: 45,color: "#0079FA", textAlign: "left" }}
            >
             Backed by
S&P 500
index fund
              <br />
            </Text>
            <Text>
              <br />
              All Indexx500 token (INXS are pegged at $1-to-1,ooo with a matching S&P 500 index stock share and are backed 100% by Indexx’s reserves. We publish a daily record of the current total assets and reserves.
            </Text>
            <a href="https://indexx.ai/indexx-exchange/how-it-works">
              {" "}<br/>
              <Button
                type="primary"
                shape="round"
                className="secondButton"
                style={{
                
                  marginTop: 30,
                }}
              >
              
                Learn More
              </Button>
            </a>
          </div>
        

        <div className="col-4">
            <Image
              preview={false}
              src={monk}
              width={550}
              style={{ marginTop: 100 }}
            ></Image>
            <br />
          </div>


            </div>







            <div
          className="row d-flex justify-content-center"
          style={{ marginTop: 50 }}
        >
          <div className="col-4">
            <Image
              preview={false}
              src={bg}
              width={500}
             
            ></Image>
            <br />
          </div>
          <div
            className="col-4"
            style={{
              textAlign: "left",
              alignContent: "center",
              alignSelf: "center",
              marginLeft:50
            }}
          >
            <Text
              strong
              style={{ fontSize: 45, color: "#0079FA", textAlign: "left" }}
            >
              Diving the Future of Stocks
              <br />
            </Text>
            <Text>
              <br />
              Indexx500 stock tokens are the first and only adopted assets coins, having pioneered the concept in the digital token space. A disruption to the conventional stock market, financial system and a trailblazer in the digital use of traditional stocks, Indexx500 Tokens support and empower growing ventures and innovation throughout the blockchain space. Indexx500 Tokens exist as a digital token built on multiple blockchains


            </Text>
            <br/>
            <a href={baseDEXURL}>
          {" "}
          <Button
            type="primary"
            shape="round"
            className="secondButton"
            style={{ width: 300, marginTop: 30, height: 40 }}
          >
            {" "}
            Buy Indexx500
          </Button>
        </a>

          </div>
        </div>







<span style={{backgroundColor:'#0079FA',width:'100%',paddingTop:50,paddingBottom:50,marginTop:200,marginBottom:200,textAlign:'center',alignContent:'center'}}>
<Text style={{textAlign:'center',color:'white',alignContent:'center'}}> Whether it is for personal use or business purposes, Indexx tokens offer many benefits as the most stable, liquid and trusted stock index pegged and backed crypto coin.</Text>
</span>


<div
          className="row text-center center d-flex justify-content-center"
          style={{
            textAlign: "center",
            alignContent: "center",
            alignItems: "center",
          }}
        >
          <div
            className="col-2 text-center center"
            style={{ textAlign: "center" }}
          >   <br />
            <Image preview={false} src={x4} width={80}></Image>
            <br />
            <Text strong style={{ fontSize: 27, color: "#0079FA" }}>
              Unparalleled
              <br /> Liquidity <br />
            </Text>
            <Text style={{ fontSize: 14,opacity:'70%' }}>
            Indexx500 tokens are among the most traded tokens in terms of daily volume, offering unequalled liquidity.
            </Text>
          </div>
          <div className="col-2">
            <Image preview={false} src={x4} width={80}></Image>
            <br />
            <Text strong style={{ fontSize: 27, color: "#0079FA" }}>
              Fully <br />
              Transparent <br />
            </Text>
            <Text style={{ fontSize: 14,opacity:'70%' }}>
            Indexx500 stock tokens issued and reserve assets are publicly available and updated
            </Text>
          </div>
          <div className="col-2">   <br />
            <Image preview={false} src={x4} width={80}></Image>
            <br />
            <Text strong style={{ fontSize: 27, color: "#0079FA" }}>
              Widespread <br />
              Adoption <br />
            </Text>
            <Text style={{ fontSize: 14,opacity:'70%' }}>
            Indexx500 tokens are among the most traded tokens in terms of daily volume, offering unequalled liquidity.
            </Text>
          </div>
          <div className="col-2">
            <Image preview={false} src={x4} width={80}></Image>
            <br />
            <Text strong style={{ fontSize: 27, color: "#0079FA" }}>
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
            textAlign: "center",
            alignContent: "center",
            alignItems: "center",
            marginTop:70,
          }}
        >
          <div
            className="col-2 text-center center"
            style={{ textAlign: "center" }}
          >   <br />   <br />
            <Image preview={false} src={x4} width={80}></Image>
            <br />
            <Text strong style={{ fontSize: 27, color: "#0079FA" }}>
            Backed by Blue <br />
              Chip 50 Crypto <br />
              Indexx Liquidity <br />
            </Text>
            <Text style={{ fontSize: 14,opacity:'70%' }}>
            All Indexx500 stock tokens are pegged at 1-to-1,000 with a matching ( 1,000 S&P = 1 of 500 index stock ) and are backed 80% by Indexx500 ETF investment reserves.
            </Text>
          </div>
          <div className="col-2">   <br />   <br />
            <Image preview={false} src={x4} width={80}></Image>
            <br />
            <Text strong style={{ fontSize: 27, color: "#0079FA" }}>
            Multiple <br /> Blockchains Support <br />
            </Text>
            <Text style={{ fontSize: 14,opacity:'70%' }}>
            Indexx500 stock tokens are built on multiple blockchains—offering easy integration and adoption. Supported blockchains are Bitcoin (Omni & Liquid protocol), Ethereum, TRON, EOS, Algorand, Solana, OMG Network, and Bitcoin Cash (SLP).
            </Text>
          </div>
          <div className="col-2">
            <Image preview={false} src={x4} width={80}></Image>
            <br />
            <Text strong style={{ fontSize: 27, color: "#0079FA" }}>
            Available in <br/>Different Currencies <br />
            </Text>
            <Text style={{ fontSize: 14,opacity:'70%' }}>
            Indexx500 supports US dollar (USD), euro (EUR) and offshore Chinese yuan (CNH). Represented by INXS, Indexx500 stock tokens are denoted as INXS in very near future.
            </Text>
          </div>
          <div className="col-2">
            <Image preview={false} src={x4} width={80}></Image>
            <br />
            <Text strong style={{ fontSize: 27, color: "#0079FA" }}>
            Regulatory <br/>Compliant <br />
            </Text>
            <Text style={{ fontSize: 14,opacity:'70%' }}>
            Indexx500 maintains world-class standardized compliance measures for anti-money laundering (AML), countering the financing of terrorism (CFT), sanctions, and know your customer (KYC) laws and regulations.
            </Text>
          </div>
        </div>
      </div>

          <div style={{marginTop:300}}></div>
      <Footer></Footer>
    </>
  );
};

export default Index500;
