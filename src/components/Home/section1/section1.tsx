import React from "react";
import "./sections1.css"
// import BackgroundImage from "../../../assets/background.png";
import IndexxText from "../../../assets/mainlogo.png";
import a from "../../../assets/homepage/a.png";
// import g from "../../../assets/homepage/g.png";
// import r from "../../../assets/homepage/r.png";
import w from "../../../assets/homepage/w.png";
// import y from "../../../assets/homepage/y.png";
import walet from "./wallet.png";

// import { Link } from "react-router-dom";
import {  baseDEXURL } from "../../../services/api";
// import { Button } from "antd";
import { Image } from "antd";

const Section1 = () => {

    // let comingSoonText = <p className="font_13x brand_color">Coming soon 31st Oct</p>;
    return (
        <div style={{backgroundColor:'black' }} className="home-container">
            <div>
                <img src={IndexxText} alt="Indexx Logo" className="center-Image" style={{width:290,height:70}}/>
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

<div className="scan-container d-flex justify-content-center align-items-center" style={{marginTop:-50,marginLeft:149}}>
  <div className="row d-flex justify-content-center text-center">
    <div className="col text-center" style={{marginRight:-300}}>
        <a href="https://sorekt.wtf/ai-engine-free-version">
        <Image src={a} preview={false}></Image> <br/>
      <br/><span style={{color:"white",alignContent:"center",marginLeft:20}}> Ai Engine</span>
      
        </a>
      
    </div>
    
    
    {/* <div className="col" style={{marginLeft:-300,marginRight:-300}}>
    <a href="https://wallet.indexx.ai/">
    <Image src={r} preview={false} style={{marginTop:-10,}}/>
    <div style={{marginTop:7}}>
    <span style={{color:"white",alignContent:"center"}}> Assets</span>
    </div>
    </a>
    </div>
    <div className="col" style={{marginLeft:-300,marginRight:-300}}>
        <a href={baseCEXURL}>
    <Image src={g} preview={false}/><br/>
    <br/><span style={{color:"white",alignContent:"center"}}>Exchange</span>
    </a>
    </div> */}
    <div className="col" style={{marginLeft:-300,marginRight:-300}}>
    <a href={baseDEXURL}>
    <Image src={w} preview={false}/><br/>
    <br/><span style={{color:"white",alignContent:"center"}}>Swap</span>
    </a>
    </div>
    <div className="col" style={{marginLeft:-300,marginRight:140}}>
    <a href='https://wallet.indexx.ai/'>
    <Image src={walet} preview={false}/><br/>
    <br/><span style={{color:"white",alignContent:"center"}}>Wallet</span>
    </a>
    </div>
  </div>
  
</div>
            {/* <div className="actions">
                  <a href={baseDEXURL} target="_blank" rel="noopener noreferrer">
                    <span  className="td-none">
                     
                            <div className="launch-app-button cut_button">
                                <div className="launch-app-button-text">Decentralized</div>
                            </div>
                      
                    </span>
                   
                </a>

                 <a className="td-none" href={`${baseCEXURL}/indexx-exchange/buy-sell/login`} target="_blank" rel="noopener noreferrer">
                    <div className="login-button cut_button">
                        <div className="login-button_text">Centralized</div>
                        
                    </div>
                </a>
             
            </div>
             */}
        </div>
    );
};

export default Section1;
