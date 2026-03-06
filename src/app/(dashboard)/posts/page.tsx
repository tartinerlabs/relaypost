import Link from "next/link";
import { EmptyState } from "@/components/dashboard/empty-state";
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
      <EmptyState message="No posts yet. Create your first post to get started." />
    </div>
  );
}
