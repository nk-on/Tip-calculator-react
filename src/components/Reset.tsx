interface FormProps {
  setBill: React.Dispatch<React.SetStateAction<number>>;
  setPercentage: React.Dispatch<React.SetStateAction<number>>;
  setAmountOfPeople: React.Dispatch<React.SetStateAction<number>>;
  setButtonsObj: React.Dispatch<
    React.SetStateAction<
      { id: number; rate: number; isClicked: boolean; isCustom: boolean }[]
    >
  >;
}
import items from "../buttons";
export default function Reset({
  setBill,
  setPercentage,
  setAmountOfPeople,
  setButtonsObj
}: FormProps) {
  return (
    <button
      onClick={() => {
        setBill(0);
        setPercentage(0);
        setAmountOfPeople(0);
        const updatedItems = items.map((item)=>{
            item.isClicked = false;
            return item;
        })
        setButtonsObj([...updatedItems]);
      }}
      className="bg-[#26C2AE] w-[80%] h-[48px]"
    >
      Reset
    </button>
  );
}
