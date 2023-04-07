import { Button } from 'antd';
import React from 'react'
import "./BuySellDummy.css";
import { DatePicker } from 'antd';
import { Select } from 'antd';
import { decodeJWT, getAllTransactions } from '../../services/api';

interface Props {
  setScreenName: (value: string | ((prevVar: string) => string)) => void;
  setToggleChart: (value: boolean | ((prevVar: boolean) => boolean)) => void;
}


const BSTractionHistory: React.FC<(Props)> = ({ setScreenName, setToggleChart }) => {
  let allTxsdata = [];
  let access_token = String(localStorage.getItem("access_token"));
  let decoded: any = decodeJWT(access_token);
  // onChange =>()= {
  // let userWallets = await getUserWallets(decoded.email);
  // // }
  // useEffect( async() {
  // await getUserWallets(decoded.email);
  // }, []);

  // getUserWallets(decoded.email).then((userWallets) => {
  //     data = userWallets.data;
  //     userWallets.data.map((wallet: any) => {
  //         totalBalanceInUSD += parseFloat(wallet.coinWalletBalanceInUSD);
  //     })
  //     console.log("data", data);
  // })

  getAllTransactions(decoded.email).then((userTxs) => {
    console.log("userRewards", userTxs);
    allTxsdata = userTxs.data;
    console.log("allTxsdata", allTxsdata);
  })

  const { Option } = Select;
  setToggleChart(false);
  return (
    <div className='bs_container card medium_card'>
      <div className="card__header flex-justify-between d-flex flex-align-center">
        <h1 className='centered' style={{ color: "#5f5f5f" }}>
          Transaction History
        </h1>
      </div>
      <div className='card__body' >
        <div className="bs_token_num d-flex flex-align-center" >
          <img src={require(`../../assets/arts/bsDollar.svg`).default} alt="Index icon" width="38" height="38" style={{ marginRight: 11, }} />
          USD  <span className="token_grey">US Dollar</span>
        </div>
        <div className="color_general" style={{ transform: "scale(1)", padding: "10px" }}>
          <span className="font_20x" style={{ lineHeight: 4 }} >$</span>
          <span placeholder="0" className=" " style={{ fontSize: 60 }} >11.3258</span>
        </div>
        <div className='d-flex'>
          <Button className='light_button ant-btn ant-btn-dangerous danger_disabled width_auto deposit_btn margin-r-2x'> Deposit </Button>
          <Button className='light_button ant-btn ant-btn-dangerous danger_disabled width_auto deposit_btn withdraw_btn'> Withdraw </Button>
        </div>

        <div className='' style={{ marginTop: 80 }}>
          <div className='border-b-1x d-flex flex-align-center flex-justify-between font_20x padding-b-1x'>
            <div className='flex_1'>Previous Transactions</div>
            <div className='margin-l-2x flex_1'>
              <label>Date</label><br />
              <DatePicker size="large" />
            </div>
            <div className='margin-l-2x flex_1'>
              <label>Type</label><br />
              <Select
                placeholder="Select a option "
                onChange={() => { }}
                allowClear
              >
                <Option value="male">male</Option>
                <Option value="female">female</Option>
                <Option value="other">other</Option>
              </Select>
            </div>
          </div>

        </div>

        <div className='d-flex flex border-b-1x flex-justify-between padding-b-2x' style={{ marginTop: 20, marginBottom: 100 }}>
          <div className='flex_1'>
            <span>Conversion</span>
            IN500/USD
          </div>
          <div className='flex_1'>
            Successful
          </div>
          <div className='flex_1'>
            <span>$11.33</span>
            <span>Today 8:27 am</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BSTractionHistory;