import Image from "next/image";

export function HeroSection() {
  return (
    <section
      aria-label="Рыбный ресторан AQUARIM"
      className="relative mx-auto min-h-[1220px] w-[calc(100%-32px)] max-w-[1660px] sm:min-h-[1170px] sm:w-[calc(100%-48px)] lg:h-[730px] lg:min-h-0 lg:w-[calc(100%-96px)] xl:w-[calc(100%-200px)]"
    >
      {/* На широком экране — по 100px по бокам, на узком — адаптивные поля. */}
      {/* Большая надпись за креветкой — как на макете. */}
      <h1 className="pointer-events-none absolute left-1/2 top-[38px] z-0 w-max -translate-x-1/2 whitespace-nowrap font-oceanic text-[17.7vw] font-normal uppercase leading-[0.95] tracking-[-0.01em] text-[#496192] sm:top-[34px] lg:top-[22px] lg:text-[min(18.4vw,340px)]">
        AQUARIM
      </h1>

      {/* Колонки ниже крупной фоновой надписи: хвост буквы Q больше не
          касается заголовка «Рыбный». Вилка по центру композиции. */}
      <Image
        src="/images/shrimp-fork.png"
        alt="Креветка на вилке"
        width={220}
        height={600}
        priority
        sizes="(min-width: 1024px) 230px, 145px"
        className="pointer-events-none absolute left-1/2 top-[90px] z-10 h-auto w-[145px] -translate-x-1/2 select-none sm:top-[95px] lg:left-[calc(50%-30px)] lg:top-[54px] lg:w-[clamp(180px,15vw,230px)]"
      />

      <div className="relative z-20 flex flex-col gap-[78px] pt-[490px] sm:pt-[525px] lg:absolute lg:inset-x-0 lg:top-[clamp(345px,23vw,395px)] lg:flex-row lg:items-start lg:justify-between lg:gap-0 lg:pt-0">
        <div className="max-w-[480px] lg:w-[clamp(280px,27vw,390px)] lg:shrink-0">
          <h2 className="font-oceanic text-[clamp(46px,12vw,75px)] font-medium uppercase leading-[1.05] tracking-[-0.01em] lg:text-[clamp(55px,5.55vw,80px)]">
            Рыбный
          </h2>

          <p className="mt-[28px] max-w-[345px] text-[17px] leading-[1.42] sm:text-[18px] lg:mt-[48px]">
            Свежая рыба из наших аквариумов с нашим рыбным меню,
            приготовленным специально для вас.
          </p>

          <a
            href="#menu"
            className="mt-[26px] inline-flex h-[66px] w-[235px] items-center justify-center bg-[#E9663D] text-[17px] font-medium leading-none text-[#E8EDFF] transition-opacity hover:opacity-85 sm:h-[72px] sm:w-[285px] lg:mt-[30px]"
          >
            Меню
          </a>
        </div>

        <div className="max-w-[475px] lg:w-[clamp(320px,31.3vw,450px)] lg:shrink-0">
          <h2 className="font-oceanic text-[clamp(46px,12vw,75px)] font-medium uppercase leading-[1.05] tracking-[-0.01em] lg:text-[clamp(55px,5.55vw,80px)]">
            Ресторан
          </h2>

          <ul className="mt-[26px] flex flex-col gap-[24px] sm:mt-[42px] lg:mt-[46px]">
            <li className="flex items-start gap-[18px] sm:gap-[24px]">
              <Image
                src="/icons/fish.svg"
                alt=""
                width={44}
                height={44}
                className="mt-[2px] h-[38px] w-[38px] shrink-0 sm:h-[44px] sm:w-[44px]"
              />
              <p className="max-w-[325px] text-[17px] leading-[1.4] sm:text-[18px]">
                Свежая рыба из наших аквариумов — гарантированная свежесть
              </p>
            </li>
            <li className="flex items-start gap-[18px] sm:gap-[24px]">
              <Image
                src="/icons/delivery.svg"
                alt=""
                width={44}
                height={44}
                className="mt-[2px] h-[38px] w-[38px] shrink-0 sm:h-[44px] sm:w-[44px]"
              />
              <p className="max-w-[325px] text-[17px] leading-[1.4] sm:text-[18px]">
                Качественная доставка, где горячие блюда сохраняют свой вкус
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
