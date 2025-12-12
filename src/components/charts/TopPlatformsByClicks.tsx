import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer,
} from "recharts";
import { topPlatformsByClicks } from "../../data/mockData";

export function TopPlatformsByClicks() {
	return (
		<div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-indigo-100 hover:shadow-xl transition-shadow">
			<div className="flex items-center gap-3 mb-7">
				<div className="w-1.5 h-8 bg-gradient-to-b from-red-500 to-pink-500 rounded-full"></div>
				<h2 className="text-xl font-bold text-slate-900">
					Top Platforms by Clicks
				</h2>
			</div>
			<ResponsiveContainer width="100%" height={350}>
				<BarChart layout="vertical" data={topPlatformsByClicks}>
					<CartesianGrid strokeDasharray="3 3" />
					<XAxis type="number" />
					<YAxis type="category" dataKey="platform" width={100} />
					<Tooltip />
					<Legend />
					<Bar dataKey="clicks" fill="#ef4444" />
				</BarChart>
			</ResponsiveContainer>
		</div>
	);
}
