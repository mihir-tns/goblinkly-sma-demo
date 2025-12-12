import {
	PieChart,
	Pie,
	Cell,
	Legend,
	Tooltip,
	ResponsiveContainer,
} from "recharts";
import { engagementBreakdown } from "../../data/mockData";

const COLORS = ["#3b82f6", "#ef4444", "#10b981", "#f59e0b"];

export function EngagementBreakdown() {
	return (
		<div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-indigo-100 hover:shadow-xl transition-shadow">
			<div className="flex items-center gap-3 mb-7">
				<div className="w-1.5 h-8 bg-gradient-to-b from-rose-500 to-orange-500 rounded-full"></div>
				<h2 className="text-xl font-bold text-slate-900">
					Engagement Breakdown
				</h2>
			</div>
			<ResponsiveContainer width="100%" height={350}>
				<PieChart>
					<Pie
						data={engagementBreakdown}
						cx="50%"
						cy="50%"
						labelLine={false}
						label={({ name, value }) =>
							`${name}: ${value.toLocaleString()}`
						}
						outerRadius={100}
						fill="#8884d8"
						dataKey="value"
					>
						{engagementBreakdown.map((entry, index) => (
							<Cell
								key={`cell-${index}`}
								fill={COLORS[index % COLORS.length]}
							/>
						))}
					</Pie>
					<Tooltip formatter={(value) => value.toLocaleString()} />
					<Legend />
				</PieChart>
			</ResponsiveContainer>
		</div>
	);
}
