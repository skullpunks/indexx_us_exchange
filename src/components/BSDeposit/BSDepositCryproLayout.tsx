import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Footer from '../Footer/Footer';
import BSDepositCryptoSelect from './BSDepositCryptoSelect';
import '../BSDepositWithdraw/BSWithdraw.css';
import BSDepositCryptoWallet from './BSDepositCryptoWallet';
import BSDepositCryptoConfim from './BSDepositCryptoConfim';
import { BSProvider } from '../../utils/SwapContext';

export const BSDepositCryproLayout = () => {
    return (
        <>
            <div className='flex-align-stretch bs_main'>
                <BSProvider >
                    <Routes>
                        <Route index element={<BSDepositCryptoSelect />} />
                        <Route path="/deposit-wallet" element={<BSDepositCryptoWallet />} />
                        <Route path="/confirm-message" element={<BSDepositCryptoConfim />} />
                    </Routes>
                </BSProvider >
            </div>
            <Footer footerArt="flipWoman" />
        </>
    )

}

export default BSDepositCryproLayout;