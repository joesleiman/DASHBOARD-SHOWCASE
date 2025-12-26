import { useQuery } from "@tanstack/react-query";
import { fetchApiLatency } from "@/api/opsApi";
import {
    ResponsiveContainer,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
} from "recharts";
import ErrorFallback from "@/components/shared/ErrorFallback";

export default function ApiLatencyChart() {
    const { data, isLoading, isError, error, refetch, isFetching } = useQuery({
        queryKey: ["ops", "apiLatency"],
        queryFn: fetchApiLatency,
    });

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return (
            <ErrorFallback
                message={(error as Error).message}
                onRetry={() => refetch()}
            />
        );
    }

    if (!data) {
        return null;
    }

    const chartData = [
        {
            name: "Latency",
            value: data.apiLatencyMs,
        },
    ];

    return (
        <div className="space-y-2">
            <div className="h-48">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={chartData}>
                        <XAxis dataKey="name" />
                        <YAxis unit="ms" />
                        <Tooltip
                            formatter={(value: number | undefined) =>
                                value !== undefined ? `${value} ms` : ""
                            }
                        />
                        <Bar dataKey="value" />
                    </BarChart>
                </ResponsiveContainer>
            </div>

            <div className="text-xs text-gray-500 text-right">
                Last updated: {new Date(data.timestamp).toLocaleTimeString()}
                {isFetching ? " (refreshing…)" : ""}
            </div>
        </div>
    );
}
