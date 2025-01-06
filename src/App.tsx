import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Form from './components/Form';
import { PercentageButton } from './components/PercentageButton';
import  buttons from './buttons'
function App() {
  return (
    <>
      <div className="bg-[#FFFFFF] w-[90%] h-[481px] rounded-[25px] md:w-[920px]">
        <div className="w-[50%] h-[100%] border border-red-500">
          <Form title={"Bill"}/>
          <div>
             {buttons.map((buttonObject)=>{
              return <PercentageButton key = {buttonObject.id} percentageRate={buttonObject.rate}/>
             })}
          </div>
          <Form title={"Number of People"}/>
        </div>
      </div>
    </>
  );
}

export default App;
