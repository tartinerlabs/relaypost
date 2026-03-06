import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function PostsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Posts</h1>
        <Button size="sm" render={<Link href="/posts/new" />}>
          New Post
        </Button>
      </div>
      <div className="flex flex-col items-center justify-center rounded-lg border border-dashed border-border py-16 text-center">
        <p className="text-sm text-muted-foreground">
          No posts yet. Create your first post to get started.
        </p>
      </div>
    </div>
  );
}
