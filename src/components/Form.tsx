interface FormProps {
  title: string;
  setBill: React.Dispatch<React.SetStateAction<number>>;
  setAmountOfPeople: React.Dispatch<React.SetStateAction<number>>;
}
export default function Form({ title, setBill, setAmountOfPeople }: FormProps) {
  return (
    <div className="flex flex-col text-[#5E7A7D] text-[16px] font-bold">
      {title}
      <input
        type="number"
        className="bg-[#F3F9FA] w-[90%] h-[48px]"
        onChange={(event) => {
          if (title === "Bill") {
            setBill(Number(event.target.value));
            return;
          }
          setAmountOfPeople(Number(event.target.value));
        }}
      />
    </div>
  );
}
