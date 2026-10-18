"use client";

import Image from "next/image";
import { useState } from "react";

// Первая карточка повторяет блюдо из макета.
// Второе блюдо использует изображение из исходного архива для проверки стрелок.
const dishes = [
  {
    id: "sea-breeze",
    title: "Морской бриз",
    description:
      "Тарелка морепродуктов: нежные креветки, мидии и другие дары моря с фирменным соусом и свежей зеленью.",
    price: "1300 рублей",
    image: "/images/seafood-platter.png",
    alt: "Блюдо «Морской бриз» с креветками, мидиями и крабом",
  },
  {
    id: "fish-fillet",
    title: "Рыбное филе",
    description:
      "Нежное рыбное филе в соусе с пряными травами. Блюдо из нашей коллекции морских вкусов.",
    price: "Цена уточняется",
    image: "/images/special-offer-dish.png",
    alt: "Рыбное филе в соусе с зеленью",
  },
] as const;

export function DishesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cartMessage, setCartMessage] = useState("");
  const dish = dishes[currentIndex];

  function switchDish(direction: -1 | 1) {
    setCurrentIndex((index) => (index + direction + dishes.length) % dishes.length);
    setCartMessage("");
  }

  function addToCart() {
    try {
      const existing = JSON.parse(localStorage.getItem("aquarim-cart") ?? "{}");
      const cart: Record<string, number> =
        existing && typeof existing === "object" && !Array.isArray(existing)
          ? existing
          : {};
      cart[dish.id] = (Number(cart[dish.id]) || 0) + 1;
      localStorage.setItem("aquarim-cart", JSON.stringify(cart));
      setCartMessage(`Блюдо «${dish.title}» добавлено в корзину`);
    } catch {
      setCartMessage("Не удалось добавить блюдо в корзину");
    }
  }

  return (
    <section
      id="menu"
      aria-labelledby="dishes-heading"
      className="relative mx-auto w-[calc(100%-32px)] max-w-[1660px] scroll-mt-[40px] pb-[140px] pt-[12px] sm:w-[calc(100%-48px)] sm:pb-[160px] lg:w-[calc(100%-96px)] xl:w-[calc(100%-200px)] lg:pb-[170px]"
    >
      {/* Маленькая подпись слева и заголовок в две строки — по макету. */}
      <div className="flex flex-col gap-[18px] lg:flex-row lg:items-baseline lg:gap-[78px]">
        <span className="shrink-0 text-[11px] font-medium uppercase tracking-[0.06em] lg:w-[122px]">
          Меню
        </span>
        <h2
          id="dishes-heading"
          className="font-oceanic text-[clamp(34px,8.3vw,68px)] font-medium uppercase leading-[1.06] tracking-[-0.012em] lg:text-[clamp(52px,5.55vw,76px)]"
        >
          Блюда, которые навсегда
        </h2>
      </div>
      <p className="font-oceanic text-[clamp(34px,8.3vw,68px)] font-medium uppercase leading-[1.06] tracking-[-0.012em] lg:text-[clamp(52px,5.55vw,76px)]">
        Запомнятся вам
      </p>

      <div
        id="featured-dish"
        role="region"
        aria-roledescription="карусель"
        aria-label="Фирменные блюда"
        className="relative mt-[100px] flex min-h-[590px] items-end bg-[#496192] px-[48px] pb-[42px] pt-[270px] sm:mt-[115px] sm:min-h-[630px] sm:px-[70px] sm:pt-[310px] lg:mt-[76px] lg:min-h-[390px] lg:items-center lg:px-[95px] lg:py-[50px]"
      >
        <button
          type="button"
          aria-label="Предыдущее блюдо"
          onClick={() => switchDish(-1)}
          className="absolute left-[12px] top-1/2 z-20 flex h-[36px] w-[30px] -translate-y-1/2 items-center justify-center text-[#E8EDFF] transition-opacity hover:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E8EDFF] sm:left-[24px] lg:left-[24px]"
        >
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-[22px] w-[22px]" stroke="currentColor" strokeWidth="1.5">
            <path d="m15 5-7 7 7 7" />
          </svg>
        </button>

        <div className="relative z-10 max-w-[420px] lg:w-[43%]" aria-live="polite" aria-atomic="true">
          <h3 className="font-oceanic text-[clamp(28px,7vw,45px)] font-medium uppercase leading-[1.1] lg:text-[clamp(32px,3vw,44px)]">
            {dish.title}
          </h3>
          <p className="mt-[22px] max-w-[420px] text-[17px] leading-[1.44] sm:text-[19px] lg:mt-[26px] lg:text-[20px] 2xl:text-[21px]">
            {dish.description}
          </p>
          <p className="mt-[22px] text-[18px] font-medium leading-none sm:text-[19px] lg:mt-[25px] lg:text-[20px]">
            {dish.price}
          </p>
          <button
            type="button"
            onClick={addToCart}
            className="mt-[28px] flex h-[54px] w-[175px] items-center justify-center bg-[#E9663D] text-[17px] font-medium text-[#E8EDFF] transition-opacity hover:opacity-85 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E8EDFF] sm:h-[60px] lg:mt-[32px] lg:text-[18px]"
          >
            В корзину
          </button>
          <span className="sr-only" role="status">{cartMessage}</span>
        </div>

        <Image
          key={dish.image}
          src={dish.image}
          alt={dish.alt}
          width={480}
          height={480}
          sizes="(min-width: 1024px) 580px, (min-width: 640px) 360px, 290px"
          className="pointer-events-none absolute left-1/2 top-[-67px] z-0 h-auto w-[min(76vw,320px)] -translate-x-1/2 select-none sm:top-[-83px] sm:w-[360px] lg:left-auto lg:right-[7%] lg:top-1/2 lg:w-[min(39vw,580px)] lg:translate-x-0 lg:-translate-y-1/2"
        />

        <button
          type="button"
          aria-label="Следующее блюдо"
          onClick={() => switchDish(1)}
          className="absolute right-[12px] top-1/2 z-20 flex h-[36px] w-[30px] -translate-y-1/2 items-center justify-center text-[#E8EDFF] transition-opacity hover:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E8EDFF] sm:right-[24px] lg:right-[24px]"
        >
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-[22px] w-[22px]" stroke="currentColor" strokeWidth="1.5">
            <path d="m9 5 7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* На больших экранах тарелка выступает за нижний край синей карточки.
          Отступ рассчитан от НИЖНЕГО КРАЯ тарелки: половина её диаметра
          минус половина высоты карточки, плюс 30 px до кнопки. */}
      <a
        href="#featured-dish"
        className="mx-auto mt-[30px] flex h-[66px] w-[240px] max-w-full items-center justify-center border border-[#496192] text-[18px] text-[#E8EDFF] transition-colors hover:bg-[#496192]/25 lg:mt-[max(30px,calc(min(19.5vw,290px)_-_165px))]"
      >
        Перейти в меню
      </a>
    </section>
  );
}
