const CardInfo = () => {
    return (
        <div className="max-w-[1300px] mx-auto my-30 bg-[#1c1c1c] rounded-lg flex flex-col md:flex-row overflow-hidden mb-10 md:mb-20 p-6 md:p-12">
            <div className="w-full md:w-1/2 flex items-center justify-center mb-6 md:mb-0">
                <img
                    src="./img/card.svg"
                    alt="POS"
                    className="w-52 sm:w-72 md:w-80 lg:w-[350px] object-contain"
                />
            </div>
            <div className="w-full md:w-1/2 md:pl-8 text-white space-y-5 flex flex-col justify-center">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold leading-snug">
                    Остались вопросы?
                </h2>
                <p className="text-gray-300 text-sm sm:text-base">
                    Свяжитесь с нами прямо сейчас и получите бесплатную консультацию
                </p>
                <div className="flex items-center gap-3 sm:gap-4 flex-wrap">
                    <a href="#" className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center bg-sky-500 hover:bg-sky-600">
                        <img src="https://cdn-icons-png.flaticon.com/512/2111/2111646.png" alt="Telegram" className="w-5 h-5" />
                    </a>
                    <a href="#" className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center bg-green-500 hover:bg-green-600">
                        <img src="https://cdn-icons-png.flaticon.com/512/733/733585.png" alt="WhatsApp" className="w-5 h-5" />
                    </a>
                    <a href="#" className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center bg-gray-100 hover:bg-gray-300">
                        <img src="https://cdn-icons-png.flaticon.com/512/597/597177.png" alt="Phone" className="w-5 h-5" />
                    </a>
                    <a href="#" className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center bg-gray-100 hover:bg-gray-300">
                        <img src="https://cdn-icons-png.flaticon.com/512/561/561127.png" alt="Email" className="w-5 h-5" />
                    </a>
                </div>
                <p className="text-white text-xs sm:text-sm">
                    Выберите удобный способ связи или оставьте заявку в форме ниже
                </p>
                <div className="flex flex-col sm:flex-row items-center gap-3 w-full">
                    <input
                        type="text"
                        placeholder="Ваш номер телефона"
                        className="flex-1 w-full p-3 bg-white rounded-md text-black focus:outline-none text-sm sm:text-base"
                    />
                    <button className="w-full sm:w-auto bg-red-600 hover:bg-red-700 px-5 sm:px-6 py-3 rounded-md font-semibold text-sm sm:text-base">
                        ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ
                    </button>
                </div>
                <div className="flex items-start gap-2 text-xs text-gray-300">
                    <input type="checkbox" className="mt-1" />
                    <span>
                        Отправляя персональные данные я соглашаюсь с политикой конфиденциальности сайта
                    </span>
                </div>
            </div>
        </div>
    );
};

export default CardInfo;
