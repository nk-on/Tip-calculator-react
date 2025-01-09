import items from "../buttons.ts";
interface percentageProps {
  percentageRate: number;
  id: number;
  isClicked: boolean;
  isCustom: boolean;
  setButtonsObj: React.Dispatch<
    React.SetStateAction<
      { id: number; rate: number; isClicked: boolean; isCustom: boolean }[]
    >
  >;
  setPercentage: React.Dispatch<React.SetStateAction<number>>;
}
export function PercentageButton({
  percentageRate,
  id,
  isClicked,
  isCustom,
  setButtonsObj,
  setPercentage,
}: percentageProps) {
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
          className="w-[117px] h-[48px] text-[#547878] rounded-[5px] text-[24px] bg-[#F3F9FA] font-bolder"
          onChange={(event)=>{
            const value = Number(event.target.value);
            setPercentage(value);
          }}
        />
      </form>
    );
  }
  return (
    <button
      className={`w-[117px] h-[48px] text-[#FFFFFF] font-extrabold rounded-[5px] text-[24px] ${
        isClicked ? "bg-[#26C2AE]" : "bg-[#00474B]"
      }`}
      onClick={() => {
        const updatedItems = items.map((item) => {
          if (item.id === id) {
            item.isClicked = true;
          } else {
            item.isClicked = false;
          }
          return item;
        });
        setPercentage(percentageRate);
        setButtonsObj([...updatedItems]);
      }}
    >
      {percentageRate}%
    </button>
  );
}
