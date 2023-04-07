import React from "react";
import Footer from "../Footer/Footer";
import { Typography, Button, Image } from "antd";
import "./Tokens.css";
import usd from "../../assets/coinAnimations/usd.webp";
import crypto from "../../assets/coinAnimations/iusd.webp";
import { baseDEXURL } from "../../services/api";
const { Text } = Typography;
const IndexxUSD = () => {
  return (
    <>
      <div className="scan-container how-it-works flex-direction-column text-center ">
      <Image preview={false} src={usd} width={1000}></Image>
      <Image preview={false} src={crypto} width={150}></Image>

      <div style={{textAlign:'left',marginTop:60}}>
      <Text strong style={{fontSize:65,color:"#1D860A"}}>Indexx <span style={{fontSize:15,marginTop:12}}>&#8482;</span>USD+</Text> <br/>
                    <Text style={{fontSize:22,opacity:'70%'}} >
indexx USD+ stablecoin can be instantly minted and redeemed to USDT 1:1.<br/>

Simply replace USDT with USD+ stablecoin and start getting passive yield where it didn’t exist before.</Text><br/><br/>

      </div>
      <a href={baseDEXURL}><Button type="primary" shape="round" className='thirdButton' style={{marginTop:20}}> Buy Tokens</Button></a>
      <Text style={{marginTop:80,opacity:'60%',fontSize:65}}>How Does indexxUSD+ works</Text><br/><br/><br/>
    <Text style={{textAlign:'left',paddingLeft:100,paddingRight:100}}>
      
    <p style={{fontSize:22}}><strong>indexx USD+ includes 3 components:</strong></p><br/>

<div style={{fontSize:22,opacity:'70%'}}>
    <p>1. PEGGED TO USDT 1 : 1</p>
    <ul>
        <li>100% collateralized with assets immediately convertable into USDT</li>
        <li>&apos;Risk-first portfolio&apos;, i.e. assets are picked primarily to avoid losses on a daily basis</li>
    </ul>
    <p>&nbsp; &nbsp; &nbsp; (3-4 sigmas away from 0), no exposure to algorithmic stables</p>
    <ul>
        <li>USD+ can replace USDT in pools and lending protocols</li>
    </ul>
    <p><br/></p>
</div>
<div style={{fontSize:22,opacity:'70%'}}>
    <p>2. YIELD GENERATING</p>
    <ul>
        <li>Collateral consists of yield-bearing strategies, including lending and stable-to-stable pools</li>
        <li>Portfolio allocation decentrally controlled (community proposals, veto power by token stakers/insurance providers)</li>
        <li>Portfolio strategy executed decentrally via smart-contracts</li>
        <li>Profit paid out daily in indexxUSD+ via rebase</li>
    </ul>
    <p>&nbsp;</p>
</div>
<div style={{fontSize:22,opacity:'70%'}}>
    <p>3. INSURANCE</p>
    <ul>
        <li>Coming soon</li>
    </ul>
</div>
      </Text> 

      <Button type="primary" shape="round" className='thirdButton' style={{marginTop:40}}> Buy Tokens</Button>
                        <br/><br/><br/><br/><br/>
      

      <Text style={{opacity:'70%',textAlign:'left',paddingLeft:100,paddingRight:100}}>IMPORTANT LEGAL DISCLAIMER Access to products and services detailed on this website may be restricted for certain persons or countries. In particular, the products and services referred to herein are not available to U.S. Persons, as defined by Regulation S of the United States Securities and Exchange Commission, as amended (“U.S. Persons”). The information contained on this website is not available to U.S. Persons. Investors who are such "U.S. Persons" should not view this website. The provision of the information in this website does not constitute an offer of securities to any person in the United States or to any "U.S. Person." Indexx is not registered under the U.S. Investment Company Act of 1940, as amended, nor is the sale of Invictus tokens registered under the U.S. Securities Act of 1933, as amended. Consequently, it cannot be offered for sale or be sold in the United States, its territories, possessions or protectorates under its jurisdiction, nor to nationals, citizens or residents in any of those areas, except pursuant to a valid exemption. More generally, the products and services presented on this website may only be purchased in jurisdictions in which their marketing and distribution are authorized. Indexx advises all interested parties to check in advance whether they are legally entitled to purchase the products and/or services presented on the website.</Text>
      </div>

      <Footer></Footer>
    </>
  );
};

export default IndexxUSD;
