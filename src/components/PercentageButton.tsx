import { useState } from "react";

interface percentageProps {
  percentageRate: number;
  isCustom: boolean;
  percentage: number;
  setPercentage: React.Dispatch<React.SetStateAction<number>>;
}
export function PercentageButton({
  percentageRate,
  isCustom,
  percentage,
  setPercentage,
}: percentageProps) {
  const [error,setError] = useState(false);
  /* 1. when user clicks on percentage rate it should be green untill user clicks on another button and this other button
    should become green
    2.add all buttons in button object isClicked false if id === button propsid then change it to trues
    */
  if (isCustom) {
    return (
      <form>
        <input
          type="number"
          placeholder="Custom"
          className={`w-[117px] h-[48px] text-[#547878] rounded-[5px] text-[24px] bg-[#F3F9FA] font-bolder ${
            error && "border border-red-500"
          }`}
          onChange={(event) => {
            const value = Number(event.target.value);
            if(value <= 0){
              setError(true);
              event.target.value = ''
              return;
            }
            setError(false);
            setPercentage(value);
          }}
        />
      </form>
    );
  }
  return (
    <button
      className={`w-[117px] h-[48px] text-[#FFFFFF] font-extrabold rounded-[5px] text-[24px] ${
        percentage === percentageRate ? "bg-[#26C2AE]" : "bg-[#00474B]"
      }`}
      onClick={() => {
        setPercentage(percentageRate);
      }}
    >
      {percentageRate}%
    </button>
  );
}
