const About = () => {
    const card = [
        {
            img: "./img/images.svg",
            title: "Автоматизация кафе и ресторанов на программе iiko",
            description:
                "Ускорим обслуживание, повысим средний чек, контроль склада и персонала",
        },
        {
            img: "./img/images.svg",
            title: "Автоматизация кафе и ресторанов на программе iiko",
            description:
                "Ускорим обслуживание, повысим средний чек, контроль склада и персонала",
        },
        {
            img: "./img/images.svg",
            title: "Автоматизация кафе и ресторанов на программе iiko",
            description:
                "Ускорим обслуживание, повысим средний чек, контроль склада и персонала",
        },
        {
            img: "./img/images.svg",
            title: "Автоматизация кафе и ресторанов на программе iiko",
            description:
                "Ускорим обслуживание, повысим средний чек, контроль склада и персонала",
        },
        {
            img: "./img/images.svg",
            title: "Автоматизация кафе и ресторанов на программе iiko",
            description:
                "Ускорим обслуживание, повысим средний чек, контроль склада и персонала",
        },
        {
            img: "./img/images.svg",
            title: "Автоматизация кафе и ресторанов на программе iiko",
            description:
                "Ускорим обслуживание, повысим средний чек, контроль склада и персонала",
        },
        {
            img: "./img/images.svg",
            title: "Автоматизация кафе и ресторанов на программе iiko",
            description:
                "Ускорим обслуживание, повысим средний чек, контроль склада и персонала",
        },
        {
            img: "./img/images.svg",
            title: "Автоматизация кафе и ресторанов на программе iiko",
            description:
                "Ускорим обслуживание, повысим средний чек, контроль склада и персонала",
        },
    ];

    return (
        <div className="bg-gray-100">
            <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#252322] text-center mb-8 md:mb-12">
                    Наши решения
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6 md:gap-8">
                    {card.map((item, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center text-center bg-white rounded-xl shadow-sm hover:shadow-xl p-5 sm:p-6 transition-transform duration-300 hover:-translate-y-2"
                        >
                            <img
                                src={item.img}
                                alt="images"
                                className="mb-4 w-14 h-14 sm:w-16 sm:h-16 object-contain"
                            />
                            <h3 className="text-base sm:text-lg font-medium text-[#252322] mb-2">
                                {item.title}
                            </h3>
                            <p className="text-sm sm:text-base text-gray-500">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default About;
