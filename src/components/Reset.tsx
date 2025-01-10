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
export default function Reset({
  setBill,
  setPercentage,
  setAmountOfPeople,
}: FormProps) {
  return (
    <button
      onClick={() => {
        setBill(0);
        setPercentage(0);
        setAmountOfPeople(0);
      }}
      className="bg-[#26C2AE] w-[80%] h-[48px]"
    >
      Reset
    </button>
  );
}
