"use client";

import { Menu01Icon, PlusSignIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Topbar({ onToggleSidebar }: { onToggleSidebar: () => void }) {
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-border bg-background px-4 lg:px-6">
      <div className="flex items-center gap-3">
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
          onClick={onToggleSidebar}
        >
          <HugeiconsIcon icon={Menu01Icon} size={20} />
        </Button>
      </div>
      <div className="flex items-center gap-3">
        <Button size="sm" render={<Link href="/posts/new" />}>
          <HugeiconsIcon
            icon={PlusSignIcon}
            size={16}
            data-icon="inline-start"
          />
          New Post
        </Button>
        <div className="flex size-8 items-center justify-center rounded-full bg-muted text-xs font-medium">
          U
        </div>
      </div>
    </header>
  );
}
