import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Form from './components/Form';
import { PercentageButton } from './components/PercentageButton';
import buttons from './buttons';
function App() {
  return (
    <>
      <div className="flex bg-[#FFFFFF] w-[90%] h-[481px] rounded-[25px] md:w-[920px]">
        <div className="w-[50%] h-[100%] flex flex-col justify-evenly	 border border-red-500 pl-[25px]">
          <Form title={'Bill'} />
          <div className="flex flex-col ">
            Select tip
            <div className='grid grid-cols-3 gap-[5px]'>
              {buttons.map((buttonObject) => {
                return (
                  <PercentageButton
                    key={buttonObject.id}
                    percentageRate={buttonObject.rate}
                  />
                );
              })}
            </div>
          </div>
          <Form title={'Number of People'} />
        </div>
        <div className=' flex justify-center items-center w-[50%] h-[100%]'>
          <div className='bg-[#00474B] w-[90%] h-[90%] rounded-[25px]'>

          </div>
        </div>
      </div>
    </>
  );
}

export default App;
