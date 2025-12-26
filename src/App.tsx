import { NavLink, Route, Routes, Navigate } from "react-router-dom";
import OverviewPage from "./pages/OverviewPage";
import OpsPage from "./pages/OpsPage";

interface TabLinkProps {
  to: string;
  label: string;
}

function TabLink({ to, label }: TabLinkProps) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        [
          "rounded-lg px-3 py-1.5 text-sm border",
          isActive ? "bg-black text-white border-black" : "hover:bg-gray-50",
        ].join(" ")
      }
    >
      {label}
    </NavLink>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <div className="px-6 py-6 space-y-6">
        <header className="space-y-3">
          <h1 className="text-2xl font-bold">Dashboard Showcase</h1>
          <p className="text-gray-600">
            Two pages. Independent queries. Cached data when you navigate back.
          </p>

          <nav className="flex gap-2">
            <TabLink to="/dashboards/overview" label="Overview" />
            <TabLink to="/dashboards/ops" label="Ops" />
          </nav>
        </header>

        <main className="space-y-6">
          <Routes>
            <Route path="/" element={<Navigate to="/dashboards/overview" replace />} />
            <Route path="/dashboards/overview" element={<OverviewPage />} />
            <Route path="/dashboards/ops" element={<OpsPage />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}
