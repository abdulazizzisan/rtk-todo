"use client";
import { CheckCheck, Moon, NotepadText, Plus, Sun } from "lucide-react";

import { Dock, DockIcon, DockItem, DockLabel } from "@/components/ui/dock";
import { useTheme } from "next-themes";
import Link from "next/link";
import { hr } from "date-fns/locale";

export function AppDock() {
  const { setTheme, theme } = useTheme();
  const data = [
    {
      title: "Add Todo",
      icon: (
        <Plus className="h-full w-full text-neutral-600 dark:text-neutral-300" />
      ),
      href: "/add-todo",
    },
    {
      title: "Todos",
      icon: (
        <NotepadText className="h-full w-full text-neutral-600 dark:text-neutral-300" />
      ),
      href: "/",
    },
    {
      title: "Completed",
      icon: (
        <CheckCheck className="h-full w-full text-neutral-600 dark:text-neutral-300" />
      ),
      href: "/completed-todos",
    },
    {
      title: theme === "dark" ? "Light" : "Dark",
      icon: (
        <>
          <Moon className="block h-full w-full text-neutral-600 dark:hidden dark:text-neutral-300" />
          <Sun className="hidden h-full w-full text-neutral-600 dark:block dark:text-neutral-300" />
        </>
      ),
    },
  ];
  return (
    <div className="fixed bottom-2 left-1/2 z-50 max-w-full -translate-x-1/2">
      <Dock className="items-end pb-3">
        {data.map((item, idx) => (
          <DockItem
            key={idx}
            className="aspect-square rounded-full bg-gray-200 dark:bg-neutral-800"
          >
            <DockLabel>{item.title}</DockLabel>
            <DockIcon>
              {(item.title === "Light" || item.title === "Dark") && (
                <button
                  className="h-full w-full"
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                >
                  {item.icon}
                </button>
              )}
              {item.title !== "Light" &&
                item.title !== "Dark" &&
                item.href !== undefined && (
                  <Link className="h-full w-full" href={item.href}>
                    {item.icon}
                  </Link>
                )}
              {item.title !== "Light" &&
                item.title !== "Dark" &&
                item.href === undefined &&
                item.icon}
            </DockIcon>
          </DockItem>
        ))}
      </Dock>
    </div>
  );
}
