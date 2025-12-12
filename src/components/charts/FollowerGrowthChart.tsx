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
import { followerGrowth } from "../../data/mockData";

export function FollowerGrowthChart() {
	return (
		<div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-indigo-100 hover:shadow-xl transition-shadow">
			<div className="flex items-center gap-3 mb-7">
				<div className="w-1.5 h-8 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></div>
				<h2 className="text-xl font-bold text-slate-900">
					Follower Growth Over Time
				</h2>
			</div>
			<ResponsiveContainer width="100%" height={350}>
				<LineChart data={followerGrowth}>
					<CartesianGrid strokeDasharray="3 3" />
					<XAxis dataKey="date" />
					<YAxis />
					<Tooltip />
					<Legend />
					<Line
						type="monotone"
						dataKey="followers"
						stroke="#8b5cf6"
						strokeWidth={2}
						name="Followers"
					/>
				</LineChart>
			</ResponsiveContainer>
		</div>
	);
}
