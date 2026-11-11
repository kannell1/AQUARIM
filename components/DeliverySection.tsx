import Image from "next/image";

/**
 * Четвёртый блок по макету: доставка по Москве и МО.
 * Цвета и локальные шрифты уже заданы в существующем проекте.
 * Все стили блока написаны через Tailwind-классы.
 */
export function DeliverySection() {
  return (
    <section
      id="delivery"
      aria-labelledby="delivery-heading"
      className="relative mx-auto w-[calc(100%-32px)] max-w-[1660px] scroll-mt-[40px] pb-[55px] pt-[45px] sm:w-[calc(100%-48px)] sm:pt-[55px] lg:w-[calc(100%-96px)] lg:max-xl:max-w-[744px] lg:pb-[60px] lg:pt-[55px] lg:max-xl:pb-[95px] lg:max-xl:pt-[50px] xl:w-[calc(100%-200px)] max-md:pt-[42px] max-md:pb-[56px]"
    >
      {/* Светлое пятно на тёмно-синем фоне — из палитры макета. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-[-60px_-6%] z-0 bg-[radial-gradient(ellipse_at_50%_55%,#49619240_0%,transparent_70%)]"
      />

      <div className="relative z-10">
        {/* Двухстрочный заголовок, маленькая подпись слева. */}
        <div className="flex flex-col gap-[16px] lg:flex-row lg:items-start lg:gap-[110px] lg:max-xl:gap-[45px] max-md:gap-[9px]">
          <span className="shrink-0 text-[11px] font-medium uppercase tracking-[0.06em] text-[#E8EDFF] lg:w-[150px] lg:pt-[26px] lg:max-xl:w-[140px] lg:max-xl:pt-[12px]">
            Доставка
          </span>
          <h2
            id="delivery-heading"
            className="font-oceanic text-[clamp(34px,7.8vw,60px)] font-medium uppercase leading-[1.03] tracking-[-0.012em] text-[#E8EDFF] lg:text-[clamp(50px,4.3vw,68px)] lg:max-xl:text-[36px] max-md:text-[26px] max-md:leading-[1.04]"
          >
            Быстро, удобно, надежно
          </h2>
        </div>
        <p className="mt-[6px] font-oceanic text-[clamp(34px,7.8vw,60px)] font-medium uppercase leading-[1.03] tracking-[-0.012em] text-[#E8EDFF] lg:mt-0 lg:text-[clamp(50px,4.3vw,68px)] lg:max-xl:text-[36px] max-md:text-[26px] max-md:leading-[1.04]">
          Доставка по Москве и МО
        </p>

        {/* На десктопе: 01/02 | курьер | 03. На телефоне — вертикально. */}
        <div className="mt-[50px] grid grid-cols-1 items-center gap-[42px] lg:mt-[62px] lg:grid-cols-[minmax(0,1.08fr)_minmax(0,1.48fr)_minmax(0,1fr)] lg:items-stretch lg:gap-[30px] xl:gap-[45px] lg:max-xl:mt-[25px] lg:max-xl:grid-cols-2 lg:max-xl:items-start lg:max-xl:gap-x-[70px] lg:max-xl:gap-y-[24px] max-md:mt-[25px] max-md:gap-[22px]">
          {/* Левая колонка: два преимущества, сверху и снизу фотографии. */}
          <div className="order-2 flex flex-col gap-[36px] lg:order-1 lg:justify-between lg:gap-[25px] lg:max-xl:order-2 lg:max-xl:gap-[22px] max-md:gap-[18px]">
            <article className="max-w-[370px]">
              <span className="block font-oceanic text-[40px] font-medium leading-[1.05] text-[#E8EDFF] lg:text-[43px] lg:max-xl:text-[32px] max-md:text-[20px]">
                01
              </span>
              <h3 className="mt-[12px] font-oceanic text-[25px] font-medium uppercase leading-[1.13] text-[#E8EDFF] xl:text-[28px] lg:max-xl:mt-[7px] lg:max-xl:text-[23px] max-md:mt-[5px] max-md:text-[20px] max-md:leading-[1.06]">
                Термосумки для
                <br />
                сохранения тепла
              </h3>
              <p className="mt-[24px] max-w-[370px] font-gilroy text-[18px] leading-[1.45] text-[#E8EDFF]/90 sm:text-[19px] lg:text-[20px] 2xl:text-[21px] lg:max-xl:mt-[11px] lg:max-xl:text-[16px] lg:max-xl:leading-[1.35] max-md:mt-[8px] max-md:text-[12px] max-md:leading-[1.24]">
                Мы доставляем в специальных термосумках, чтобы сохранить
                температуру и свежесть блюд
              </p>
            </article>

            <article className="max-w-[370px]">
              <span className="block font-oceanic text-[40px] font-medium leading-[1.05] text-[#E8EDFF] lg:text-[43px] lg:max-xl:text-[32px] max-md:text-[20px]">
                02
              </span>
              <h3 className="mt-[12px] font-oceanic text-[25px] font-medium uppercase leading-[1.13] text-[#E8EDFF] xl:text-[28px] lg:max-xl:mt-[7px] lg:max-xl:text-[23px] max-md:mt-[5px] max-md:text-[20px] max-md:leading-[1.06]">
                Горячее и свежее
              </h3>
              <p className="mt-[23px] max-w-[370px] font-gilroy text-[18px] leading-[1.45] text-[#E8EDFF]/90 sm:text-[19px] lg:text-[20px] 2xl:text-[21px] lg:max-xl:mt-[11px] lg:max-xl:text-[16px] lg:max-xl:leading-[1.35] max-md:mt-[8px] max-md:text-[12px] max-md:leading-[1.24]">
                Ваш заказ не успеет остыть и не потеряет своего вкуса в пути
              </p>
            </article>
          </div>

          {/* Это изображение уже есть в public/images предыдущей версии проекта. */}
          <Image
            src="/images/delivery-courier.png"
            alt="Курьер AQUARIM везёт заказ на мотоцикле"
            width={480}
            height={426}
            sizes="(min-width: 1280px) 38vw, (min-width: 1024px) 42vw, 100vw"
            className="order-1 block h-auto w-full object-cover lg:order-2 lg:max-xl:order-1 lg:max-xl:col-span-2 lg:max-xl:h-[430px] lg:max-xl:object-cover max-md:aspect-[480/426] max-md:h-auto max-md:w-full"
          />

          {/* Правая колонка по высоте центрируется относительно изображения. */}
          <article className="order-3 max-w-[370px] lg:self-center lg:max-xl:order-3 lg:max-xl:self-start lg:max-xl:pt-[50px] max-md:pt-0">
            <span className="block font-oceanic text-[40px] font-medium leading-[1.05] text-[#E8EDFF] lg:text-[43px] lg:max-xl:text-[32px] max-md:text-[20px]">
              03
            </span>
            <h3 className="mt-[12px] font-oceanic text-[25px] font-medium uppercase leading-[1.13] text-[#E8EDFF] xl:text-[28px] lg:max-xl:mt-[7px] lg:max-xl:text-[23px] max-md:mt-[5px] max-md:text-[20px] max-md:leading-[1.06]">
              Качество
              <br />
              как в ресторане
            </h3>
            <p className="mt-[24px] max-w-[370px] font-gilroy text-[18px] leading-[1.45] text-[#E8EDFF]/90 sm:text-[19px] lg:text-[20px] 2xl:text-[21px] lg:max-xl:mt-[11px] lg:max-xl:text-[16px] lg:max-xl:leading-[1.35] max-md:mt-[8px] max-md:text-[12px] max-md:leading-[1.24]">
              Вы получите блюдо в том виде, в котором их приготовил повар —
              свежими, вкусными и красивыми, чтобы насладиться непревзойдённым
              вкусом дома
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
