import React from 'react';
import './App.css';
import RequestForm from './components/RequestForm';
import RatesTable from './components/RatesTable';
import DUMMYDATA from './DUMMYDATA';

function App() {
  return (
    <div className="App">
        <RequestForm />
        <RatesTable data={DUMMYDATA.rateQuotes} />
    </div>
  );
}

export default App;
