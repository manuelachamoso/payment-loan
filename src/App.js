import React, {useState} from 'react';
import Header from './Components/Header';
import Formulario from './Components/Form';
import Message from './Components/Message';
import Results from './Components/Results';
import Spinner from './Components/Spinner';


function App() {
  const [amount, saveAmount] = useState(0);
  const [period, savePeriod] = useState('');
  const [total, saveTotal] = useState(0);
  const [loading, saveLoading] = useState(false);

  let component;

  if(loading) {
    component = <Spinner />
  } else if (total === 0) {
    component = <Message />
  } else {
    component = <Results 
                  total = {total}
                  period = {period}
                  amount = {amount}
                />
  }

  return (
    <>
      <Header 
        titulo = "Payment Loan"
      />
      <div className= "container">
      <Formulario 
          amount = {amount}
          saveAmount = {saveAmount}
          period = {period}
          savePeriod = {savePeriod}
          total = {total}
          saveTotal = {saveTotal}
          saveLoading = {saveLoading}          
      />    
      <div className='message'>{component}</div>
      
    </div>
    </>
  );
}

export default App;
