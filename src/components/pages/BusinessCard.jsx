const BusinessCard = () => {
    const products = [
        {
            img: "img/error.svg",
            title: "Название товара",
            text: "Категория товара",
            price: "00 000 ₽",
        },
        {
            img: "img/error.svg",
            title: "Название товара",
            text: "Категория товара",
            price: "00 000 ₽",
        },
        {
            img: "img/error.svg",
            title: "Название товара",
            text: "Категория товара",
            price: "00 000 ₽",
        },
        {
            img: "img/error.svg",
            title: "Название товара",
            text: "Категория товара",
            price: "00 000 ₽",
        },
    ];

    return (
        <>
            <div className="max-w-[1200px] mx-auto mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
                {products.map((item, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-lg shadow-md hover:shadow-lg transition p-4 flex flex-col items-center text-center"
                    >
                        <img
                            src={item.img}
                            alt="img"
                            className="w-28 h-28 object-contain"
                        />
                        <h1 className="text-base font-medium pt-4">{item.title}</h1>
                        <p className="text-sm text-gray-500">{item.text}</p>
                        <p className="text-lg font-semibold text-[#60CD50] mt-2">
                            {item.price}
                        </p>
                    </div>
                ))}
            </div>
            <div className="flex items-center justify-center pt-12 pb-20">
                <button className="rounded-[10px] bg-[#F28E35] hover:bg-[#e07a20] transition text-white py-3 px-6 md:py-5 md:px-10 text-sm md:text-base font-medium cursor-pointer">
                    открыть весь каталог
                </button>
            </div>
        </>
    );
};

export default BusinessCard;
