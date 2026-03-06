import { EmptyState } from "@/components/dashboard/empty-state";
import { Button } from "@/components/ui/button";

export default function AccountsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">
          Connected Accounts
        </h1>
        <Button size="sm">Connect Account</Button>
      </div>
      <EmptyState message="No accounts connected. Connect your social media accounts to start publishing." />
    </div>
  );
}
