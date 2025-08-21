const PortfolioCard = () => {
        const PortfolioCard
            = [
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
            ]
        return (
            <>
                <div className="max-w-[1200px] mx-auto mt-10 grid grid-cols-3 gap-5">
                    {
                        PortfolioCard
                            .map((item, index) => (
                                <div key={index} className="card">
                                    <img src={item.img} alt="img" />
                                    <h1 className="text-base font-normal pt-4">{item.title}</h1>
                                    <p className="text-base font-normal opacity-[0.5]">{item.text}</p>
                                </div>
                            ))
                    }

                </div>
                <div className="flex items-center justify-center pt-15 pb-30">
                    <button className="rounded-[10px] bg-[#D72F29] text-white py-5 px-10 cursor-pointer">открыть весь каталог</button>
                </div>
            </>
        )
    }

export default PortfolioCard
