import DashboardCard from "@/components/shared/DashboardCard";
import ActiveUsersChart from "@/components/charts/overview/ActiveUsersChart";
import SignupsTodayChart from "@/components/charts/overview/SignupsTodayChart";
import RevenueTodayChart from "@/components/charts/overview/RevenueTodayChart";

export default function OverviewPage() {
  return (
    <section className="space-y-4">
      <header className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Overview Dashboard</h1>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        <DashboardCard title="Active Users">
          <ActiveUsersChart />
        </DashboardCard>

        <DashboardCard title="Signups Today">
          <SignupsTodayChart />
        </DashboardCard>

        <DashboardCard title="Revenue Today">
          <RevenueTodayChart />
        </DashboardCard>
      </div>
    </section>
  );
}
