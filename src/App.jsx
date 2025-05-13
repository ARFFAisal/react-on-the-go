

import { Suspense } from 'react';
import './App.css'
import Countries from './Components/Countries/Countries'

const countriesFetch = fetch('https://restcountries.com/v3.1/all')
.then(res=>res.json());

function App() {
 

  return (
    <>
     
      <Suspense fallback={<h3>Nadir vai going......</h3>}>
        <Countries countriesFetch={countriesFetch} ></Countries>
      </Suspense>
      
    </>
  )
}

export default App
