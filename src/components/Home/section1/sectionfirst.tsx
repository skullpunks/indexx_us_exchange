import React from "react";
import "./sections1.css"
// import BackgroundImage from "../../../assets/background.png";
// import IndexxText from "../../../assets/mainlogo.png";
import xxx from "../../../assets/xxx.svg";
// import g from "../../../assets/homepage/g.png";
// import r from "../../../assets/homepage/r.png";
// import walet from "./wallet.png";
import Section2 from "../section2/section2";
import Section3 from "../section3/section3";
import Section4 from "../section4/section4";
import Section5 from "../section5/section5copy";
import Footer from "../../Footer/Footer";
// import { Link } from "react-router-dom";
// import { baseCEXURL, baseDEXURL } from "../../../services/api";
// import { Button } from "antd";
import { Image } from "antd";
import { baseCEXURL } from "../../../services/api";
const SectionFirst = () => {

    // let comingSoonText = <p className="font_13x brand_color">Coming soon 31st Oct</p>;
    return (
        <>
        <div style={{backgroundColor:'black'}} className="home-container">
            
            <div style={{marginTop:-100}}>
                <Image src={xxx} style={{marginBottom:30}} preview={false}></Image>
            </div>
      
            <div className="actions">
                  <a href="https://test.swap.indexx.ai/" target="_blank" rel="noopener noreferrer">
                    <span  className="td-none">
                     
                            <div className="launch-app-button cut_button">
                                <div className="launch-app-button-text">Swap</div>
                            </div>
                      
                    </span>
                   
                </a>

                 <a className="td-none" href={`${baseCEXURL}/indexx-exchange/buy-sell/login`} target="_blank" rel="noopener noreferrer">
                    <div className="login-button cut_button">
                        <div className="login-button_text">Exchange</div>
                        
                    </div>
                </a>
             
            </div>
           
        </div>
<div className="home-container">
<Section2 />
</div>
<Section3 />
<Section4 />
<Section5/>
<Footer helpIcon={false} /> 

</>
    );
};

export default SectionFirst;
