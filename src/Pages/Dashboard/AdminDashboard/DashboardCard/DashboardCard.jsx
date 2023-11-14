
function DashboardCard({ item }) {
    const { name, progress, icon, countNum } = item;
    // const bgCondition = color === "red" ? "#FF00341A" : color === "green" ? "#7BB13C1A" : "#FFBC341A"
    return (
        <div className="p-6 bg-white rounded-md shadow-md">
            <div className="w-[60%]">
                <div className="flex items-center gap-8">
                    {icon}
                    <h1 className="text-3xl">{countNum}</h1>
                </div>
                {progress}
                <p className="text-xl mt-3">{name}</p>
            </div>
        </div>
    )
}

export default DashboardCard
