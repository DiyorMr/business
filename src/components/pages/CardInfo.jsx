const CardInfo = () => {
    return (
        <div className="max-w-[1300px] mx-auto bg-[#1c1c1c] rounded-lg flex flex-col md:flex-row overflow-hidden mb-30 p-20">
            <div className="w-full md:w-1/2 flex items-center justify-center">
                <img src="./img/card.svg" alt="POS" lassName="w-80"
                />
            </div>
            <div className="w-full md:w-1/2 p-8 text-white space-y-5 flex flex-col justify-center">
                <h2 className="text-2xl md:text-3xl font-bold">Остались вопросы?</h2>
                <p className="text-gray-300">
                    Свяжитесь с нами прямо сейчас и получите бесплатную консультацию
                </p>
                <div className="flex items-center gap-4">
                    <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center bg-sky-500 hover:bg-sky-600">
                        <img src="https://cdn-icons-png.flaticon.com/512/2111/2111646.png" alt="Telegram" className="w-5 h-5" />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center bg-green-500 hover:bg-green-600"                 >
                        <img src="https://cdn-icons-png.flaticon.com/512/733/733585.png" alt="WhatsApp" className="w-5 h-5" />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-100 hover:bg-gray-300">
                        <img src="https://cdn-icons-png.flaticon.com/512/597/597177.png" alt="Phone" className="w-5 h-5" />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-100 hover:bg-gray-300"                 >
                        <img src="https://cdn-icons-png.flaticon.com/512/561/561127.png" alt="Email" className="w-5 h-5" />
                    </a>
                </div>
                <p className="text-white text-sm">
                    Выберите удобный способ связи или оставьте заявку в форме ниже
                </p>
                <div className="flex flex-col sm:flex-row items-center gap-3">
                    <input
                        type="text"
                        placeholder="Ваш номер телефона"
                        className="flex-1 w-full p-3 bg-white rounded-md text-black focus:outline-none"
                    />
                    <button className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-md font-semibold">
                        ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ
                    </button>
                </div>
                <div className="flex items-start gap-2 text-xs text-white">
                    <input type="checkbox" className="mt-1" />
                    <span>
                        Отправляя персональные данные я соглашаюсь с политикой
                        конфиденциальности сайта
                    </span>
                </div>
            </div>
        </div>
    );
};

export default CardInfo;
