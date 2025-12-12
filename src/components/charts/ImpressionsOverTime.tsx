import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer,
} from "recharts";
import { impressionsOverTime } from "../../data/mockData";

export function ImpressionsOverTime() {
	return (
		<div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-indigo-100 hover:shadow-xl transition-shadow">
			<div className="flex items-center gap-3 mb-7">
				<div className="w-1.5 h-8 bg-gradient-to-b from-green-500 to-emerald-500 rounded-full"></div>
				<h2 className="text-xl font-bold text-slate-900">
					Impressions Over Time
				</h2>
			</div>
			<ResponsiveContainer width="100%" height={350}>
				<LineChart data={impressionsOverTime}>
					<CartesianGrid strokeDasharray="3 3" />
					<XAxis dataKey="date" />
					<YAxis />
					<Tooltip />
					<Legend />
					<Line
						type="monotone"
						dataKey="impressions"
						stroke="#10b981"
						strokeWidth={2}
					/>
				</LineChart>
			</ResponsiveContainer>
		</div>
	);
}
