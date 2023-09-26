import { PieChart, Pie, Cell } from "recharts";

const Chart = ({data, renderCustomizedLabel}) => {
    return (
        <PieChart width={1000} height={1000}>
            <Pie
                data={data}
                cx={600}
                cy={200}
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
    );
};

export default PieChart;