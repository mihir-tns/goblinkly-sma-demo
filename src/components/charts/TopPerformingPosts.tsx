import { topPerformingPosts } from "../../data/mockData";

export function TopPerformingPosts() {
	return (
		<div>
			<div className="flex items-center gap-3 mb-7">
				<div className="w-1.5 h-8 bg-gradient-to-b from-cyan-500 to-blue-500 rounded-full"></div>
				<h2 className="text-xl font-bold text-slate-900">
					Top Performing Posts
				</h2>
			</div>
			<div className="overflow-x-auto">
				<table className="w-full text-sm">
					<thead>
						<tr className="border-b border-slate-200 bg-slate-50/50">
							<th className="text-left py-4 px-4 font-semibold text-slate-700">
								Post Title
							</th>
							<th className="text-right py-4 px-4 font-semibold text-slate-700">
								Engagement
							</th>
							<th className="text-right py-4 px-4 font-semibold text-slate-700">
								Impressions
							</th>
						</tr>
					</thead>
					<tbody>
						{topPerformingPosts.map((post) => (
							<tr
								key={post.id}
								className="border-b border-slate-100 hover:bg-indigo-50/50 transition duration-200"
							>
								<td className="py-4 px-4 text-slate-700 font-medium">
									{post.title}
								</td>
								<td className="text-right py-4 px-4 text-indigo-600 font-bold">
									{post.engagement.toLocaleString()}
								</td>
								<td className="text-right py-4 px-4 text-emerald-600 font-bold">
									{post.impressions.toLocaleString()}
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
}
