interface DataProps {
    title:string,
    amount:number
}
export default function DataContainer({title,amount}:DataProps){
    return (<div className="flex justify-evenly w-[100%]">
        <div>
            <h1 className="text-[#fff]">{title}</h1>
        </div>
        <div className="text-[#26C2AE]">
            {amount}
        </div>
    </div>);
}