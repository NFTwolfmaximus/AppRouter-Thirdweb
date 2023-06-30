import Image from 'next/image'
import WalletConnect from './components/ConnectWallet'

export default function Home() {
  return (
    <div className = ' flex-row  '>
      Testing Wallet Connect
      <WalletConnect></WalletConnect>
    </div>
  )
}
