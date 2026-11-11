import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Обработка персональных данных — AQUARIM",
  description: "Информация об обработке данных в форме бронирования AQUARIM.",
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto min-h-screen w-[calc(100%-32px)] max-w-[800px] pb-[100px] pt-[50px] font-gilroy text-[#E8EDFF] sm:w-[calc(100%-48px)]">
      <Link href="/" className="font-oceanic text-[24px]">AQUARIM</Link>
      <h1 className="mt-[65px] font-oceanic text-[clamp(32px,6vw,60px)] uppercase leading-[1.05]">Обработка персональных данных</h1>
      <div className="mt-[35px] flex flex-col gap-[22px] text-[16px] leading-[1.6] max-md:text-[14px]">
        <p>При заполнении формы бронирования посетитель сообщает имя, номер телефона, дату и время посещения, количество гостей и, по желанию, дополнительную информацию.</p>
        <p>Эти данные используются для получения и рассмотрения заявки на бронирование и для обратной связи с гостем. Заполнение формы не означает автоматического подтверждения бронирования.</p>
        <p>Для передачи заявки по электронной почте используется сервис EmailJS, которому передаются данные заполненной формы. Не указывайте в пожеланиях платёжные данные и другую конфиденциальную информацию.</p>
        <p>По вопросам обработки или удаления заявки обращайтесь к администрации ресторана по контактам, указанным на сайте.</p>
        <p className="text-[13px] text-[#E8EDFF]/80">Эта информационная страница — стартовый текст для учебного проекта. Перед использованием на реальном коммерческом сайте необходимо дополнить её сведениями о владельце, сроках хранения данных и иными обязательными положениями.</p>
      </div>
      <Link href="/#booking" className="mt-[36px] inline-flex border border-[#496192] px-[24px] py-[15px] text-[16px]">Вернуться к бронированию</Link>
    </main>
  );
}
