import Image from "next/image";

const navigation = [
  { href: "#history", label: "О ресторане" },
  { href: "#menu", label: "Меню" },
  { href: "#delivery", label: "Доставка и оплата" },
  { href: "#contacts", label: "Контакты" },
];

export function Header() {
  return (
    <header className="relative z-30 mx-auto flex h-[84px] w-[calc(100%-48px)] max-w-[1200px] items-center justify-between lg:w-[calc(100%-80px)]">
      <a
        href="#top"
        aria-label="AQUARIM — на главную"
        className="font-oceanic text-[22px] leading-none font-normal text-[#E8EDFF] transition-opacity hover:opacity-80 lg:text-[24px]"
      >
        AQUARIM
      </a>

      <nav aria-label="Основная навигация" className="hidden items-center gap-[clamp(20px,3.1vw,48px)] md:flex">
        {navigation.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="whitespace-nowrap text-[13px] leading-none transition-opacity hover:opacity-65 lg:text-[14px]"
          >
            {item.label}
          </a>
        ))}
      </nav>

      <a
        href="#menu"
        aria-label="Перейти в меню"
        className="hidden h-[36px] w-[36px] items-center justify-center transition-opacity hover:opacity-70 md:flex"
      >
        <Image src="/icons/cart.svg" alt="" width={28} height={28} />
      </a>

      <details className="group relative md:hidden">
        <summary
          aria-label="Открыть меню навигации"
          className="flex h-10 w-10 cursor-pointer list-none items-center justify-center border border-[#496192] text-[#E8EDFF] [&::-webkit-details-marker]:hidden"
        >
          <span className="flex flex-col gap-[5px] group-open:gap-0">
            <span className="h-[1px] w-5 bg-[#E8EDFF] transition-transform group-open:translate-y-[1px] group-open:rotate-45" />
            <span className="h-[1px] w-5 bg-[#E8EDFF] group-open:hidden" />
            <span className="h-[1px] w-5 bg-[#E8EDFF] transition-transform group-open:-rotate-45" />
          </span>
        </summary>
        <nav aria-label="Мобильная навигация" className="absolute right-0 top-[48px] z-50 flex w-[240px] flex-col gap-5 border border-[#496192] bg-[#011845] px-6 py-6 shadow-xl">
          {navigation.map((item) => (
            <a key={item.label} href={item.href} className="text-[15px] transition-opacity hover:opacity-65">
              {item.label}
            </a>
          ))}
        </nav>
      </details>
    </header>
  );
}
