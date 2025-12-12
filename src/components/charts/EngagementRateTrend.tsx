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
import { engagementRateTrend } from "../../data/mockData";

export function EngagementRateTrend() {
	return (
		<div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-indigo-100 hover:shadow-xl transition-shadow">
			<div className="flex items-center gap-3 mb-7">
				<div className="w-1.5 h-8 bg-gradient-to-b from-amber-500 to-orange-500 rounded-full"></div>
				<h2 className="text-xl font-bold text-slate-900">
					Engagement Rate Trend
				</h2>
			</div>
			<ResponsiveContainer width="100%" height={350}>
				<LineChart data={engagementRateTrend}>
					<CartesianGrid strokeDasharray="3 3" />
					<XAxis dataKey="period" />
					<YAxis />
					<Tooltip />
					<Legend />
					<Line
						type="monotone"
						dataKey="rate"
						stroke="#f59e0b"
						strokeWidth={2}
						name="Engagement Rate (%)"
					/>
				</LineChart>
			</ResponsiveContainer>
		</div>
	);
}
