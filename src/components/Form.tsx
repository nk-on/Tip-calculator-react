import { useState } from "react";

interface FormProps {
  title: string;
  setBill: React.Dispatch<React.SetStateAction<number>>;
  setAmountOfPeople: React.Dispatch<React.SetStateAction<number>>;
}
export default function Form({ title, setBill, setAmountOfPeople }: FormProps) {
  const [error, setError] = useState<boolean>(false);
  return (
    <div className="flex flex-col text-[#5E7A7D] text-[16px] font-bold">
      <div className="flex justify-between w-[90%]">
        <div>{title}</div>
        {error && <div className="text-[#FF0000]">Error</div>}
      </div>
      <input
        type="number"
        className={`bg-[#F3F9FA] w-[90%] h-[48px] ${
          error && "border border-red-500"
        }`}
        onChange={(event) => {
          const value = Number(event.target.value);
          if (value <= 0) {
            setError(true);
            event.target.value = "";
            return;
          }
          if (title === "Bill") {
            setBill(value);
            setError(false);
            return;
          }
          setError(false);
          setAmountOfPeople(value);
        }}
      />
    </div>
  );
}
