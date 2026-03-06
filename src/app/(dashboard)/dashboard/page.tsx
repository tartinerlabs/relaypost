import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const stats = [
  { label: "Total Posts", value: "0" },
  { label: "Scheduled", value: "0" },
  { label: "Published", value: "0" },
  { label: "Connected Accounts", value: "0" },
];

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.label}>
            <CardHeader>
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.label}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">{stat.value}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      <div>
        <h2 className="mb-4 text-lg font-semibold">Recent Activity</h2>
        <p className="text-sm text-muted-foreground">
          No recent activity. Start by connecting your social accounts and
          creating your first post.
        </p>
      </div>
    </div>
  );
}
