import { useState } from 'react';
import { useWallet } from '../context/WalletContext';
import './Form.css';

const Transfer = () => {
  const { addTransaction } = useWallet();
  const [formData, setFormData] = useState({
    receiverName: '',
    accountId: '',
    amount: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!formData.receiverName || !formData.accountId || !formData.amount) {
      setError('All fields are required.');
      return;
    }

    if (isNaN(formData.amount) || Number(formData.amount) <= 0) {
      setError('Please enter a valid amount.');
      return;
    }

    addTransaction(formData.receiverName, formData.amount);
    setSuccess(`Successfully sent ₹${formData.amount} to ${formData.receiverName}.`);
    setFormData({ receiverName: '', accountId: '', amount: '' });
  };

  return (
    <div className="page-container">
      <div className="form-card">
        <h2>Transfer Money</h2>
        {error && <div className="alert error">{error}</div>}
        {success && <div className="alert success">{success}</div>}
        
        <form onSubmit={handleSubmit} className="form">
          <div className="form-group">
            <label htmlFor="receiverName">Receiver Name</label>
            <input 
              type="text" 
              id="receiverName" 
              name="receiverName" 
              value={formData.receiverName} 
              onChange={handleChange} 
              placeholder="Enter receiver's name"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="accountId">Account/Wallet ID</label>
            <input 
              type="text" 
              id="accountId" 
              name="accountId" 
              value={formData.accountId} 
              onChange={handleChange} 
              placeholder="Enter account ID"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="amount">Amount (₹)</label>
            <input 
              type="number" 
              id="amount" 
              name="amount" 
              value={formData.amount} 
              onChange={handleChange} 
              placeholder="0.00"
              step="0.01"
            />
          </div>
          
          <button type="submit" className="btn btn-primary">Send Money</button>
        </form>
      </div>
    </div>
  );
};

export default Transfer;
