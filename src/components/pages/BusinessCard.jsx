const BusinessCard = () => {
    const BusinessCard = [
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
    ]
    return (
        <>
            <div className="max-w-[1200px] mx-auto mt-10 grid grid-cols-4 gap-5">
                {
                    BusinessCard.map((item, index) => (
                        <div key={index} className="card">
                            <img src={item.img} alt="img" />
                            <h1 className="text-base font-normal">{item.title}</h1>
                            <p className="text-base font-normal opacity-[0.5]">{item.text}</p>
                            <p className="text-lg font-semibold text-[#60CD50]">{item.price}</p>
                        </div>
                    ))
                }

            </div>
            <div className="flex items-center justify-center pt-15 pb-30">
                <button className="rounded-[10px] bg-[#F28E35] text-white py-5 px-10 cursor-pointer">открыть весь каталог</button>
            </div>
        </>
    )
}

export default BusinessCard