const ArticleCard = () => {
    const articles = [
        {
            img: "img/error2.svg",
            title: "Название статьи",
            text: "Читать статью>",
        },
        {
            img: "img/error2.svg",
            title: "Название статьи",
            text: "Читать статью>",
        },
        {
            img: "img/error2.svg",
            title: "Название статьи",
            text: "Читать статью>",
        },
    ];

    return (
        <div className="bg-[#F5F5F5] py-16 px-4">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center">
                Полезные статьи для бизнеса
            </h1>
            <div className="max-w-[1200px] mx-auto mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {articles.map((item, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-xl shadow-md p-5 hover:shadow-lg transition duration-300"
                    >
                        <img src={item.img} alt="img" className="w-full h-40 object-contain" />
                        <h1 className="text-base md:text-lg font-medium pt-4">
                            {item.title}
                        </h1>
                        <p className="text-sm md:text-base font-normal opacity-60">
                            {item.text}
                        </p>
                    </div>
                ))}
            </div>
            <div className="flex items-center justify-center mt-12">
                <button className="rounded-[10px] bg-[#F28E35] text-white py-3 px-6 sm:py-4 sm:px-8 md:py-5 md:px-10 text-sm sm:text-base font-medium hover:bg-[#e07c28] transition">
                    открыть все статьи
                </button>
            </div>
        </div>
    );
};

export default ArticleCard;
