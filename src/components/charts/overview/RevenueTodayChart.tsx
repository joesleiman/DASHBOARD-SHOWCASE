import { useQuery } from "@tanstack/react-query";
import { fetchRevenueToday, type RevenueResponse } from "@/api/overviewApi";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import ErrorFallback from "@/components/shared/ErrorFallback";

export default function RevenueTodayChart() {
    const { data, isLoading, isError, error, refetch, isFetching } = useQuery<RevenueResponse>({
        queryKey: ["dashboard", "revenueToday"],
        queryFn: fetchRevenueToday,
    });

    const chartData = data ? [{ name: "Revenue Today", value: data.revenueToday }] : [];

    if (isLoading) return <div>Loading...</div>;
    if (isError) {
        return (
            <ErrorFallback
                message={(error as Error).message}
                onRetry={() => refetch()} />
        );
    }

    return (
        <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip formatter={(value: number | undefined) => (value !== undefined ? `$${value}` : "")} />
                    <Bar dataKey="value" fill="#facc15" />
                </BarChart>
            </ResponsiveContainer>
            {isFetching && <p className="text-xs text-gray-500">Refreshing...</p>}
        </div>
    );
}
