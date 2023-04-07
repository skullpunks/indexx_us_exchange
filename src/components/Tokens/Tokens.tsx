
import React from 'react'
import { Typography, Button, Image } from 'antd';
import Footer from '../Footer/Footer';
import './Tokens.css';
import cryptoSpin from '../../assets/tokenimages/Crypto.png'
import in500spin from '../../assets/tokenimages/indexx500.png'
import iusd from '../../assets/tokenimages/USD+.png'
import inex from '../../assets/tokenimages/INEX.png'
import pho from '../../assets/tokenimages/Phoenix.png'
import sorekt from '../../assets/tokenimages/SoRekt.png'
import tokenimg from './tokenimg.png'
import { baseDEXURL } from '../../services/api';
import { Link } from "react-router-dom";
const { Text } = Typography;

const Tokens = () => {



    return (
        <>
            <div className="scan-container how-it-works flex-direction-column text-center ">

                <div className="row justify-content-md-center" style={{ marginTop: 20 }}>
                    <Image preview={false} className="scaleup" src={tokenimg} width={400} style={{ marginBottom: 30 }}></Image><br />
                    <h1 style={{ fontSize: 35, opacity: '70%' }}>Token Information</h1>
                    <Text style={{ fontSize: 20, opacity: '70%', marginBottom: 70 }}>All the tokens by Indexx</Text>
                    <div className="col-3">
                        <Link to="/indexx-exchange/token-details/crypto">

                            <Image preview={false} className="scaleup" src={cryptoSpin} width={100}></Image><br />
                            <Text italic strong className='cryptotext'> IndexxCrypto<span style={{ fontSize: 15, marginTop: 12 }}>&#8482;</span> INXC</Text> <br />
                            <Text className='cryptolinktext' >Hyper attitude, Crypto Performance.</Text><br />
                            <Text strong className='cryptolinktext' style={{ fontSize: 20 }} >Information</Text><br />

                        </Link>
                        <a href={"https://irp.cdn-website.com/f7cf3c69/files/uploaded/Indexx_Crypto_White_Paper_%28Aug_22_2022%29.docx.pdf"}> <Text strong className='cryptolinktext' style={{ fontSize: 20 }} >Whitepaper</Text></a><br />
                        <a href={"https://irp.cdn-website.com/f7cf3c69/files/uploaded/Copy%20of%20Index%20Crypto%20Tokenomics%2026th%20Aug.pdf"}><Text strong className='cryptolinktext' style={{ fontSize: 20 }}>Tokenomics</Text></a><br /><br />
                        <a href={baseDEXURL}><Button type="primary" shape="round" className='firstButton'> Buy Tokens</Button></a>

                    </div>



                    <div className="col-3">
                        <Link to="/indexx-exchange/token-details/in500">
                            <Image preview={false} src={in500spin} width={100} className="scaleup"></Image><br />
                            <Text italic strong className='in500text'>Indexx500<span style={{ fontSize: 15, marginTop: 12 }}>&#8482;</span> IN500</Text> <br />
                            <Text className='in500linktext' >The Future of Stocks, grow with S&P 500 index.</Text><br />
                            <Text strong className='in500linktext' style={{ fontSize: 20 }} >Information</Text><br />
                        </Link>
                        
                        <a href={"https://irp.cdn-website.com/f7cf3c69/files/uploaded/Indexx500%20WhitePaper%208_Q2i4g5IKSrGhM3JlsCUp.22.2022%20v1.3.1%20%281%29.pdf"}> <Text strong className='in500linktext' style={{ fontSize: 20 }} >Whitepaper</Text></a><br />
                        <a href={"https://irp.cdn-website.com/f7cf3c69/files/uploaded/Indexx_500_Tokenomics.pdf"}><Text strong className='in500linktext' style={{ fontSize: 20 }}>Tokenomics</Text></a><br /><br />
                        <a href={baseDEXURL}> <Button type="primary" shape="round" className='secondButton'> Buy Tokens</Button></a>


                    </div>


                    <div className="col-3">
                        <Link to="/indexx-exchange/token-details/usd">
                            <Image preview={false} src={iusd} width={100} className="scaleup" > </Image><br />
                            <Text italic strong className='iusdtext'>IndexxUSD+ <span style={{ fontSize: 15, marginTop: 12 }}>&#8482;</span>  IUSD+</Text> <br />
                            <Text className='iusdlinktext'>Totally Stable as the US dollar plus more</Text><br />
                            <Text strong className='iusdlinktext' style={{ fontSize: 20 }} >Information</Text><br />
                        </Link>
                        <a href={"https://irp.cdn-website.com/f7cf3c69/files/uploaded/indexx_USD-Plus_WhitePaper-final.docx_%281%29.pdf"}> <Text strong className='iusdlinktext' style={{ fontSize: 20 }} >Whitepaper</Text></a><br />
                        <a href={"https://irp.cdn-website.com/f7cf3c69/files/uploaded/indexx_USD_Tokenomics.docx.pdf"}><Text strong className='iusdlinktext' style={{ fontSize: 20 }}>Tokenomics</Text></a><br /><br />
                        <a href={baseDEXURL}> <Button type="primary" shape="round" className='thirdButton'> Buy Tokens</Button></a>


                    </div>

                </div>
                <div className="row justify-content-md-center" style={{ marginTop: 130 }}>
                    <div className="col-3">
                        <Link to="/indexx-exchange/token-details/inex">
                            <Image preview={false} src={inex} width={99} className="scaleup"></Image><br />
                            <Text italic strong className='inextext'>IndexxEX<span style={{ fontSize: 15, marginTop: 12 }}>&#8482;</span> INEX</Text> <br />
                            <Text className='inexlinktext' >Main utility token</Text><br />
                            <Text strong className='inexlinktext' style={{ fontSize: 20 }} >Information</Text><br />
                        </Link>
                        <a href={"https://smallpdf.com/file#s=2976c285-e12c-448d-89e9-5e292c4126ac"}> <Text strong className='inexlinktext' style={{ fontSize: 20 }} >Whitepaper</Text></a><br />
                        <Text strong className='inexlinktext' style={{ fontSize: 20 }}>Tokenomics</Text><br /><br />
                        <a href={baseDEXURL}>   <Button type="primary" shape="round" className='fourthButton'> Buy Tokens</Button></a>
                    </div>
                    <div className="col-3">


                        <Link to="/indexx-exchange/token-details/phoenix">

                            <Image preview={false} src={pho} width={99} className="scaleup"></Image><br />
                            <Text italic strong className='photext'>IndexxPhoenix<span style={{ fontSize: 15, marginTop: 12 }}>&#8482;</span> INXP</Text> <br />
                            <Text className='pholinktext' >Invest your FTT and swap with INXP</Text><br />
                            <Text strong className='pholinktext' style={{ fontSize: 20 }} >Information</Text><br />
                        </Link>
                        <a href={"https://smallpdf.com/file#s=9ce2d919-0abe-40d0-a9d3-9a2f0f35ed8f"}> <Text strong className='pholinktext' style={{ fontSize: 20 }} >Whitepaper</Text></a><br />
                        <Text strong className='pholinktext' style={{ fontSize: 20 }}>Tokenomics</Text><br /><br />
                        <a href={baseDEXURL}>   <Button type="primary" shape="round" className='fifthButton'> Buy Tokens</Button></a>

                    </div>

                    <div className="col-3">


                        <a href='https://sorekt.wtf'>

                            <Image preview={false} src={sorekt} width={99} className="scaleup"></Image><br />
                            <Text italic strong className='sorekttext'>SoRekt<span style={{ fontSize: 15, marginTop: 12 }}>&#8482;</span> NFT TOKEN</Text> <br />
                            <Text className='sorektlinktext' >So Rekt's meme token</Text><br />
                            <Text strong className='sorektlinktext' style={{ fontSize: 20 }} >Information</Text><br />
                        </a>
                        <a href={"https://docdro.id/Ta5535w"}> <Text strong className='sorektlinktext' style={{ fontSize: 20 }} >Whitepaper</Text></a><br />
                        <a href={'https://docdro.id/cXHu30O'}> <Text strong className='sorektlinktext' style={{ fontSize: 20 }}>Tokenomics</Text></a><br /><br />
                        <a href={baseDEXURL}>   <Button type="primary" shape="round" className='sixthButton'> Buy Tokens</Button></a>

                    </div>

                </div>


            </div>

            <br /><br /><br />
            <Footer></Footer>
        </>

    );
}



export default Tokens;