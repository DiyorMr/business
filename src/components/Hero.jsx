import { MapPin, PhoneCall } from "lucide-react";
import { FaBars, FaShoppingCart } from "react-icons/fa";

const Hero = () => {
    return (
        <section className="bg-[url('/img/hero.svg')] bg-cover bg-center">
            <div>
                <div className="max-w-[1300px] mx-auto px-4">
                    <div className="flex items-center justify-between py-6">
                        <div className="flex items-center gap-5">
                            <img src="/img/logo.svg" alt="Logo" />
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
                                <img src="/img/telegramm.svg" alt="Telegram" />
                                <img src="/img/whatsapp.svg" alt="WhatsApp" />
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
            </div>
        </section>
    );
};

export default Hero;
