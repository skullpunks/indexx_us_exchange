import { RadioChangeEvent, Space } from 'antd';
import bsDollar from "../../assets/arts/bsDollar.svg";
import { ArrowRightOutlined, CloseOutlined, LinkOutlined } from '@ant-design/icons';
import { Button, Radio } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import copyIcon from "../../assets/arts/copyIcon.svg";
import { useState } from 'react';


export const BSDepositCryptoWallet = () => {

  const [value, setValue] = useState("funding");
  const navigate = useNavigate();
  const onChange = (e: RadioChangeEvent) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };

  return (
    <div className='scan-container bs_main wd_container'>
      <div className='d-flex w_fiat flex-justify-between flex-align-center d_crypto_Container'><div className='d-flex flex-align-center top_heading'>
        <span onClick={() => navigate("/indexx-exchange/buy-sell/deposit-crypto")}>Deposit Crypto</span>
      </div>
        <div className='crypto_con_button'><Button danger className='danger_disabled' onClick={() => navigate("/indexx-exchange/buy-sell/deposit-fiat")}>Deposit Fiat<ArrowRightOutlined /></Button></div>
      </div>
      <div className='card responsive_container bs_container sell_screens margin-lr-auto padding-lr-2x margin-t-3x'>
        <div className=' padding-t-2x d-flex flex-justify-between flex-align-center'><div><h1 className='font_20x'>Change Deposit Wallet</h1><div className='font_13x padding-t-1x'>Please select a wallet to use for deposit.</div></div><CloseOutlined className='font_15x' /></div>



        <Radio.Group onChange={onChange} value={value} className='orange margin-t-2x font_15x'>
          <Space direction="vertical">
            <Radio value="funding" className='orange margin-t-2x font_15x d-flex'>
              <span className='d-flex flex-align-center'>
                <span style={{ minWidth: 200 }}>Funding Wallet</span>
                {(value === "funding") && <Button size="small" className='pointer-events-none' danger>Selected</Button>}
              </span>
            </Radio>
            <Radio disabled={true} value="spot" className='orange margin-t-1x font_15x d-flex'>
              <span className='d-flex flex-align-center'>
                <span style={{ minWidth: 200 }}>Spot Wallet</span>
                <Button disabled={true} size="small" danger>coming soon</Button>
              </span>
            </Radio>
          </Space>
        </Radio.Group>
        {/* <Radio checked className='orange margin-t-2x font_15x' >
          <span className=''>Funding Wallet
          </span></Radio>
        <Radio className='orange margin-t-2x font_15x' >
          <span className=''>Funding Wallet
          </span></Radio> */}
        <br />
        <Button type="primary" className='margin-tb-2x'>
          <Link to="/indexx-exchange/buy-sell/deposit-crypto/confirm-message">Confirm</Link>
        </Button>
        {/* <br />
        <br />
        <div className='padding-b-1x'>Wallet Selection History</div>
        <div className='d-flex flex-justify-between border-1x padding-2x'><div>2022-10-10 04:22</div><div>Funding Wallet Selected</div></div> */}
      </div>
      <div className='w_fiat'>
        <h1 className='font_48x font_40x padding-b-1x'>Recent Deposit</h1>
        <div className='recent_deposit_container border-1x padding-2x '>

          <div className='d-flex d_crypto_status'><div className='d-flex'><img src={bsDollar} alt="bsDollar" width="38" height="38" /><div className='font_20x padding-l-1x'>0.07 BNB</div></div><Button danger className='margin-l-2x'>Completed</Button></div>
          <div className='d-flex flex-justify-between padding-t-1x responsive_recent_deposits '>

            <div className='d-flex '><div className='wallet_funding'>
              <div className='font_15x'>2022-10-03</div>
              <div className='font_15x '><span className='brand_opacity_5'>Deposit</span> wallet Funding Wallet</div>
            </div>
              <div className='font_15x padding-l-2x padding-b-2x'><span className='brand_opacity_5'>Network</span> BSC</div></div>
            <div className='font_15x'><span className='brand_opacity_5 '>Address</span> 0x56092d7daffc1691662e7383c8ebc5f75247ca19<LinkOutlined className='margin-l-0_5x brand_opacity_5' /><img src={copyIcon} alt="QRCodeIcon" width="11" height="11" className='margin-l-0_5x' /></div>
            <div className='font_15x'><span className='brand_opacity_5 '>TxID</span> 0x56092d7daffc....19<LinkOutlined className='margin-l-0_5x brand_opacity_5' /><img src={copyIcon} alt="QRCodeIcon" width="11" height="11" className='margin-l-0_5x' /></div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default BSDepositCryptoWallet;
