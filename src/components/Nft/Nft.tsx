
import React from 'react'
import { Typography, Button, Image } from 'antd';
import Footer from '../Footer/Footer';
import './Nft.css';
import skull from './skull.webp'
import sorekt from './sorekt.webp'
// import mello from './mello.webp'
import sp from './spp.webp'
import logo from '../../assets/nftlogo.png'
const { Text } = Typography;

const Nft = () => {



    return (
        <>
            <div className="scan-container how-it-works flex-direction-column text-center ">

                <div className="row justify-content-md-center" style={{ marginTop: 20 }}>
                    <Image src={logo} width={400} preview={false} alt="logo" style={{marginRight:-30}}></Image>
                    
                    <Text style={{ fontSize: 20, opacity: '70%', marginBottom: 70 }}>All the NFT's powered by Indexx</Text>
                

                    <div className="col-3">
                        <a href="https://www.skullpunks.com/">
                            <Image preview={false} src={sp} width={100} className="scaleup"></Image><br />
                            <Text italic strong className='sktext'>SkullPunks<span style={{ fontSize: 15, marginTop: 12 }}>&#8482;</span> </Text> <br />
                           
                        </a>
                       
                        <a href="https://www.skullpunks.com/"> <Button type="primary" shape="round" className='skButton'> Visit Website</Button></a>


                    </div>

                    <div className="col-3">
                        <a  href="https://sorekt.wtf/">
                            <Image preview={false} src={sorekt} width={100} className="scaleup"></Image><br />
                            <Text italic strong className='srtext'>SoRekt<span style={{ fontSize: 15, marginTop: 12 }}>&#8482;</span> </Text> <br />
                           
                        </a>
                       
                        <a href="https://sorekt.wtf/"> <Button type="primary" shape="round" className='secButton'> Visit Website</Button></a>


                    </div>


               
                    <div className="col-3">
                <a href="https://www.zombielabs.wtf/">

                            <Image preview={false} className="scaleup" src={skull} width={100}></Image><br />
                            <Text italic strong className='skulltext'> ZombieLabs<span style={{ fontSize: 15, marginTop: 12 }}>&#8482;</span></Text> <br />
                        

                        </a>

                        <a href="https://www.zombielabs.wtf/"><Button type="primary" shape="round" className='zombieButton'> Visit Website</Button></a>

                    </div>
                    {/* <a  href="https://www.mellofello.wtf/">
                            <Image preview={false} src={mello} width={100} className="scaleup" > </Image><br />
                            <Text italic strong className='mftext'>Mello Fellos<span style={{ fontSize: 15, marginTop: 12 }}>&#8482;</span>  </Text> <br />
                           
                        </a>
                       
                        <a href="https://www.mellofello.wtf/"> <Button type="primary" shape="round" className='tButton'> Visit Website</Button></a> */}


                

                </div>
               
                {/* <div className="row justify-content-md-center" style={{ marginTop: 60}}>


                <div className="col-5">
                <a href="https://www.zombielabs.wtf/">

                            <Image preview={false} className="scaleup" src={skull} width={100}></Image><br />
                            <Text italic strong className='skulltext'> ZombieLabs<span style={{ fontSize: 15, marginTop: 12 }}>&#8482;</span></Text> <br />
                        

                        </a>

                        <a href="https://www.zombielabs.wtf/"><Button type="primary" shape="round" className='zombieButton'> Visit Website</Button></a>

                    </div>
                    </div> */}


            </div>

            <br /><br /><br />
            <Footer></Footer>
        </>

    );
}



export default Nft;