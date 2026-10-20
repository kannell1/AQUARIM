"use client";

import Image from "next/image";
import { useState, type FormEvent } from "react";

const inputClasses =
  "mt-[9px] h-[64px] w-full min-w-0 rounded-none border border-[#E8EDFF]/80 bg-transparent px-[15px] font-gilroy text-[19px] text-[#E8EDFF] outline-none transition-colors focus:border-[#E9663D] focus-visible:ring-1 focus-visible:ring-[#E9663D] [color-scheme:dark]";

const labelClasses = "block font-gilroy text-[18px] leading-[1.2] text-[#E8EDFF]";

export function BookingSection() {
  const [formMessage, setFormMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // В проекте пока нет сервера бронирования. Не сообщаем ложное
    // подтверждение реального резерва — данные никому не отправляются.
    setFormMessage(
      "Это демонстрационная форма. Для настоящего бронирования нужно подключить отправку заявки ресторану.",
    );
  }

  return (
    <section
      id="booking"
      aria-labelledby="booking-heading"
      className="relative isolate scroll-mt-[40px] pb-[110px] pt-[65px] lg:pb-[140px] lg:pt-[65px]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_10%_94%,#49619240_0%,transparent_50%)]"
      />

      <div className="mx-auto w-[calc(100%-32px)] max-w-[1660px] sm:w-[calc(100%-48px)] lg:w-[calc(100%-96px)] xl:w-[calc(100%-200px)] xl:px-[24px]">
        <div className="flex flex-col gap-[16px] lg:flex-row lg:items-start lg:gap-0">
          <span className="shrink-0 font-gilroy text-[12px] font-medium uppercase leading-[1.2] text-[#E8EDFF] lg:w-[215px] lg:pt-[25px] lg:text-[13px]">
            Бронь
          </span>
          <h2
            id="booking-heading"
            className="font-oceanic text-[clamp(34px,7.6vw,56px)] font-medium uppercase leading-[1.035] tracking-[-0.006em] text-[#E8EDFF] lg:text-[clamp(43px,3.9vw,62px)]"
          >
            <span className="block">Забронируйте свое место</span>
            <span className="block lg:-ml-[215px]">за лучшим столом</span>
          </h2>
        </div>

        <div className="mt-[56px] grid grid-cols-1 items-start gap-[45px] xl:mt-[65px] xl:grid-cols-[minmax(0,1.07fr)_minmax(0,1fr)] xl:gap-[clamp(32px,4.2vw,64px)]">
          <form onSubmit={handleSubmit} className="min-w-0 font-gilroy" noValidate={false}>
            <div className="grid grid-cols-1 gap-[20px] sm:grid-cols-2">
              <label className={labelClasses}>
                Имя:
                <input type="text" name="guestName" autoComplete="name" required maxLength={90} className={inputClasses} />
              </label>
              <label className={labelClasses}>
                Телефон:
                <input type="tel" name="phone" autoComplete="tel" required maxLength={35} className={inputClasses} />
              </label>
            </div>

            <div className="mt-[24px] grid grid-cols-1 gap-[20px] sm:grid-cols-3">
              <label className={labelClasses}>
                Дата:
                <input type="date" name="date" required className={inputClasses} />
              </label>
              <label className={labelClasses}>
                Время:
                <input type="time" name="time" required className={inputClasses} />
              </label>
              <label className={labelClasses}>
                Кол-во гостей:
                <input type="number" name="guests" min={1} max={30} required className={inputClasses} />
              </label>
            </div>

            <label className={`${labelClasses} mt-[24px]`}>
              Ваши пожелания:
              <textarea
                name="wishes"
                rows={5}
                maxLength={1200}
                className="mt-[9px] block h-[188px] w-full resize-none rounded-none border border-[#E8EDFF]/80 bg-transparent px-[15px] py-[12px] font-gilroy text-[19px] text-[#E8EDFF] outline-none transition-colors focus:border-[#E9663D] focus-visible:ring-1 focus-visible:ring-[#E9663D]"
              />
            </label>

            <button
              type="submit"
              className="mt-[38px] flex h-[78px] w-full items-center justify-center border-0 bg-[#E9663D] px-[20px] font-gilroy text-[23px] font-medium text-[#E8EDFF] transition-opacity hover:opacity-85 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E8EDFF]"
            >
              Забронировать
            </button>
            {formMessage && (
              <p role="status" className="mt-[18px] max-w-[610px] font-gilroy text-[17px] leading-[1.35] text-[#E8EDFF]">
                {formMessage}
              </p>
            )}
          </form>

          <div className="relative w-full overflow-hidden">
            <Image
              src="/images/fish-dish.png"
              alt="Рыбное блюдо на столе у аквариума ресторана AQUARIM"
              width={550}
              height={470}
              sizes="(min-width: 1440px) 590px, (min-width: 1024px) 42vw, 100vw"
              className="block aspect-[590/500] h-auto w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
