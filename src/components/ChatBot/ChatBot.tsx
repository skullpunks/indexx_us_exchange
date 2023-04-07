


import Footer from '../Footer/Footer';

import { Input, Space,Image,Typography } from 'antd';
import "./ChatBot.css"
import {
  SendOutlined
  } from '@ant-design/icons';

import bot from  "../../assets/botblack.png";


const {Text} = Typography;
const ChatBot = () => {

    
const { Search } = Input;


const onSearch = (value: string) => console.log(value);

    return (
            <>
            
             <div className="scan-container how-it-works flex-direction-column text-center "> 
             <div className='row justify-content-md-center'>
  
                <div className="col col-lg-2">
                <h1>Indexx X-BOTZ</h1>
                </div>
               
                <div className="col col-lg-1" style={{marginTop:-15,marginLeft:-44,opacity:'60%'}}>
                <Image preview={false} src={bot} width={70} className="botimage" ></Image>
                </div>
             </div>
             
                <h4>Ask anything crypto related!</h4>
            <div>
            {/* <div style={{textAlign:'left'}}>
                <Text>Examples:</Text><br/>
                <Text>Which token is the best to invest in 2023?</Text>

            </div> */}
            <br/>  
            <Space direction="vertical" className='chat-bot-container'>
               
                <div className='resultDisplay'>
                    <br/><br/><br/>
                <Text strong>X-Botz:</Text> 
                </div>

                </Space>

            </div>
            <Search style={{width:760,marginTop:60}} size='large' width={900} placeholder="What do you want?" onSearch={onSearch} enterButton={<SendOutlined />} />
               
             </div>
            
                <Footer></Footer>
            </>


    );
};


export default ChatBot;
