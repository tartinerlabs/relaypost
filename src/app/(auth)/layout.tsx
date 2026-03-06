export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col items-center justify-center gap-6 p-6 md:p-10">
        <div className="w-full max-w-sm">{children}</div>
      </div>
      <div className="relative hidden bg-muted lg:block">
        <div className="flex h-full flex-col items-center justify-center gap-4 p-10">
          <h2 className="text-3xl font-bold tracking-tight">Relaypost</h2>
          <p className="max-w-md text-center text-muted-foreground">
            Compose once, publish everywhere. Schedule and publish to Twitter/X,
            LinkedIn, Bluesky, and Threads from a single dashboard.
          </p>
        </div>
      </div>
    </div>
  );
}
