import { useState } from "react";
import "./App.css";
import Reset from "./components/Reset";
import Form from "./components/Form";
import DataContainer from "./components/Data";
import { PercentageButton } from "./components/PercentageButton";
import buttons from "./buttons";
interface buttonObjectProp {
  id: number;
  rate: number;
  isCustom: boolean;
}
type buttonType = buttonObjectProp[];
function App() {
  const [buttonsObj, setButtonsObj] = useState<buttonType>([...buttons]);
  const [bill, setBill] = useState<number>(0);
  const [amountOfPeople, setAmountOfPeople] = useState<number>(0);
  const [percentage, setPercentage] = useState<number>(0);
  const formProps = {
    setBill,
    setAmountOfPeople,
  };
  return (
    <>
      <div className="flex flex-col md:flex-row bg-[#FFFFFF] w-[90%] min-h-[481px] md:h-[481px] rounded-[25px] md:w-[920px]">
        <div className="w-[90%] h-[100%] md:w-[50%] flex flex-col justify-evenly  pl-[25px]">
          <Form {...{ title: "Bill", ...formProps }} />
          <div className="flex flex-col ">
            <div className="text-[#5E7A7D] font-bold">Select tip</div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-[5px]">
              {buttonsObj.map((buttonObject) => {
                const buttonProps = {
                  percentageRate: buttonObject.rate,
                  id: buttonObject.id,
                  isCustom: buttonObject.isCustom,
                  percentage:percentage,
                  setButtonsObj,
                  setPercentage,
                };
                return <PercentageButton key={buttonObject.id} {...buttonProps} />;
              })}
            </div>
          </div>
          <Form {...{ title: "amount of people", ...formProps }} />
        </div>
        <div className=" flex justify-center items-center w-[90%] md:w-[50%] h-[100%]">
          <div className="flex flex-col items-center justify-evenly bg-[#00474B] w-[90%] h-[90%] rounded-[25px] px-[25px]">
            <DataContainer
              title="Tip Amount"
              amount={(bill * percentage) / 100}
            />
            <DataContainer
              title="Total Amount"
              amount={((bill * percentage) / 100) * amountOfPeople}
            />
            <Reset
              setBill={setBill}
              setPercentage={setPercentage}
              setAmountOfPeople={setAmountOfPeople}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
