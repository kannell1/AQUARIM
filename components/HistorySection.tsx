import Image from "next/image";

export function HistorySection() {
  return (
    <section
      id="history"
      aria-labelledby="history-heading"
      className="relative mx-auto w-[calc(100%-48px)] max-w-[1200px] scroll-mt-[34px] pb-[120px] pt-[90px] sm:pb-[150px] lg:w-[calc(100%-80px)] lg:pt-[86px] lg:pb-[155px]"
    >
      {/* На десктопе первая и вторая строки заголовка выровнены, как в макете. */}
      <div className="flex flex-col gap-[22px] sm:gap-[15px] lg:flex-row lg:items-baseline lg:gap-[78px]">
        <span className="shrink-0 text-[11px] font-medium uppercase tracking-[0.06em] text-[#E8EDFF] lg:w-[122px]">
          О ресторане
        </span>
        <h2
          id="history-heading"
          className="font-oceanic text-[clamp(38px,8.3vw,68px)] font-medium uppercase leading-[1.05] tracking-[-0.012em] lg:text-[clamp(52px,5.55vw,76px)]"
        >
          История рыбного
        </h2>
      </div>
      <p className="mt-0 font-oceanic text-[clamp(38px,8.3vw,68px)] font-medium uppercase leading-[1.06] tracking-[-0.012em] lg:text-[clamp(52px,5.55vw,76px)]">
        Искушения
      </p>

      <div className="mt-[32px] grid items-start gap-[42px] lg:mt-[21px] lg:grid-cols-[minmax(0,1fr)_minmax(0,590px)] lg:gap-[88px]">
        <div className="max-w-[510px] pt-[3px] lg:pt-[15px]">
          <p className="text-[17px] leading-[1.4] sm:text-[18px]">
            Наша история началась с мечты о создании места, где каждый может
            насладиться непревзойденным вкусом свежей рыбы прямо у себя дома.
            Мы поставили перед собой задачу предложить нечто большее, чем просто
            блюда из рыбы — мы хотели подарить вам настоящее морское путешествие.
          </p>

          <p className="mt-[22px] text-[17px] leading-[1.4] sm:text-[18px]">
            Мы — это место, где каждая деталь имеет значение.
          </p>

          <a
            href="#top"
            className="mt-[42px] inline-flex h-[72px] w-[285px] max-w-full items-center justify-center border border-[#496192] bg-transparent text-[17px] leading-none text-[#E8EDFF] transition-colors hover:bg-[#496192]/25"
          >
            Узнать больше
          </a>
        </div>

        <Image
          src="/images/chef-aquarium.png"
          alt="Шеф-повар ресторана AQUARIM на фоне аквариума с рыбами"
          width={590}
          height={374}
          sizes="(min-width: 1024px) 590px, 100vw"
          className="h-auto w-full object-cover"
        />
      </div>
    </section>
  );
}
