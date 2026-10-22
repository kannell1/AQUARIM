import Image from "next/image";

const socials = [
  { name: "Instagram", image: "/icons/instagram.svg" },
  { name: "Telegram", image: "/icons/telegram.svg" },
  { name: "ВКонтакте", image: "/icons/vk.svg" },
  { name: "YouTube", image: "/icons/youtube.svg" },
] as const;

export function ContactsSection() {
  return (
    <section
      id="contacts"
      aria-labelledby="contacts-heading"
      className="relative isolate scroll-mt-[40px] pb-[105px] pt-0 lg:pb-[145px]"
    >
      {/* Светлый ореол слева взят из той же палитры, что и предыдущие блоки. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_0%_25%,#49619255_0%,transparent_55%)]"
      />

      <div className="mx-auto w-[calc(100%-32px)] max-w-[1660px] sm:w-[calc(100%-48px)] lg:w-[calc(100%-96px)] xl:w-[calc(100%-200px)] xl:px-[24px]">
        <div className="flex flex-col gap-[16px] lg:flex-row lg:items-start lg:gap-0">
          <span className="shrink-0 font-gilroy text-[12px] font-medium uppercase leading-[1.2] text-[#E8EDFF] lg:w-[215px] lg:pt-[24px] lg:text-[13px]">
            Контакты
          </span>
          <h2
            id="contacts-heading"
            className="font-oceanic text-[clamp(32px,8vw,56px)] font-medium uppercase leading-[1.04] tracking-[-0.006em] text-[#E8EDFF] lg:text-[clamp(44px,3.95vw,64px)]"
          >
            <span className="block">Морская атмосфера,</span>
            <span className="block lg:-ml-[215px]">объединяющая людей</span>
          </h2>
        </div>

        <div className="mt-[45px] grid grid-cols-1 items-start gap-[48px] lg:mt-[66px] lg:grid-cols-[minmax(0,1.03fr)_minmax(0,0.93fr)] lg:gap-[clamp(48px,8vw,130px)]">
          <Image
            src="/images/restaurant-atmosphere.png"
            alt="Гости ресторана AQUARIM поднимают бокалы за столом рядом с аквариумом"
            width={625}
            height={518}
            sizes="(min-width: 1440px) 625px, (min-width: 1024px) 46vw, 100vw"
            className="block aspect-[625/518] h-auto w-full object-cover"
          />

          <div className="min-w-0 pt-[0px] lg:pt-[12px]">
            <div>
              <h3 className="font-oceanic text-[clamp(28px,6.7vw,38px)] font-medium uppercase leading-[1.09] text-[#E8EDFF] lg:text-[clamp(28px,2.5vw,40px)]">
                Если у вас
                <br />
                остались вопросы:
              </h3>

              <div className="mt-[16px] flex flex-col gap-[12px] sm:mt-[20px]">
                <a
                  href="tel:+79654788976"
                  className="flex w-fit items-center gap-[12px] font-gilroy text-[17px] leading-[1.25] text-[#E8EDFF] transition-opacity hover:opacity-75 sm:text-[19px]"
                >
                  <Image src="/icons/phone.svg" alt="" width={28} height={28} className="h-[28px] w-[28px] shrink-0" />
                  +7 (965) 478-89-76
                </a>
                <a
                  href="mailto:aquarim@gmail.com"
                  className="flex w-fit items-center gap-[12px] font-gilroy text-[17px] leading-[1.25] text-[#E8EDFF] transition-opacity hover:opacity-75 sm:text-[19px]"
                >
                  <Image src="/icons/email.svg" alt="" width={28} height={28} className="h-[28px] w-[28px] shrink-0" />
                  aquarim@gmail.com
                </a>
              </div>
            </div>

            <div className="mt-[35px] lg:mt-[43px]">
              <h3 className="font-oceanic text-[clamp(28px,6.7vw,38px)] font-medium uppercase leading-[1.07] text-[#E8EDFF] lg:text-[clamp(28px,2.5vw,40px)]">
                Адрес:
              </h3>
              <a
                href="https://yandex.ru/maps/?text=%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0%2C%20%D0%A2%D0%B2%D0%B5%D1%80%D1%81%D0%BA%D0%B0%D1%8F%2C%208"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-[16px] flex w-fit items-start gap-[11px] font-gilroy text-[17px] leading-[1.35] text-[#E8EDFF] transition-opacity hover:opacity-75 sm:text-[19px]"
              >
                <svg aria-hidden="true" viewBox="0 0 28 32" className="mt-[-2px] h-[30px] w-[28px] shrink-0 fill-[#496192]">
                  <path d="M14 0C6.27 0 0 6.28 0 14c0 10.4 14 18 14 18s14-7.6 14-18C28 6.28 21.73 0 14 0Zm0 19a5 5 0 1 1 0-10 5 5 0 0 1 0 10Z" />
                </svg>
                г. Москва, ул. Тверская, д.8
              </a>
            </div>

            <div className="mt-[35px] lg:mt-[43px]">
              <h3 className="font-oceanic text-[clamp(28px,6.7vw,38px)] font-medium uppercase leading-[1.07] text-[#E8EDFF] lg:text-[clamp(28px,2.5vw,40px)]">
                Мы в социальных
                <br />
                сетях:
              </h3>
              {/* URL конкретных аккаунтов не были даны; пока это значки из макета, без ложных ссылок. */}
              <div className="mt-[18px] flex flex-wrap items-center gap-[14px] sm:gap-[20px]" aria-label="Социальные сети AQUARIM">
                {socials.map((social) => (
                  <Image
                    key={social.name}
                    src={social.image}
                    alt={social.name}
                    width={60}
                    height={60}
                    className="h-[55px] w-[55px] sm:h-[60px] sm:w-[60px]"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
