export function Footer() {
  const navigation = [
    { name: "خانه", href: "/" },
    { name: "چگونه کار می‌کند", href: "/#how-it-works" },
    { name: "مراحل استفاده", href: "/#usage-steps" },
    { name: "تعرفه‌ها", href: "/#pricing" },
    { name: "سؤالات پرتکرار", href: "/#faq" },
    { name: "تماس / درخواست دمو", href: "/contact" },
  ];

  return (
    <footer dir="rtl" className="border-t py-12">
      <div className="container space-y-8">
        <div className="space-y-2 text-right">
          <p className="text-lg font-semibold">پرشین‌سازه</p>
          <p className="text-muted-foreground text-sm leading-7">
            سیستم فروش هدفمند به پروژه‌های ساختمانی در حال ساخت
          </p>
        </div>

        <nav>
          <ul className="flex flex-wrap justify-end gap-x-6 gap-y-3">
            {navigation.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="text-sm font-medium transition-opacity hover:opacity-70"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <p className="text-muted-foreground text-right text-xs">
          © {new Date().getFullYear()} پرشین‌سازه. تمامی حقوق محفوظ است.
        </p>
      </div>
    </footer>
  );
}
