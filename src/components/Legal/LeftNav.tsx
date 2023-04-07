
import { NavLink } from 'react-router-dom'
import left1 from "../../assets/legal/left1.png"
import left2 from "../../assets/legal/leftnav/lock.png"
import left3 from "../../assets/legal/leftnav/pencil.png"
import left4 from "../../assets/legal/leftnav/men.png"
import left5 from "../../assets/legal/leftnav/man.png"

const LeftNav = () => {
    return (
       
 <div className="lef_nav_container d-md-block d-none">
            <div className="nav_Section">
                <ul>
                    <li><strong style={{fontSize:30,paddingLeft:15}}>Legal</strong></li>
                    <li style={{marginTop:30}}><NavLink to="/indexx-exchange/legal" className="" end><img src={left1} alt=""></img> 
                    &nbsp;&nbsp; Terms of Service<br/>
                        
                    </NavLink></li>
                    <li><NavLink to="/indexx-exchange/legal/privacypolicy"><img src={left2} alt=""></img>&nbsp;&nbsp;&nbsp;&nbsp;Privacy Policy
                    </NavLink></li>
                    <li><NavLink to="/indexx-exchange/legal/termsandconditions"><img src={left3} alt=""></img>&nbsp;&nbsp;Terms and Conditions</NavLink></li>
                   
                    <li><NavLink to="/indexx-exchange/legal/affiliateprogram"><img style={{marginLeft:-14}}src={left4} alt=""></img>&nbsp;Affiliate Program</NavLink></li>
                    <li> <NavLink to="/indexx-exchange/legal/amlkmc"><img src={left5} alt=""></img>&nbsp;&nbsp;&nbsp;AML/KYC</NavLink></li>
                </ul>
            </div>
          
        </div >
       
     
       
    )
}

export default LeftNav