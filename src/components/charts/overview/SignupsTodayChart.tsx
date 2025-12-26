import { useQuery } from "@tanstack/react-query";
import { fetchSignupsToday, type SignupsResponse } from "@/api/overviewApi";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import ErrorFallback from "@/components/shared/ErrorFallback";

export default function SignupsTodayChart() {
    const { data, isLoading, isError, error, refetch, isFetching } = useQuery<SignupsResponse>({
        queryKey: ["dashboard", "signupsToday"],
        queryFn: fetchSignupsToday,
    });

    const chartData = data ? [{ name: "Signups Today", value: data.signupsToday }] : [];

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
                    <Bar dataKey="value" fill="#16a34a" />
                </BarChart>
            </ResponsiveContainer>
            {isFetching && <p className="text-xs text-gray-500">Refreshing...</p>}
        </div>
    );
}
