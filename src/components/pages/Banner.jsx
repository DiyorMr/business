const Banner = () => {
    return (
        <div className="max-w-7xl my-30 h-full mx-auto bg-gradient-to-r from-black to-[#2c2c2c] rounded-lg flex flex-col md:flex-row items-center justify-between md:p-12 text-white shadow-lg">
            <div className="flex-1">
                <h2 className="text-2xl md:text-3xl font-bold leading-snug">
                    <span className="text-orange-500">Не откладывайте</span> <br />
                    <span className="text-white">автоматизацию бизнеса</span>
                </h2>
                <p className="text-gray-300 mt-4 text-base md:text-lg max-w-md">
                    Повышeте продажи, сократите расходы и упростите управление уже в этом
                    месяце.
                </p>

                <div className="flex items-center gap-4 mt-6">
                    <button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-5 py-3 rounded-md transition">
                        ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ
                    </button>
                    <p className="text-sm text-gray-300 max-w-[220px]">
                        Бесплатно разберем ваш бизнес и подберем выгодное решение!
                    </p>
                </div>
            </div>
            <div className="mt-8 md:mt-0 bg-gradient-to-r">
                <img
                    src="./img/terminal.svg"
                    alt="Payment Terminal"
                    className="rounded-lg  md:w-80 shadow-md"
                />
            </div>
        </div>
    );
};

export default Banner;