import { Link } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="page-container dashboard-container">
      <div className="dashboard-header">
        <h1>Dashboard Overview</h1>
        <p>Select an option below to manage your digital wallet.</p>
      </div>
      
      <div className="dashboard-grid">
        <Link to="/wallet" className="dashboard-card">
          <div className="card-icon">💰</div>
          <h3>Wallet Balance</h3>
          <p>Check your current balance</p>
        </Link>
        
        <Link to="/transfer" className="dashboard-card">
          <div className="card-icon">💸</div>
          <h3>Transfer Money</h3>
          <p>Send money to friends and family</p>
        </Link>
        
        <Link to="/history" className="dashboard-card">
          <div className="card-icon">📊</div>
          <h3>Transaction History</h3>
          <p>View your past transactions</p>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
