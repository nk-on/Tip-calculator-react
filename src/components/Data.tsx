interface DataProps {
    title:string,
    amount:number
}
export default function DataContainer({title,amount}:DataProps){
    return (<div className="flex justify-evenly items-center w-[100%] py-[10px] pt-[40px]">
        <div className="w-[80%]">
            <h1 className="text-[#fff]">{title}</h1>
            <p className="text-[#7F9D9F]">/ Person</p>
        </div>
        <div className="text-[#26C2AE] text-[48px] font-bold">
            {amount}
        </div>
    </div>);
}