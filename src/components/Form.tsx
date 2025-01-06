interface FormProps {
    title:String
}
export default function Form({title}:FormProps){
    return (
        <div className="flex flex-col text-[#5E7A7D] text-[16px] font-bold">
            {title}
            <input type="number" className="bg-[#F3F9FA] w-[90%] h-[48px]" />
        </div>
    )
}