import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-wrapper">
      <div className="home-container">
        <div className="home-content">
          <h1>Welcome to Your Digital Wallet</h1>
          <p>Manage your finances simply and securely.</p>
          
          <div className="home-actions">
            <Link to="/login" className="btn btn-primary">Login</Link>
            <Link to="/register" className="btn btn-secondary">Register</Link>
          </div>
        </div>
      </div>
      
      <div className="home-info">
        <h2>Why Choose Our Digital Wallet?</h2>
        <div className="info-grid">
          <div className="info-card">
            <div className="info-icon">⚡</div>
            <h3>Fast Transfers</h3>
            <p>Send and receive money instantly to anyone, anywhere, with zero delays.</p>
          </div>
          <div className="info-card">
            <div className="info-icon">🔒</div>
            <h3>Bank-Level Security</h3>
            <p>Your funds and personal data are protected with industry-leading encryption.</p>
          </div>
          <div className="info-card">
            <div className="info-icon">📊</div>
            <h3>Easy Tracking</h3>
            <p>Keep a close eye on your spending with our detailed transaction history.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
