const ArticleCard = () => {
    const ArticleCard = [
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
    ]
    return (
        <div className="bg-[#F5F5F5] my-30">
            <h1 className="text-4xl font-semibold text-center pt-30">Полезные статьи для бизнеса</h1>
            <div className="max-w-[1200px] mx-auto mt-10 grid grid-cols-3 gap-5 ">
                {
                    ArticleCard
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
                <button className="rounded-[10px] bg-[#F28E35] text-white py-5 px-10 cursor-pointer">открыть все статьи</button>
            </div>
        </div>
    )
}

export default ArticleCard
