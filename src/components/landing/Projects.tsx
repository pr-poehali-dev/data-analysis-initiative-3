import Icon from '@/components/ui/icon'

const projects = [
  {
    id: 1,
    slug: "banya-na-drovih",
    title: "Баня на Дровах",
    location: "Москва, ул. Лесная, 15",
    capacity: "до 10 человек",
    price: "от 2500 ₽/час",
    features: ["Русская баня", "Бассейн", "Караоке", "Мангал"],
    rating: 4.8,
    mainImage: "/portfolio-images/saas-dashboard-1.jpg",
  },
  {
    id: 2,
    slug: "altai-spa",
    title: "Алтай SPA",
    location: "Санкт-Петербург, Невский пр., 88",
    capacity: "до 6 человек",
    price: "от 3000 ₽/час",
    features: ["Финская сауна", "Хамам", "Массаж", "Чайная зона"],
    rating: 4.9,
    mainImage: "/portfolio-images/ecommerce-interface-1.jpg",
  },
  {
    id: 3,
    slug: "sibir-complex",
    title: "Сибирь Комплекс",
    location: "Казань, ул. Баумана, 42",
    capacity: "до 15 человек",
    price: "от 3500 ₽/час",
    features: ["Русская баня", "Купель", "Бильярд", "Банкетный зал"],
    rating: 4.7,
    mainImage: "/portfolio-images/ai-platform-1.jpg",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="my-20">
      <h2 className="text-black dark:text-white mb-6 text-3xl md:text-4xl lg:text-5xl font-medium leading-tight">
        Популярные
        <span className="block text-[#7A7FEE] dark:text-[#7A7FEE]">бани</span>
      </h2>
      <p className="mb-12 max-w-2xl text-gray-700 dark:text-gray-300">
        От классических русских бань до современных SPA-комплексов.
        Выберите идеальное место для отдыха и забронируйте за несколько кликов.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.slug}
            className="card overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-[1.02] cursor-pointer"
          >
            <div className="relative overflow-hidden">
              <img
                src={project.mainImage}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-3 right-3 bg-white dark:bg-gray-800 px-2 py-1 rounded-lg flex items-center gap-1">
                <Icon name="Star" className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                <span className="text-sm font-semibold text-black dark:text-white">{project.rating}</span>
              </div>
            </div>
            <div className="p-4 md:p-6">
              <h3 className="text-xl font-semibold text-black dark:text-white mb-2">{project.title}</h3>
              <div className="flex items-start gap-1 mb-2">
                <Icon name="MapPin" className="w-4 h-4 text-gray-500 mt-0.5 flex-shrink-0" />
                <p className="text-gray-600 dark:text-gray-400 text-sm">{project.location}</p>
              </div>
              <div className="flex items-center gap-1 mb-3">
                <Icon name="Users" className="w-4 h-4 text-gray-500" />
                <p className="text-gray-600 dark:text-gray-400 text-sm">{project.capacity}</p>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.features.slice(0, 3).map((feature, index) => (
                  <span key={index} className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-2 py-1 rounded">
                    {feature}
                  </span>
                ))}
              </div>
              <div className="flex items-center justify-between">
                <p className="text-lg font-bold text-[#7A7FEE]">{project.price}</p>
                <button className="inline-flex items-center text-[#7A7FEE] text-sm font-medium group">
                  Забронировать
                  <Icon name="ArrowRight" className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <a href="#contact" className="btn-primary">
          Все бани
        </a>
      </div>
    </section>
  )
}