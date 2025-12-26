import DashboardCard from "@/components/shared/DashboardCard";
import ApiLatencyChart from "@/components/charts/ops/ApiLatencyChart";
import ErrorRateChart from "@/components/charts/ops/ErrorRateChart";


export default function OpsPage() {
  return (
    <section className="space-y-6">
      <header>
        <h1 className="text-xl font-semibold">Ops Dashboard</h1>
        <p className="text-sm text-gray-600">
          System health and operational metrics
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <DashboardCard title="API Latency">
          <ApiLatencyChart />
        </DashboardCard>

        <DashboardCard title="Error Rate">
          <ErrorRateChart />
        </DashboardCard>
      </div>
    </section>
  );
}
