import React from 'react';
import "./MeetingBanner.css";
import { Button } from 'antd';
import {baseDEXURL,baseCEXURL } from "../../../services/api";
const MeetingBanner = () => {
    return (
        <>
        <div className='meeting_banner d-flex flex-direction-row  text-center center ' style={{ textAlign: "center", alignContent: "center", alignItems: "center"}} >
               
                <div className='row'>
                    <div className='col center text-center align-text-bottom  text-center' >
                    <p className='text-banner' style={{ textAlign: "center", alignContent: "center", alignItems: "center",marginRight:-20}}> 
                        Welcome to<br /> Indexx  <br /> Live and Online Event
                    </p>
                   <a href='https://investor.indexx.ai/'><Button danger type='primary' size="middle" className=" earn_btn center text-center align-text-bottom  text-center "style={{maxWidth:420,borderRadius:0,marginRight:-25}} >
                     Join us
                    </Button></a> 
                    </div>

                </div>
             
                
        </div>
         <div className="actions" style={{marginTop:-40,}}>
         {/* <a href={baseDEXURL}><Button  type="primary" style={{width:290}}>Exchange</Button></a>   */}
         <a href={baseDEXURL} target="_blank" rel="noopener noreferrer">
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
         <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/>
     </div>
     </>
    )
}

export default MeetingBanner