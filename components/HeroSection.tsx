import Image from "next/image";

export function HeroSection() {
  return (
    <>

      {/* На телефоне креветка сверху справа; ручка вилки уходит диагонально
          за правый край, не касаясь заголовка и описания. */}
      <section
        aria-label="Рыбный ресторан AQUARIM"
        className="relative mx-auto w-[calc(100%-32px)] pb-[56px] md:hidden"
      >
        <div className="relative min-h-[355px] overflow-visible">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute left-0 top-[52px] whitespace-nowrap font-oceanic text-[clamp(68px,21.5vw,98px)] font-normal uppercase leading-none tracking-[-0.018em] text-[#496192]"
          >
            AQUARIM
          </span>
          <Image
            src="/images/shrimp-fork.png"
            alt="Креветка на вилке, выглядывающая справа"
            priority
            width={220}
            height={600}
            sizes="150px"
            className="pointer-events-none absolute right-[-98px] top-[145px] z-10 h-auto w-[155px] -rotate-[27deg] select-none max-[359px]:right-[-135px] max-[359px]:w-[135px]"
          />
          <h1 className="relative z-20 max-w-[245px] pt-[176px] font-oceanic text-[clamp(36px,10.8vw,42px)] font-medium uppercase leading-[0.96] tracking-[-0.012em] text-[#E8EDFF]">
            Рыбный<br />ресторан
          </h1>
        </div>
        <p className="relative z-20 mt-[8px] max-w-[290px] font-gilroy text-[12px] leading-[1.25] text-[#E8EDFF]">
          Откройте для себя мир изысканных вкусов с нашими рыбными деликатесами,
          приготовленными специально для вас
        </p>
        <a
          href="#menu"
          className="relative z-20 mt-[28px] flex h-[56px] w-full items-center justify-center bg-[#E9663D] font-gilroy text-[16px] font-medium leading-none text-[#E8EDFF] transition-opacity hover:opacity-85"
        >
          Меню
        </a>
        <ul className="relative z-20 mt-[30px] flex flex-col gap-[18px]">
          <li className="flex items-start gap-[12px]">
            <Image src="/icons/fish.svg" width={24} height={24} alt="" className="mt-[1px] h-[21px] w-[21px] shrink-0" />
            <p className="font-gilroy text-[12px] leading-[1.25] text-[#E8EDFF]">Свежая рыба из наших аквариумов — гарантированная свежесть</p>
          </li>
          <li className="flex items-start gap-[12px]">
            <Image src="/icons/delivery.svg" width={24} height={24} alt="" className="mt-[1px] h-[21px] w-[21px] shrink-0" />
            <p className="font-gilroy text-[12px] leading-[1.25] text-[#E8EDFF]">Качественная доставка, где горячие блюда сохраняют свой вкус</p>
          </li>
        </ul>
      </section>
      <section
      aria-label="Рыбный ресторан AQUARIM"
      className="hidden md:block relative mx-auto min-h-[1290px] w-[calc(100%-32px)] max-w-[1660px] sm:min-h-[1240px] sm:w-[calc(100%-48px)] lg:h-[730px] lg:min-h-0 lg:w-[calc(100%-96px)] lg:max-xl:max-w-[744px] lg:max-xl:h-[535px] xl:w-[calc(100%-200px)]"
    >
      {/* На широком экране — по 100px по бокам, на узком — адаптивные поля. */}
      {/* Большая надпись за креветкой — как на макете. */}
      <h1 className="pointer-events-none absolute left-1/2 top-[38px] z-0 w-max -translate-x-1/2 whitespace-nowrap font-oceanic text-[17.7vw] font-normal uppercase leading-[0.95] tracking-[-0.01em] text-[#496192] sm:top-[34px] lg:top-[22px] lg:text-[min(18.4vw,340px)] lg:max-xl:top-[40px] lg:max-xl:text-[155px]">
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
        className="pointer-events-none absolute left-1/2 top-[90px] z-10 h-auto w-[145px] -translate-x-1/2 select-none sm:top-[95px] lg:left-[calc(50%-30px)] lg:top-[54px] lg:w-[clamp(180px,15vw,230px)] lg:max-xl:left-1/2 lg:max-xl:top-[100px] lg:max-xl:w-[136px] lg:max-xl:-translate-x-1/2"
      />

      <div className="relative z-20 flex flex-col gap-[78px] pt-[490px] sm:pt-[525px] lg:absolute lg:inset-x-0 lg:top-[clamp(345px,23vw,395px)] lg:flex-row lg:items-start lg:justify-between lg:gap-0 lg:pt-0 lg:max-xl:top-[218px]">
        <div className="max-w-[480px] lg:w-[clamp(280px,27vw,390px)] lg:shrink-0 lg:max-xl:w-[245px]">
          <h2 className="font-oceanic text-[clamp(46px,12vw,75px)] font-medium uppercase leading-[1.05] tracking-[-0.01em] lg:text-[clamp(55px,5.55vw,80px)] lg:max-xl:text-[44px]">
            Рыбный
          </h2>

          <p className="mt-[28px] max-w-[365px] text-[18px] leading-[1.44] sm:text-[20px] lg:mt-[44px] lg:max-xl:mt-[19px] lg:max-xl:max-w-[235px] lg:max-xl:text-[15px] lg:max-xl:leading-[1.3] xl:text-[21px]">
            Свежая рыба из наших аквариумов с нашим рыбным меню,
            приготовленным специально для вас.
          </p>

          <a
            href="#menu"
            className="mt-[26px] inline-flex h-[66px] w-[235px] items-center justify-center bg-[#E9663D] text-[18px] font-medium leading-none text-[#E8EDFF] transition-opacity hover:opacity-85 sm:h-[72px] sm:w-[285px] lg:mt-[30px] lg:max-xl:mt-[18px] lg:max-xl:h-[60px] lg:max-xl:w-[240px] lg:max-xl:text-[16px]"
          >
            Меню
          </a>
        </div>

        <div className="max-w-[475px] lg:w-[clamp(320px,31.3vw,450px)] lg:shrink-0 lg:max-xl:w-[245px]">
          <h2 className="font-oceanic text-[clamp(46px,12vw,75px)] font-medium uppercase leading-[1.05] tracking-[-0.01em] lg:text-[clamp(55px,5.55vw,80px)] lg:max-xl:text-[44px]">
            Ресторан
          </h2>

          <ul className="mt-[26px] flex flex-col gap-[24px] sm:mt-[42px] lg:mt-[46px] lg:max-xl:mt-[18px] lg:max-xl:gap-[16px]">
            <li className="flex items-start gap-[18px] sm:gap-[24px] lg:max-xl:gap-[10px]">
              <Image
                src="/icons/fish.svg"
                alt=""
                width={44}
                height={44}
                className="mt-[2px] h-[38px] w-[38px] shrink-0 sm:h-[44px] sm:w-[44px] lg:max-xl:h-[26px] lg:max-xl:w-[26px]"
              />
              <p className="max-w-[350px] text-[18px] leading-[1.44] sm:text-[20px] xl:text-[21px] lg:max-xl:text-[15px] lg:max-xl:leading-[1.3]">
                Свежая рыба из наших аквариумов — гарантированная свежесть
              </p>
            </li>
            <li className="flex items-start gap-[18px] sm:gap-[24px] lg:max-xl:gap-[10px]">
              <Image
                src="/icons/delivery.svg"
                alt=""
                width={44}
                height={44}
                className="mt-[2px] h-[38px] w-[38px] shrink-0 sm:h-[44px] sm:w-[44px] lg:max-xl:h-[26px] lg:max-xl:w-[26px]"
              />
              <p className="max-w-[350px] text-[18px] leading-[1.44] sm:text-[20px] xl:text-[21px] lg:max-xl:text-[15px] lg:max-xl:leading-[1.3]">
                Качественная доставка, где горячие блюда сохраняют свой вкус
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
    </>
  );
}
