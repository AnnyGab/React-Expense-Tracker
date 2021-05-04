import React from 'react'
import {Header}  from './components/Header';
import {Balance}  from './components/Balance';
import {IncomeExpenses}  from './components/IncomeExpenses';
import {TrasactionsList}  from './components/TrasactionsList';
import {AddTransaction}  from './components/AddTransaction';

import { GlobalProvider } from './context/GlobalState';

import './App.css'

function App() {
  return (  
  <GlobalProvider> 
    <Header />
    <div className="container"></div>
    <Balance />
    <IncomeExpenses />
    <TrasactionsList />
    <AddTransaction />
  </GlobalProvider> 
  );
}

export default App
