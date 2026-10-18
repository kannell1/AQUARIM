"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

// Те же пять фотографий, что в макете: они уже лежат в public/images.
const photos = [
  {
    src: "/images/guest-1.png",
    alt: "Гость ресторана AQUARIM за столом у аквариума",
  },
  {
    src: "/images/guest-2.png",
    alt: "Посетительница за столиком на фоне большого аквариума",
  },
  {
    src: "/images/guest-3.png",
    alt: "Гостья AQUARIM с блюдом у аквариума",
  },
  {
    src: "/images/guest-4.png",
    alt: "Посетительница фотографирует аквариум ресторана",
  },
  {
    src: "/images/guest-5.png",
    alt: "Посетитель ресторана на фоне тропических рыб",
  },
] as const;

export function ReviewsSection() {
  const [firstPhoto, setFirstPhoto] = useState(0);
  const [openedPhoto, setOpenedPhoto] = useState<number | null>(null);

  // Стрелки переключают фотографии, не меняя их исходный порядок.
  const visiblePhotos = photos.map((_, index) => (firstPhoto + index) % photos.length);

  useEffect(() => {
    if (openedPhoto === null) return;

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setOpenedPhoto(null);
    }

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [openedPhoto]);

  function changePhoto(direction: -1 | 1) {
    setFirstPhoto((previous) =>
      (previous + direction + photos.length) % photos.length,
    );
  }

  return (
    <section
      id="reviews"
      aria-labelledby="reviews-heading"
      className="relative isolate scroll-mt-[50px] pb-[120px] pt-[100px] lg:pb-[150px] lg:pt-[157px]"
    >
      {/* Мягкий синий градиент — только цвета из исходного макета. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_18%_69%,#49619255_0%,transparent_60%)]"
      />

      <div className="mx-auto w-[calc(100%-32px)] max-w-[1660px] sm:w-[calc(100%-48px)] lg:w-[calc(100%-96px)] xl:w-[calc(100%-200px)] xl:px-[45px]">
        {/* Заголовок повторяет две строки макета. */}
        <div className="flex flex-col gap-[16px] lg:flex-row lg:items-start lg:gap-[30px]">
          <span className="shrink-0 font-gilroy text-[13px] font-medium uppercase leading-[1.2] text-[#E8EDFF] lg:w-[216px] lg:pt-[28px] lg:text-[15px]">
            Отзывы
          </span>
          <h2
            id="reviews-heading"
            className="font-oceanic text-[clamp(32px,7.2vw,56px)] font-medium uppercase leading-[1] tracking-[-0.006em] text-[#E8EDFF] lg:text-[clamp(42px,3.8vw,68px)] 2xl:text-[68px]"
          >
            Бесценные отзывы
          </h2>
        </div>
        <p className="mt-[8px] font-oceanic text-[clamp(32px,7.2vw,56px)] font-medium uppercase leading-[1] tracking-[-0.006em] text-[#E8EDFF] lg:mt-[3px] lg:text-[clamp(42px,3.8vw,68px)] 2xl:text-[68px]">
          Доказывающие наше мастерство
        </p>

        <div className="mt-[34px] flex flex-col items-stretch gap-[22px] sm:flex-row sm:flex-wrap sm:items-end sm:justify-between sm:gap-[26px] lg:mt-[49px] lg:flex-nowrap lg:pl-[33.6%]">
          <p className="w-full max-w-[530px] font-gilroy text-[18px] sm:w-auto leading-[1.25] text-[#E8EDFF] sm:text-[20px] xl:text-[22px]">
            <span className="lg:block">Мы гордимся доверием наших клиентов </span>
            <span className="lg:block">и ценим каждый отзыв, который вдохновляет </span>
            <span className="lg:block">нас становиться еще лучше</span>
          </p>

          <div className="flex shrink-0 self-end gap-[40px] pb-[1px] sm:self-auto">
            <button
              type="button"
              onClick={() => changePhoto(-1)}
              aria-label="Предыдущие фотографии гостей"
              className="flex h-[32px] w-[24px] items-center justify-center text-[#E8EDFF] transition-opacity hover:opacity-65 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E8EDFF]"
            >
              <svg viewBox="0 0 24 24" className="h-[24px] w-[24px]" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m15 5-7 7 7 7" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => changePhoto(1)}
              aria-label="Следующие фотографии гостей"
              className="flex h-[32px] w-[24px] items-center justify-center text-[#E8EDFF] transition-opacity hover:opacity-65 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E8EDFF]"
            >
              <svg viewBox="0 0 24 24" className="h-[24px] w-[24px]" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m9 5 7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* На широком экране: оранжевая карточка + ровно пять фото в ряд. */}
        <div className="mt-[46px] flex snap-x snap-mandatory gap-[16px] overflow-x-auto pb-[6px] lg:mt-[44px] lg:grid lg:grid-cols-6 lg:gap-[28px] lg:overflow-visible lg:pb-0">
          <div className="flex aspect-[180/260] w-[190px] shrink-0 snap-start flex-col items-center justify-center bg-[#E9663D] px-[16px] text-center text-[#E8EDFF] sm:w-[212px] lg:w-auto">
            <p className="font-gilroy text-[18px] font-medium leading-[1.14] sm:text-[20px] xl:text-[21px]">
              Кликните
              <br />
              на отзыв, чтобы
              <br />
              узнать больше
            </p>
            <svg
              aria-hidden="true"
              viewBox="0 0 124 94"
              className="mt-[12px] h-[94px] w-[124px] max-w-full text-[#E8EDFF]"
              fill="none"
              stroke="currentColor"
              strokeWidth="3.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M25 4C7 28 13 49 31 61c13 8 31 9 41-5 7-10 5-21-3-21-13 0-15 19-4 29 10 9 27 11 44 5" />
              <path d="m95 63 14 6-10 13" />
            </svg>
          </div>

          {visiblePhotos.map((photoIndex) => {
            const photo = photos[photoIndex];
            return (
              <button
                key={photo.src}
                type="button"
                aria-label={`Открыть фото: ${photo.alt}`}
                onClick={() => setOpenedPhoto(photoIndex)}
                className="relative aspect-[180/260] w-[190px] shrink-0 snap-start overflow-hidden outline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#E8EDFF] sm:w-[212px] lg:w-auto"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(min-width: 1600px) 220px, (min-width: 1024px) 17vw, 212px"
                  className="object-cover transition-transform duration-300 hover:scale-[1.035]"
                />
              </button>
            );
          })}
        </div>
      </div>

      {openedPhoto !== null && (
        <div
          role="presentation"
          onClick={() => setOpenedPhoto(null)}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#011845]/95 p-[18px]"
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Фотография гостя AQUARIM"
            onClick={(event) => event.stopPropagation()}
            className="relative flex max-h-[90vh] flex-col items-center gap-[16px]"
          >
            <button
              type="button"
              aria-label="Закрыть фотографию"
              onClick={() => setOpenedPhoto(null)}
              className="self-end border border-[#E8EDFF] px-[14px] py-[7px] font-gilroy text-[16px] text-[#E8EDFF] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E8EDFF]"
            >
              Закрыть ×
            </button>
            <Image
              src={photos[openedPhoto].src}
              alt={photos[openedPhoto].alt}
              width={540}
              height={780}
              sizes="(max-width: 600px) 90vw, 540px"
              className="max-h-[78vh] h-auto w-auto max-w-full object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}
