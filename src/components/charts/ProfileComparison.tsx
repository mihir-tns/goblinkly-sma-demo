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
import { profileComparison } from "../../data/mockData";

export function ProfileComparison() {
	return (
		<div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-indigo-100 hover:shadow-xl transition-shadow">
			<div className="flex items-center gap-3 mb-7">
				<div className="w-1.5 h-8 bg-gradient-to-b from-teal-500 to-green-500 rounded-full"></div>
				<h2 className="text-xl font-bold text-slate-900">
					Profile Comparison
				</h2>
			</div>
			<ResponsiveContainer width="100%" height={350}>
				<BarChart data={profileComparison}>
					<CartesianGrid strokeDasharray="3 3" />
					<XAxis dataKey="profile" />
					<YAxis />
					<Tooltip />
					<Legend />
					<Bar dataKey="engagement" fill="#3b82f6" />
					<Bar dataKey="reach" fill="#10b981" />
				</BarChart>
			</ResponsiveContainer>
		</div>
	);
}
