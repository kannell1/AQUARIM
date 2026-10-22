const aboutLinks = [
  { label: "О шефе", href: "#history" },
  { label: "Галерея", href: "#reviews" },
  { label: "Новости", href: "#offers" },
  { label: "Команда", href: "#history" },
] as const;

const visitorLinks = [
  { label: "Меню", href: "#menu" },
  { label: "Доставка и оплата", href: "#delivery" },
  { label: "Отзывы", href: "#reviews" },
  { label: "Контакты", href: "#contacts" },
] as const;

export function Footer() {
  return (
    <footer className="relative w-full bg-[#345088] text-[#E8EDFF]">
      <div className="mx-auto w-[calc(100%-32px)] max-w-[1660px] pb-[46px] pt-[48px] sm:w-[calc(100%-48px)] lg:w-[calc(100%-96px)] lg:pb-[66px] lg:pt-[64px] xl:w-[calc(100%-200px)] xl:px-[24px]">
        <div className="grid gap-x-[28px] gap-y-[42px] sm:grid-cols-2 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,0.87fr)_minmax(0,0.77fr)] lg:gap-x-[clamp(30px,5vw,86px)]">
          <p className="font-gilroy text-[17px] leading-[1.3] sm:col-span-2 sm:text-[19px] lg:col-span-1">
            © 2018–2024 AQUARIM
          </p>

          <nav aria-label="О ресторане">
            <h2 className="font-oceanic text-[25px] font-medium uppercase leading-[1.1] sm:text-[26px] lg:text-[clamp(19px,1.6vw,26px)]">
              О ресторане
            </h2>
            <ul className="mt-[22px] flex flex-col gap-[10px] sm:mt-[18px]">
              {aboutLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-gilroy text-[18px] leading-[1.25] transition-opacity hover:opacity-75 sm:text-[20px]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Для посетителей" className="lg:col-start-3">
            <h2 className="font-oceanic text-[25px] font-medium uppercase leading-[1.1] sm:text-[26px] lg:text-[clamp(19px,1.6vw,26px)]">
              Для посетителей
            </h2>
            <ul className="mt-[22px] flex flex-col gap-[10px] sm:mt-[18px]">
              {visitorLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-gilroy text-[18px] leading-[1.25] transition-opacity hover:opacity-75 sm:text-[20px]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <a
          href="#top"
          aria-label="AQUARIM — вернуться наверх страницы"
          className="mt-[70px] block w-fit max-w-full font-oceanic text-[clamp(58px,16vw,105px)] font-medium uppercase leading-[0.95] tracking-[-0.01em] text-[#253F74] transition-opacity hover:opacity-85 sm:mt-[74px] lg:mt-[72px] lg:text-[clamp(170px,16.9vw,305px)]"
        >
          AQUARIM
        </a>

        <div className="mt-[34px] flex flex-col gap-[14px] font-gilroy text-[15px] leading-[1.3] sm:flex-row sm:items-center sm:justify-between sm:text-[17px] lg:mt-[28px]">
          {/* Текст политики из макета; ссылку добавим, когда будет готова сама политика. */}
          <span>Политика обработки персональных данных</span>
          <span>Design by @sshultse</span>
        </div>
      </div>
    </footer>
  );
}
