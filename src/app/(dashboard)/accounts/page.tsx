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
      <div className="flex flex-col items-center justify-center rounded-lg border border-dashed border-border py-16 text-center">
        <p className="text-sm text-muted-foreground">
          No accounts connected. Connect your social media accounts to start
          publishing.
        </p>
      </div>
    </div>
  );
}
