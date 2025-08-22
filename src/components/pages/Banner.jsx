const Banner = () => {
    return (
        <div className="max-w-7xl my-20 mx-4 md:mx-auto bg-gradient-to-r from-black to-[#2c2c2c] rounded-lg flex flex-col md:flex-row items-center justify-between p-6 md:p-12 text-white shadow-lg">
            {/* Left side (text) */}
            <div className="flex-1 text-center md:text-left">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-snug">
                    <span className="text-orange-500">Не откладывайте</span> <br />
                    <span className="text-white">автоматизацию бизнеса</span>
                </h2>
                <p className="text-gray-300 mt-4 text-sm sm:text-base md:text-lg max-w-md mx-auto md:mx-0">
                    Повышeте продажи, сократите расходы и упростите управление уже в этом
                    месяце.
                </p>

                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 mt-6">
                    <button className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-md transition">
                        ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ
                    </button>
                    <p className="text-xs sm:text-sm text-gray-300 max-w-[250px]">
                        Бесплатно разберем ваш бизнес и подберем выгодное решение!
                    </p>
                </div>
            </div>

            {/* Right side (image) */}
            <div className="mt-8 md:mt-0 flex justify-center md:justify-end w-full md:w-auto">
                <img
                    src="./img/terminal.svg"
                    alt="Payment Terminal"
                    className="rounded-lg w-48 sm:w-64 md:w-80 shadow-md"
                />
            </div>
        </div>
    );
};

export default Banner;
