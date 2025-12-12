import { BarChart3, TrendingUp, Users, Eye } from "lucide-react";
import { EngagementByPlatform } from "./charts/EngagementByPlatform";
import { ImpressionsOverTime } from "./charts/ImpressionsOverTime";
import { EngagementRateTrend } from "./charts/EngagementRateTrend";
import { TopPerformingPosts } from "./charts/TopPerformingPosts";
import { FollowerGrowthChart } from "./charts/FollowerGrowthChart";
// import { EngagementBreakdown } from "./charts/EngagementBreakdown";
// import { PlatformImpressionsShare } from "./charts/PlatformImpressionsShare";
// import { ProfileComparison } from "./charts/ProfileComparison";
// import { ReachVsImpressions } from "./charts/ReachVsImpressions";
// import { TopPlatformsByClicks } from "./charts/TopPlatformsByClicks";

export function Dashboard() {
	return (
		<div className="min-h-screen bg-linear-to-br from-indigo-50 via-white to-purple-50">
			{/* Header */}
			<header className="bg-white/80 backdrop-blur-md border-b border-indigo-100 sticky top-0 z-50 shadow-sm">
				<div className="mx-auto p-8">
					<div className="flex items-center justify-between">
						<div className="flex items-center gap-4">
							<div className="p-3 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl shadow-lg">
								<BarChart3 className="w-6 h-6 text-white" />
							</div>
							<div>
								<h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
									Analytics Dashboard
								</h1>
								<p className="text-xs text-slate-500 mt-1">
									Real-time social media insights
								</p>
							</div>
						</div>
						<div className="text-right">
							<div className="text-xs font-bold text-indigo-600 tracking-widest uppercase">
								LIVE
							</div>
							<div className="text-sm text-slate-600 mt-1">
								Last updated: Today
							</div>
						</div>
					</div>
				</div>
			</header>

			{/* Time Period Notice */}
			<section className="max-w-7xl mx-auto px-8 pt-8 pb-4">
				<div className="bg-indigo-50/50 border border-indigo-200 rounded-lg p-4">
					<p className="text-sm font-medium text-indigo-900">
						📊 Showing analytics for the{" "}
						<span className="font-bold">last one month</span>
					</p>
				</div>
			</section>

			{/* KPI Cards */}
			<section className="max-w-7xl mx-auto px-8 py-12">
				<div className="mb-4">
					<h2 className="text-xl font-bold text-slate-900">
						Key Performance Indicators
					</h2>
					<p className="text-sm text-slate-600 mt-1">
						Track your most important metrics
					</p>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
					<KPICard
						icon={<TrendingUp className="w-6 h-6" />}
						label="Total Engagement"
						value="71,400"
						change="+12.5%"
						color="from-blue-500 to-cyan-500"
					/>
					<KPICard
						icon={<Eye className="w-6 h-6" />}
						label="Total Impressions"
						value="682.8K"
						change="+8.2%"
						color="from-green-500 to-emerald-500"
					/>
					<KPICard
						icon={<Users className="w-6 h-6" />}
						label="Total Followers"
						value="65,200"
						change="+30.2%"
						color="from-purple-500 to-pink-500"
					/>
					<KPICard
						icon={<BarChart3 className="w-6 h-6" />}
						label="Avg Engagement Rate"
						value="5.8%"
						change="+0.3%"
						color="from-orange-500 to-red-500"
					/>
				</div>
			</section>

			{/* Charts Grid */}
			<section className="max-w-7xl mx-auto px-8 pb-20">
				<div className="mb-8">
					<h2 className="text-xl font-bold text-slate-900">
						Performance Metrics
					</h2>
					<p className="text-sm text-slate-600 mt-1">
						Comprehensive analytics across all platforms
					</p>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
					<EngagementByPlatform />
					<ImpressionsOverTime />
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
					<EngagementRateTrend />
					<FollowerGrowthChart />
				</div>

				<div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-indigo-100 mb-8">
					<TopPerformingPosts />
				</div>

				{/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
					<EngagementBreakdown />
					<PlatformImpressionsShare />
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
					<ReachVsImpressions />
					<TopPlatformsByClicks />
				</div> */}

				{/* <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-indigo-100">
					<ProfileComparison />
				</div> */}
			</section>
		</div>
	);
}

function KPICard({
	icon,
	label,
	value,
	change,
	color,
}: {
	icon: React.ReactNode;
	label: string;
	value: string;
	change: string;
	color: string;
}) {
	const isPositive = change.startsWith("+");

	return (
		<div className="group relative bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-indigo-100 p-8 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">
			<div>
				<div className="flex items-start justify-between mb-5">
					<div>
						<p className="text-xs font-bold text-slate-500 uppercase tracking-widest">
							{label}
						</p>
					</div>
					<div
						className={`p-3 bg-gradient-to-br ${color} rounded-xl shadow-lg text-white`}
					>
						{icon}
					</div>
				</div>

				<div className="text-4xl font-bold text-slate-900 mb-4">
					{value}
				</div>

				<div
					className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-semibold ${
						isPositive
							? "bg-green-100/80 text-green-700"
							: "bg-red-100/80 text-red-700"
					}`}
				>
					<span>{isPositive ? "↑" : "↓"}</span>
					<span>{change}</span>
					<span className="text-xs font-normal text-slate-600">
						vs last period
					</span>
				</div>
			</div>
		</div>
	);
}
