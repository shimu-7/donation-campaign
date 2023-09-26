
import { PieChart, Pie, Cell } from "recharts";
import { getStoredDonation } from "../../utility/localStorage";


const donated = getStoredDonation();
console.log(donated.length)

const data = [
    { name: "Group A", value: (12 - donated.length) },
    { name: "Group B", value: donated.length },

];

const COLORS = ["#16a085", "#ff4255"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
}) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text
            x={x}
            y={y}
            fill="white"
            textAnchor={x > cx ? "start" : "end"}
            dominantBaseline="central"
        >
            {`${(percent * 100).toFixed(0)}%`}
        </text>
    );
};
export default function App() {
    return (
        <div className="max-w-6xl mx-auto my-5">
            <div className="flex justify-center">
                <PieChart width={400} height={400}>
                    <Pie
                        data={data}

                        labelLine={false}
                        label={renderCustomizedLabel}
                        outerRadius={150}
                        fill="#8884d8"
                        dataKey="value"
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                </PieChart>
            </div>
            <div className="flex flex-col justify-center items-center gap-5">
                <div className="flex gap-3 justify-center items-center">
                    <h2>Your Donation</h2>
                    <div className="bg-[#ff4255] w-[50px] h-1"></div>
                </div>
                <div className="flex gap-3 justify-center items-center">
                    <h2>Total Donation</h2>
                    <div className="bg-[#16a085] w-[50px] h-1"></div>
                </div>
            </div>
        </div>
    );
}
