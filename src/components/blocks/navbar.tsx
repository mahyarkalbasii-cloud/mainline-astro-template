import { useState, useEffect } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const ITEMS = [
  { label: "خانه", href: "/" },
  { label: "چگونه کار می‌کند", href: "/#how-it-works" },
  { label: "مراحل استفاده", href: "/#usage-steps" },
  {
    label: "چه کسانی از پرشین‌سازه استفاده می‌کنند",
    href: "/#who-uses",
  },
  { label: "تعرفه‌ها", href: "/#pricing" },
  { label: "درباره ما", href: "/about" },
  { label: "وبلاگ", href: "/blog" },
];

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [pathname, setPathname] = useState("");

  useEffect(() => {
    setPathname(window.location.pathname);
  }, []);

  return (
    <header
      dir="rtl"
      className={cn(
        "bg-background/80 fixed top-4 left-1/2 z-50 w-[min(94%,1200px)] -translate-x-1/2 rounded-3xl border backdrop-blur-md",
      )}
    >
      <div className="flex items-center justify-between px-5 py-3 lg:px-6">
        <a href="/" className="text-base font-semibold tracking-tight">
          پرشین‌سازه
        </a>

        <nav className="hidden items-center gap-5 lg:flex">
          {ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-opacity hover:opacity-70",
                pathname === item.href && "text-muted-foreground",
              )}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button size="sm" asChild>
            <a href="/contact">درخواست دمو</a>
          </Button>

          <button
            className="text-muted-foreground relative flex size-8 lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="sr-only">باز کردن منو</span>
            <div className="absolute top-1/2 left-1/2 block w-[18px] -translate-x-1/2 -translate-y-1/2">
              <span
                aria-hidden="true"
                className={`absolute block h-0.5 w-full rounded-full bg-current transition duration-500 ease-in-out ${isMenuOpen ? "rotate-45" : "-translate-y-1.5"}`}
              ></span>
              <span
                aria-hidden="true"
                className={`absolute block h-0.5 w-full rounded-full bg-current transition duration-500 ease-in-out ${isMenuOpen ? "opacity-0" : ""}`}
              ></span>
              <span
                aria-hidden="true"
                className={`absolute block h-0.5 w-full rounded-full bg-current transition duration-500 ease-in-out ${isMenuOpen ? "-rotate-45" : "translate-y-1.5"}`}
              ></span>
            </div>
          </button>
        </div>
      </div>

      <div
        className={cn(
          "bg-background absolute inset-x-0 top-[calc(100%+0.5rem)] rounded-2xl border p-5 transition-all duration-300 ease-in-out lg:hidden",
          isMenuOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-4 opacity-0",
        )}
      >
        <nav className="flex flex-col gap-4 text-right">
          {ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <Button className="mt-2" asChild>
            <a href="/contact">تماس / درخواست دمو</a>
          </Button>
        </nav>
      </div>
    </header>
  );
};
