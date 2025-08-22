const PortfolioCard = () => {
    const portfolio = [
        {
            img: "img/error2.svg",
            title: "Название кейса",
            text: "Открыть кейс >",
        },
        {
            img: "img/error2.svg",
            title: "Название кейса",
            text: "Открыть кейс >",
        },
        {
            img: "img/error2.svg",
            title: "Название кейса",
            text: "Открыть кейс >",
        },
    ];

    return (
        <div className="max-w-[1200px] mx-auto mt-10 px-4">
            <h1 className="text-2xl md:text-4xl font-semibold text-center">
                Реальные результаты наших клиентов
            </h1>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {portfolio.map((item, index) => (
                    <div
                        key={index}
                        className="card bg-white rounded-lg shadow hover:shadow-lg transition p-4"
                    >
                        <img
                            src={item.img}
                            alt="img"
                            className="w-full h-48 object-cover rounded-md"
                        />
                        <h1 className="text-lg md:text-xl font-medium pt-4">{item.title}</h1>
                        <p className="text-base font-normal opacity-70">{item.text}</p>
                    </div>
                ))}
            </div>
            <div className="flex items-center justify-center pt-10 pb-16">
                <button className="rounded-[10px] bg-[#D72F29] text-white py-3 px-6 md:py-5 md:px-10 cursor-pointer hover:bg-[#b22621] transition">
                    открыть портфолио
                </button>
            </div>
        </div>
    );
};

export default PortfolioCard;
