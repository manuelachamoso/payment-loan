import React, {useState} from 'react';
import { calculateTotal } from '../Functions';

const Formulario = (props) => {
    const {amount, saveAmount, period, savePeriod, total, saveTotal, saveLoading} = props

    const [error, saveError] = useState(false);

    const calculateLoan = e => {
        e.preventDefault();

        if (amount === 0 || period === '' ) {
            saveError(true);
            return;
        }
        saveError(false);

        saveLoading(true);

        setTimeout(() => {
            const total = calculateTotal(amount, period);
            saveTotal(total);  

            saveLoading(false);
        }, 3000);
    }
    
    return ( 
        <>
        <form onSubmit={calculateLoan}>
          <div className="row">
              <div>
                  <label>Loan amount</label>
                  <input 
                      className="u-full-width" 
                      type="number" 
                      placeholder="Example: 3000€" 
                      onChange={ (e)=> {saveAmount(parseInt(e.target.value))}}
                  />
              </div>
              <div>
                  <label>Loan term</label>
                  <select 
                      className="u-full-width"
                      onChange={ (e)=> {savePeriod(parseInt(e.target.value))}}
                  >
                      <option value="">Length of loan</option>
                      <option value="3">3 months</option>
                      <option value="6">6 months</option>
                      <option value="12">12 months</option>
                      <option value="24">24 months</option>
                      <option value="36">36 months</option>
                      <option value="60">60 months</option>
                  </select>
              </div>
              <div>
                  <input 
                      type="submit" 
                      value="Calcular" 
                      className="button-primary u-full-width" 
                  />
              </div>
          </div>
  </form>
        {(error) ? <p className='error'>Todos los campos son obligatorios</p> : null }
        
        </>
    );
}
 
export default Formulario;