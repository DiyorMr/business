import { MapPin, PhoneCall } from "lucide-react";
import { FaBars, FaShoppingCart } from "react-icons/fa";

const Hero = () => {
    const data = [
        {
            title: "Полный цикл работ",
            items: [
                "Консультация, подбор решений, поставка оборудования",
                "Установка, настройка, обучение сотрудников",
                "Поддержка 24/7 после запуска",
            ],
        },
        {
            title: "Эффект сразу после внедрения",
            items: [
                "Увеличение выручки за счет оптимизации процессов",
                "Ускорение работы на кассе и складе",
                "Контроль расходов и запасов",
            ],
        },
        {
            title: "Подтвержденный опыт",
            items: [
                "Более 8 лет работы",
                "Сотни успешно автоматизированных объектов: магазины, кафе, рестораны, фастфуд",
                "Гарантия на работы",
            ],
        },
    ];

    const img = [
        {
            src: "/img/img1.svg",
            text: "Кафе, бары, рестораны",
        },
        {
            src: "/img/img2.svg",
            text: "Продуктовые магазины и магазины розничной торговли",
        },
        {
            src: "/img/img3.svg",
            text: "Фастфуд, бистро, рестораны быстрого питания",
        },
        {
            src: "/img/img4.svg",
            text: "Сфера услуг: салоны красоты, фитнес-клубы, медицинские центры",
        },
    ];

    return (
        <>
            <section className="bg-[url('/img/hero.svg')] bg-cover bg-center">
                <div className="max-w-[1300px] mx-auto px-4">
                    <div className="flex items-center justify-between py-6">
                        <div className="flex items-center gap-5">
                            <a href="#">
                                <img src="/img/logo.svg" alt="Logo" />
                            </a>
                            <h1 className="text-[#F28E35] text-sm md:text-base font-normal w-[160px]">
                                Автоматизация бизнеса под ключ
                            </h1>
                        </div>

                        <div className="flex items-center gap-6">
                            <div className="flex items-center gap-2 text-white">
                                <MapPin className="text-red-700" />
                                <select className="bg-transparent text-white outline-none">
                                    <option className="text-black">г. Сочи</option>
                                    <option className="text-black">Москва</option>
                                    <option className="text-black">Санкт-Петербург</option>
                                    <option className="text-black">Екатеринбург</option>
                                    <option className="text-black">Новосибирск</option>
                                    <option className="text-black">Казань</option>
                                </select>
                            </div>

                            <div className="flex items-center gap-2">
                                <a
                                    href="https://t.me/mvdiyor"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img src="/img/telegramm.svg" alt="@mvdiyor" />
                                </a>
                                <a
                                    href="https://whatsapp/mvdiyor"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img src="/img/whatsapp.svg" alt="WhatsApp" />
                                </a>

                                <div className="flex items-center gap-2 border border-white rounded-md px-2 py-2">
                                    <PhoneCall className="text-white text-sm" />
                                    <span className="text-white text-sm">+7 (958) 111 02-87</span>
                                </div>
                            </div>

                            <div className="relative bg-[#F28E35] w-10 h-10 rounded-md flex items-center justify-center">
                                <FaShoppingCart className="text-white text-lg" />
                                <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                                    0
                                </span>
                            </div>

                            <div className="bg-white w-10 h-10 rounded-md flex items-center justify-center">
                                <FaBars className="text-black text-lg" />
                            </div>
                        </div>
                    </div>

                    <div className="text-white flex items-center justify-between">
                        <select>
                            <option>Автоматизация</option>
                            <option>Автоматизация</option>
                            <option>Автоматизация</option>
                        </select>

                        <select>
                            <option>Услуги</option>
                            <option>Услуги</option>
                            <option>Услуги</option>
                        </select>

                        <select>
                            <option>Программное обеспечение</option>
                            <option>Программное обеспечение</option>
                            <option>Программное обеспечение</option>
                        </select>

                        <ul className="flex items-center justify-between gap-16">
                            <li>
                                <a href="#">Каталог</a>
                            </li>
                            <li>
                                <a href="#">О компании</a>
                            </li>
                            <li>
                                <a href="#">Портфолио</a>
                            </li>
                            <li>
                                <a href="#">Блог</a>
                            </li>
                            <li>
                                <a href="#">Контакты</a>
                            </li>
                        </ul>
                    </div>

                    <div className="py-20 flex flex-col md:flex-row items-center justify-between gap-10">
                        <div className="text-white max-w-lg">
                            <h2 className="text-4xl font-bold mb-4 leading-snug">
                                <span className="text-[#F28E35]">АВТОМАТИЗАЦИЯ</span> БИЗНЕСА
                                ПОД КЛЮЧ В СОЧИ
                            </h2>
                            <p className="mb-6 text-lg">
                                Увеличим прибыль и сократим расходы за 14 дней!
                            </p>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>Для кафе, ресторанов, магазинов, фастфуда и сферы услуг</li>
                                <li>Быстро, без простоев, с обучением персонала</li>
                                <li>Комплект оборудования + настройка + сопровождение</li>
                                <li>Работаем с проверенным ПО: iiko и Saby Retail</li>
                            </ul>
                            <div className="mt-8 flex gap-4">
                                <button className="bg-white text-black font-semibold py-3 px-6 rounded-lg">
                                    ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ
                                </button>
                                <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg">
                                    БЕСПЛАТНЫЙ РАСЧЕТ
                                </button>
                            </div>
                        </div>

                        <div className="relative">
                            <img src="/img/mask.svg" alt="POS machine" className="max-w-md" />
                            <p className="absolute top-1 left-32 text-white bg-red-600 rounded-2xl px-4 py-1 shadow-red-700 shadow-md">
                                от 00 000 ₽
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <div className="m-30">
                <h1 className="font-semibold text-center text-4xl mb-10">
                    Почему выбирают нас
                </h1>
                <div className="grid md:grid-cols-3 gap-8 text-gray-900 py-10">
                    {data.map((block, index) => (
                        <div key={index} className="flex flex-col gap-4">
                            <div className="w-10 h-2 bg-orange-500 rounded"></div>
                            <h3 className="text-lg text-orange-500 font-bold">
                                {block.title}
                            </h3>
                            <ul className="list-disc list-inside space-y-2 text-base text-gray-800">
                                {block.items.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            <div className="m-30">
                <h1 className="font-semibold text-center text-4xl mb-10">
                    Для кого мы работаем
                </h1>
                <div className="flex">
                    {img.map((item, index) => (
                        <div key={index} className="">
                            <img className="w-70 h-80" src={item.src} alt="img" />
                            <p className="text-base text-gray-700 pt-4">{item.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Hero;
