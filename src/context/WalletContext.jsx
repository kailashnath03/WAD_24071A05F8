import { createContext, useState, useContext } from 'react';

const WalletContext = createContext();

export const useWallet = () => useContext(WalletContext);

export const WalletProvider = ({ children }) => {
  const [balance, setBalance] = useState(12500.50);
  
  const [transactions, setTransactions] = useState([
    { id: 'TXN-101', receiver: 'John Doe', amount: 150.00, date: '2023-10-25', status: 'Completed' },
    { id: 'TXN-102', receiver: 'Jane Smith', amount: 45.50, date: '2023-10-24', status: 'Completed' },
    { id: 'TXN-103', receiver: 'Amazon', amount: 89.99, date: '2023-10-22', status: 'Pending' },
    { id: 'TXN-104', receiver: 'Michael Johnson', amount: 200.00, date: '2023-10-20', status: 'Failed' },
    { id: 'TXN-105', receiver: 'Netflix', amount: 15.99, date: '2023-10-15', status: 'Completed' },
  ]);

  const addTransaction = (receiverName, amount) => {
    const newTxn = {
      id: `TXN-${Math.floor(100 + Math.random() * 900)}`,
      receiver: receiverName,
      amount: parseFloat(amount),
      date: new Date().toISOString().split('T')[0],
      status: 'Completed'
    };
    
    setTransactions([newTxn, ...transactions]);
    setBalance(prev => prev - parseFloat(amount));
  };

  return (
    <WalletContext.Provider value={{ balance, transactions, addTransaction }}>
      {children}
    </WalletContext.Provider>
  );
};
