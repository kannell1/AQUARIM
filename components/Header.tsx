"use client";

import Image from "next/image";
import { useState } from "react";

const navigation = [
  { href: "#history", label: "О ресторане" },
  { href: "#menu", label: "Меню" },
  { href: "#delivery", label: "Доставка и оплата" },
  { href: "#contacts", label: "Контакты" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative z-30 mx-auto flex h-[84px] w-[calc(100%-32px)] max-w-[1660px] items-center justify-between sm:w-[calc(100%-48px)] lg:w-[calc(100%-96px)] lg:max-xl:max-w-[744px] lg:max-xl:h-[58px] xl:w-[calc(100%-200px)] max-md:h-[58px]">
      <a
        href="#top"
        aria-label="AQUARIM — на главную"
        onClick={() => setMenuOpen(false)}
        className="font-oceanic text-[22px] leading-none font-normal text-[#E8EDFF] transition-opacity hover:opacity-80 lg:text-[24px] lg:max-xl:text-[19px] max-md:text-[19px]"
      >
        AQUARIM
      </a>

      <nav aria-label="Основная навигация" className="hidden items-center gap-[clamp(20px,3.1vw,48px)] xl:flex">
        {navigation.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="whitespace-nowrap font-gilroy text-[17px] leading-none transition-opacity hover:opacity-65"
          >
            {item.label}
          </a>
        ))}
      </nav>

      <a href="#menu" aria-label="Перейти в меню" className="hidden h-[36px] w-[36px] items-center justify-center transition-opacity hover:opacity-70 xl:flex">
        <Image src="/icons/cart.svg" alt="" width={28} height={28} />
      </a>

      <div className="relative xl:hidden">
        <button
          type="button"
          aria-label={menuOpen ? "Закрыть меню" : "Открыть меню"}
          aria-expanded={menuOpen}
          aria-controls="aquarim-mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
          className="flex h-[44px] w-[44px] items-center justify-center text-[#E8EDFF] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E8EDFF]"
        >
          <span className="flex h-[23px] w-[26px] flex-col items-center justify-center gap-[6px]">
            <span className={`block h-px w-[24px] bg-[#E8EDFF] transition-transform ${menuOpen ? "translate-y-[7px] rotate-45" : ""}`} />
            <span className={`block h-px w-[24px] bg-[#E8EDFF] transition-opacity ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block h-px w-[24px] bg-[#E8EDFF] transition-transform ${menuOpen ? "-translate-y-[7px] -rotate-45" : ""}`} />
          </span>
        </button>
        <nav
          id="aquarim-mobile-navigation"
          aria-label="Мобильная навигация"
          className={`${menuOpen ? "flex" : "hidden"} absolute right-0 top-[47px] z-50 w-[min(280px,calc(100vw-32px))] flex-col gap-[18px] border border-[#496192] bg-[#011845] px-[24px] py-[24px] shadow-xl`}
        >
          {navigation.map((item) => (
            <a key={item.label} href={item.href} onClick={() => setMenuOpen(false)} className="font-gilroy text-[17px] leading-[1.2] text-[#E8EDFF] transition-opacity hover:opacity-65">
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
