import { useQuery } from "@tanstack/react-query";
import { fetchAlwaysFailingMetric } from "@/api/overviewApi";
import ErrorFallback from "@/components/shared/ErrorFallback";

export default function AlwaysFailChart() {
    const { isLoading, isError, error, refetch } =
        useQuery({
            queryKey: ["dashboard", "alwaysFail"],
            queryFn: fetchAlwaysFailingMetric,
            retry: false, // optional: keep it failed until user clicks Retry
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

    // This path won’t happen if forceFail is always true,
    // but keeping it makes the component complete.
    return (
        <div className="h-64 flex items-center justify-center text-sm text-gray-600">
            Unexpected success
        </div>
    );
}
