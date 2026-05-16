import { useWallet } from '../context/WalletContext';
import './Wallet.css';

const Wallet = () => {
  const { balance } = useWallet();

  return (
    <div className="page-container">
      <div className="wallet-card">
        <div className="wallet-header">
          <h2>My Wallet Balance</h2>
          <p className="wallet-id">ID: WL-987654321</p>
        </div>
        
        <div className="wallet-balance">
          <span className="currency">₹</span>
          <span className="amount">{balance.toFixed(2)}</span>
        </div>
        
        <div className="wallet-actions">
          <button className="btn btn-primary">Add Funds</button>
          <button className="btn btn-secondary">Withdraw</button>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
