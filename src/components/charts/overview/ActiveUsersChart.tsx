import { useQuery } from "@tanstack/react-query";
import { fetchActiveUsers, type ActiveUsersResponse } from "@/api/overviewApi";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import ErrorFallback from "@/components/shared/ErrorFallback";

export default function ActiveUsersChart() {
  const { data, isLoading, isError, error, refetch, isFetching } = useQuery<ActiveUsersResponse>({
    queryKey: ["dashboard", "activeUsers"],
    queryFn: fetchActiveUsers,
  });

  const chartData = data ? [{ name: "Active Users", value: data.activeUsers }] : [];

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
          <Tooltip />
          <Bar dataKey="value" fill="#4f46e5" />
        </BarChart>
      </ResponsiveContainer>
      {isFetching && <p className="text-xs text-gray-500">Refreshing...</p>}
    </div>
  );
}
