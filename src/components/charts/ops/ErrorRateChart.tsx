import { useQuery } from "@tanstack/react-query";
import { fetchErrorRate, type ErrorRateResponse } from "@/api/opsApi";
import ErrorFallback from "@/components/shared/ErrorFallback";

export default function ErrorRateChart() {
    const { data, isLoading, isError, error, refetch, isFetching } =
        useQuery<ErrorRateResponse>({
            queryKey: ["ops", "errorRate"],
            queryFn: fetchErrorRate,
            staleTime: 30_000,            // fresh for 30s
            refetchInterval: 30_000,      // poll every 30s
            refetchOnWindowFocus: false,
        });

    if (isLoading) return <div>Loading...</div>;

    if (isError) {
        return (
            <ErrorFallback
                message={(error as Error).message}
                onRetry={() => refetch()}
            />
        );
    }

    if (!data) return null; // required because we access data.timestamp

    return (
        <div className="space-y-2">
            <p className="text-3xl font-semibold text-red-600">
                {data.errorRate}%
            </p>

            <p className="text-xs text-gray-500">
                Last updated: {new Date(data.timestamp).toLocaleTimeString()}
            </p>

            {isFetching && (
                <p className="text-xs text-gray-400">Refreshing...</p>
            )}
        </div>
    );
}
