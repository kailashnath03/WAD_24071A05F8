import { useWallet } from '../context/WalletContext';
import './History.css';

const History = () => {
  const { transactions } = useWallet();

  return (
    <div className="page-container">
      <div className="history-card">
        <h2>Transaction History</h2>
        
        <div className="table-responsive">
          <table className="history-table">
            <thead>
              <tr>
                <th>Transaction ID</th>
                <th>Receiver Name</th>
                <th>Amount</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((txn) => (
                <tr key={txn.id}>
                  <td>{txn.id}</td>
                  <td>{txn.receiver}</td>
                  <td className="amount-cell">₹{txn.amount.toFixed(2)}</td>
                  <td>{txn.date}</td>
                  <td>
                    <span className={`status-badge status-${txn.status.toLowerCase()}`}>
                      {txn.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default History;
