import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';

const App = () => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    axios.get('https://tada-backend-zkpy.onrender.com')
      .then(res => setExpenses(res.data));
  }, []);

  const addExpense = exp => {
    setExpenses(prev => [...prev, exp]);
  };

  return (
    <div>
      <h1>TA/DA Tracker</h1>
      <ExpenseForm onAdd={addExpense} />
      <ExpenseList expenses={expenses} />
    </div>
  );
};

export default App;
