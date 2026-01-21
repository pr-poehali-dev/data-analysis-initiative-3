import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    id: 1,
    question: "Как забронировать баню?",
    answer:
      "Выберите баню, укажите дату и время, заполните контактные данные. После оплаты вы получите подтверждение на электронную почту и SMS. Всё занимает меньше минуты.",
  },
  {
    id: 2,
    question: "Можно ли отменить или перенести бронь?",
    answer:
      "Да, вы можете отменить или перенести бронь за 24 часа до посещения без потери оплаты. При отмене позже возвращается 50% стоимости. Условия могут отличаться в зависимости от бани.",
  },
  {
    id: 3,
    question: "Какие способы оплаты доступны?",
    answer:
      "Мы принимаем оплату банковскими картами, СБП, Apple Pay и Google Pay. Также можно оплатить на месте в бане (если эта опция доступна от заведения).",
  },
  {
    id: 4,
    question: "Что включено в стоимость брони?",
    answer:
      "В стоимость включена аренда бани на указанное время. Дополнительные услуги (веники, простыни, чай, мангал) оплачиваются отдельно. Подробности указаны на странице каждой бани.",
  },
  {
    id: 5,
    question: "Как найти баню в моём городе?",
    answer:
      "Введите название города в поисковой строке или выберите из списка доступных городов. Система покажет все бани в выбранном городе с актуальными ценами и доступностью.",
  },
  {
    id: 6,
    question: "Могу ли я оставить отзыв?",
    answer:
      "Да! После посещения бани вы получите ссылку для оценки и отзыва. Ваше мнение помогает другим пользователям сделать правильный выбор и улучшает качество сервиса.",
  },
]

export default function Faq() {
  const [openItem, setOpenItem] = useState<number | null>(null)

  const toggleItem = (id: number) => {
    setOpenItem(openItem === id ? null : id)
  }

  return (
    <section id="faq" className="my-20">
      <div className="card p-8 md:p-10 shadow-lg">
        <h2 className="text-black dark:text-white mb-6 text-3xl md:text-4xl lg:text-5xl font-medium leading-tight">
          Популярные
          <span className="block text-[#7A7FEE] dark:text-[#7A7FEE]">вопросы</span>
        </h2>
        <p className="mb-8 max-w-2xl text-gray-700 dark:text-gray-300">
          Не нашли ответ на свой вопрос? Напишите нам, и мы обязательно поможем!
        </p>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.id} className="border-b pb-4 border-gray-300 dark:border-gray-700">
              <button
                onClick={() => toggleItem(faq.id)}
                className="flex justify-between items-center w-full text-left py-2 font-medium text-black dark:text-white hover:text-[#7A7FEE] dark:hover:text-[#7A7FEE] transition-colors"
                aria-expanded={openItem === faq.id}
                aria-controls={`faq-answer-${faq.id}`}
              >
                <span className="font-medium">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 transition-transform ${openItem === faq.id ? "rotate-180 text-[#7A7FEE]" : ""}`}
                />
              </button>
              {openItem === faq.id && (
                <div id={`faq-answer-${faq.id}`} className="mt-2 text-gray-700 dark:text-gray-300">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}