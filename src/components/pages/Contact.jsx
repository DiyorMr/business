const Contact = () => {
    return (
        <footer class="bg-gray-50 text-gray-700 py-10">
            <div class="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-5 gap-8">

                <div class="space-y-4">
                    <div class="flex items-center gap-2">
                        <img src="./img/logo.svg" alt="Logo" class="w-12" />
                        <span class="text-orange-600 font-semibold leading-tight">
                            Автоматизация<br />бизнеса под ключ
                        </span>
                    </div>
                    <div class="space-y-2 text-sm">
                        <h4 class="font-semibold">Автоматизация</h4>
                        <ul class="space-y-1">
                            <li>Кафе и рестораны</li>
                            <li>Магазины и торговля</li>
                            <li>Фастфуд и бистро</li>
                            <li>Сфера услуг</li>
                        </ul>
                    </div>
                    <p class="text-xs text-gray-500">
                        © 2025 Вверх касса<br />
                        <a href="#" class="underline">Политика конфиденциальности</a>
                    </p>
                </div>
                <div class="space-y-2 text-sm">
                    <h4 class="font-semibold">Услуги</h4>
                    <ul class="space-y-1">
                        <li>Подключение к ЕГАИС</li>
                        <li>Подключение к Честному Знаку</li>
                        <li>Подключение ККО</li>
                        <li>Техподдержка</li>
                    </ul>
                    <h4 class="font-semibold pt-3">О нас</h4>
                    <ul class="space-y-1">
                        <li>О компании</li>
                        <li>Портфолио</li>
                        <li>Блог</li>
                        <li>Контакты</li>
                    </ul>
                </div>
                <div class="space-y-2 text-sm">
                    <h4 class="font-semibold">Программное обеспечение</h4>
                    <ul class="space-y-1">
                        <li>iiko</li>
                        <li>Saby Retail</li>
                    </ul>
                    <h4 class="font-semibold pt-3">Регионы</h4>
                    <ul class="space-y-1">
                        <li>Сочи</li>
                        <li>Краснодар</li>
                        <li>Ростов</li>
                        <li>Севастополь</li>
                    </ul>
                    <a href="#" class="text-gray-500 text-xs underline">Все регионы</a>
                </div>
                <div class="space-y-2 text-sm">
                    <h4 class="font-semibold">Социальные сети</h4>
                    <div class="flex gap-3 mt-2">
                        <a href="#" class="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 text-gray-600">
                            <img src="./img/w.svg" alt="VK" class="w-4 h-4" />
                        </a>
                        <a href="#" class="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 text-gray-600">
                            <img src="./img/t.svg" alt="Telegram" class="w-4 h-4" />
                        </a>
                        <a href="#" class="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 text-gray-600">
                            <img src="./img/ok.svg" alt="OK" class="w-4 h-4" />
                        </a>
                        <a href="#" class="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 text-gray-600">
                            <img src="./img/you.svg" alt="YouTube" class="w-4 h-4" />
                        </a>
                    </div>
                </div>
                <div class="space-y-2 text-sm">
                    <h4 class="font-semibold">Оборудование</h4>
                    <ul class="space-y-1">
                        <li>Каталог</li>
                        <li>Консультация</li>
                    </ul>
                    <h4 class="font-semibold pt-3">Контакты</h4>
                    <ul class="space-y-1">
                        <li>+7 (958) 111 02-87</li>
                        <li>info@avtomat-torg.ru</li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}
export default Contact