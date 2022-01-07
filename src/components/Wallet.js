import React, {useState} from 'react'
import {ethers} from 'ethers';

const Wallet = () => {

  const [errorMessage, setErrorMessage] = useState('');
  const [defaultAccount, setDefaultAccount] = useState('');
  const [userBalance, setUserBalance] = useState('');
  const [connButtonText, setConnButtonText] = useState('Connect Wallet');

  const connectWalletHandler = () => {
    if(window.ethereum){
      window.ethereum.request ({method: 'eth_requestAccounts'})
      .then(result => {
        accountChangedHandler(result[0]);
      })
    } else {
      setErrorMessage('Install MetaMask')
    }
  }

  const accountChangedHandler = (newAccount) =>{
    setDefaultAccount(newAccount);
    getUserBalance(newAccount.toString())
  }

  const getUserBalance = (address) => {
    window.ethereum.request({method: 'eth_getBalance', params: [address, 'latest']})
    .then(balance =>{
      setUserBalance(ethers.utils.formatEther(balance));
    })
  }

  window.ethereum.on('accountsChanged', accountChangedHandler);

  return (
    <div className ='walletCard'>
      <h4>
        {"Connection to Metamask using window.ethereum methods"}
      </h4>
      <button onClick={connectWalletHandler}>{connButtonText}</button>
      <div className = 'accountDisplay'>
        <h3>Address: {defaultAccount}</h3>
      </div>
      <div className='balanceDisplay'>
        <h3>Balance: {userBalance}</h3>
      </div>
    </div>
  )
}

export default Wallet
