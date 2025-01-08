import { useRef, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Form from './components/Form';
import DataContainer from './components/Data';
import { PercentageButton } from './components/PercentageButton';
import buttons from './buttons';
function App() {
  const [buttonsObj,setButtonsObj] = useState([...buttons])
  const [bill,setBill] = useState(0);
  const [amountOfPeople,setAmountOfPeople] = useState(0);
  const [percentage,setPercentage] = useState(0);
  return (
    <>
      <div className="flex flex-col md:flex-row bg-[#FFFFFF] w-[90%] h-[481px] rounded-[25px] md:w-[920px]">
        <div className="w-[90%] h-[100%] md:w-[50%] flex flex-col justify-evenly  pl-[25px]">
          <Form title={'Bill'} setBill = {setBill} setAmountOfPeople = {setAmountOfPeople}/>
          <div className="flex flex-col ">
            <div className='text-[#5E7A7D] font-bold'>
              Select tip
            </div>
            <div className='grid grid-cols-2 md:grid-cols-3 gap-[5px]'>
              {buttonsObj.map((buttonObject) => {
                return (
                  <PercentageButton
                    key={buttonObject.id}
                    percentageRate={buttonObject.rate}
                    id = {buttonObject.id}
                    isClicked = {buttonObject.isClicked}
                    setButtonsObj = {setButtonsObj}
                    setPercentage = {setPercentage}
                  />
                );
              })}
            </div>
          </div>
          <Form title={'Number of People'} setBill = {setBill} setAmountOfPeople = {setAmountOfPeople}/>
        </div>
        <div className=' flex justify-center items-center w-[50%] h-[100%]'>
          <div className='bg-[#00474B] w-[90%] h-[90%] rounded-[25px]'>
            <DataContainer title='Tip Amount' amount = {(bill*percentage)/100}/>
            <DataContainer title='Total Amount' amount = {((bill*percentage)/100)*amountOfPeople} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
