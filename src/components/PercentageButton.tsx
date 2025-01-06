interface percentageProps {
    percentageRate:number
}
export function PercentageButton({percentageRate}:percentageProps){
    return (
        <button className="w-[117px] h-[48px] bg-[#00474B]">{percentageRate}%</button>
    )
}