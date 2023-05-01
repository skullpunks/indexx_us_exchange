import React from "react";
import "./sections1.css"
// import BackgroundImage from "../../../assets/background.png";
import IndexxText from "../../../assets/mainlogo.png";
import a from "../../../assets/homepage/a.png";
// import g from "../../../assets/homepage/g.png";
// import r from "../../../assets/homepage/r.png";
import w from "../../../assets/homepage/w.png";
// import x from "../../../assets/xx.png";
import f from "../../../assets/homepage/f.png";
// import walet from "./wallet.png";

// import { Link } from "react-router-dom";
// import { baseCEXURL, baseDEXURL } from "../../../services/api";
// import { Button } from "antd";
import { Image } from "antd";

const Section1 = () => {

    // let comingSoonText = <p className="font_13x brand_color">Coming soon 31st Oct</p>;
    return (
        <div style={{backgroundColor:'black'}} className="home-container">
            <div>
                <img src={IndexxText} alt="Indexx Logo" className="center-Image" style={{height:95}}/>
            </div>
            <div className="section-helper-text" >Web3 and Crypto</div>
            <br/><br/><br/>
            {/* <div className="section-usp" >
                <span className="font-big">
                    <Link className="trade_to_earn_link" to="/indexx-exchange/trade-to-earn">
                        <span style={{ color: "rgba(255, 255, 255, 0.6)" }}>Trade to</span>
                        <span className="big_trade_font" style={{ color: "#fff", display: "inline-block" }}>
                            Earn 
                            <sub style={{ fontSize: 15, color: "#fff", position: "relative", bottom: 0 }}>TM</sub>
                            ,
                        </span>
                    </Link>
                    <span style={{ color: "rgba(255, 255, 255, 0.6)" }}> Upto</span>
                    <span className="big_trade_font">30%</span>
                    <span style={{ color: "rgba(255, 255, 255, 0.6)" }}> Trade reward</span>

                </span>
            </div> */}

<div className="scan-container d-flex justify-content-center align-items-center" style={{marginTop:-50,marginLeft:100}}>
  <div className="row d-flex justify-content-center text-center" style={{marginLeft:-120}}>
    <div className="col text-center" style={{}}>
        <a href="https://test.dex.indexx.ai/ai-engine">
        <Image src={a} width={100} preview={false} style={{marginBottom:11}}></Image> 
      <br/><span style={{color:"white",alignContent:"center",marginLeft:30}}> Ai Engine</span>
      
        </a>
      
    </div>
    <div className="col" style={{marginLeft:-1000,marginRight:-1000,marginTop:-12}}>
    <a href='https://test.wallet2.indexx.ai/'>
    <Image src={f} preview={false} width={60} style={{marginBottom:8}}/>
    <br/><span style={{color:"white",alignContent:"center"}}>Wallet</span>
    </a>
    </div>
    <div className="col text-center" style={{}}>
        <a href="https://test.swap.indexx.ai/">
        <Image src={w} preview={false} width={70} style={{marginBottom:8}}></Image> 
      <br/><span style={{color:"white",alignContent:"center"}}> Swap</span>
      </a>
     
      
    </div>
 
  </div>
  
</div>
           
        </div>
    );
};

export default Section1;
