"use client";

import Image from "next/image";
import { useState } from "react";

// Оба снимка из исходного архива AQUARIM. Текст акции одинаковый:
// дополнительных условий или скидок, которых нет в макете, не придумываем.
const illustrations = [
  {
    src: "/images/special-offer-dish.png",
    alt: "Филе рыбы в красном соусе на белой тарелке",
  },
  {
    src: "/images/seafood-platter.png",
    alt: "Фирменная тарелка морепродуктов AQUARIM",
  },
] as const;

export function PromotionsSection() {
  const [active, setActive] = useState(0);
  const illustration = illustrations[active];

  function changeIllustration(direction: -1 | 1) {
    setActive((current) =>
      (current + direction + illustrations.length) % illustrations.length,
    );
  }

  return (
    <section
      id="offers"
      aria-labelledby="offers-heading"
      className="relative isolate scroll-mt-[40px] pb-[70px] pt-[55px] sm:pb-[70px] lg:pb-[110px] lg:pt-[55px]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_6%_18%,#49619240_0%,transparent_55%)]"
      />

      <div className="mx-auto w-[calc(100%-32px)] max-w-[1660px] sm:w-[calc(100%-48px)] lg:w-[calc(100%-96px)] xl:w-[calc(100%-200px)] xl:px-[35px]">
        {/* Как в макете: метка и первая строка справа, вторая строка от левого края. */}
        <div className="flex flex-col gap-[16px] lg:flex-row lg:items-start lg:gap-0">
          <span className="shrink-0 font-gilroy text-[12px] font-medium uppercase leading-[1.2] text-[#E8EDFF] lg:w-[225px] lg:pt-[26px] lg:text-[13px]">
            Акции
          </span>
          <h2
            id="offers-heading"
            className="font-oceanic text-[clamp(34px,8vw,58px)] font-medium uppercase leading-[1.03] tracking-[-0.006em] text-[#E8EDFF] lg:text-[clamp(46px,4vw,62px)]"
          >
            <span className="block">Оазис выгодных</span>
            <span className="block lg:-ml-[225px]">предложений</span>
          </h2>
        </div>

        <div
          role="region"
          aria-roledescription="карусель"
          aria-label="Акция на первый заказ"
          className="relative mt-[76px] flex min-h-[630px] items-end bg-[#496192] px-[48px] pb-[38px] pt-[325px] sm:min-h-[690px] sm:px-[68px] sm:pt-[355px] lg:mt-[74px] lg:min-h-[430px] lg:items-center lg:px-[85px] lg:py-[54px] xl:pl-[112px]"
        >
          <button
            type="button"
            aria-label="Предыдущее фото блюда"
            onClick={() => changeIllustration(-1)}
            className="absolute left-[10px] top-1/2 z-20 flex h-[42px] w-[30px] -translate-y-1/2 items-center justify-center border-0 bg-transparent p-0 text-[#E8EDFF] transition-opacity hover:opacity-65 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E8EDFF] sm:left-[20px] xl:left-[28px]"
          >
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-[22px] w-[22px]" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
              <path d="m15 5-7 7 7 7" />
            </svg>
          </button>

          <div className="relative z-10 w-full max-w-[455px] lg:w-[46%]" aria-live="polite">
            <h3 className="font-oceanic text-[clamp(30px,7.5vw,42px)] font-medium uppercase leading-[1.05] text-[#E8EDFF] lg:text-[clamp(32px,2.75vw,42px)]">
              Скидка 15%
              <br />
              на первый заказ
            </h3>
            <p className="mt-[24px] max-w-[455px] font-gilroy text-[17px] leading-[1.24] text-[#E8EDFF] sm:text-[19px] lg:mt-[26px] xl:text-[21px]">
              Воспользуйтесь этой прекрасной возможностью и откройте для себя мир
              изысканных морских деликатесов, которыми славится наш ресторан
            </p>
            <a
              href="#menu"
              className="mt-[30px] flex h-[62px] w-[220px] max-w-full items-center justify-center bg-[#E9663D] px-[15px] font-gilroy text-[18px] font-medium text-[#E8EDFF] transition-opacity hover:opacity-85 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E8EDFF] sm:h-[72px] sm:w-[255px] sm:text-[20px]"
            >
              Забрать скидку
            </a>
          </div>

          {/* На десктопе тарелка выступает за верхнюю и нижнюю границы карточки. */}
          <Image
            key={illustration.src}
            src={illustration.src}
            alt={illustration.alt}
            width={480}
            height={480}
            sizes="(min-width: 1600px) 535px, (min-width: 1024px) 38vw, (min-width: 640px) 380px, 84vw"
            className="pointer-events-none absolute left-1/2 top-[-42px] z-0 h-auto w-[min(82vw,320px)] -translate-x-1/2 select-none sm:top-[-48px] sm:w-[380px] lg:left-auto lg:right-[8.5%] lg:top-1/2 lg:w-[min(39vw,535px)] lg:translate-x-[0px] lg:-translate-y-1/2"
          />

          <button
            type="button"
            aria-label="Следующее фото блюда"
            onClick={() => changeIllustration(1)}
            className="absolute right-[10px] top-1/2 z-20 flex h-[42px] w-[30px] -translate-y-1/2 items-center justify-center border-0 bg-transparent p-0 text-[#E8EDFF] transition-opacity hover:opacity-65 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E8EDFF] sm:right-[20px] xl:right-[28px]"
          >
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-[22px] w-[22px]" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
              <path d="m9 5 7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
