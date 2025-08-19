const AutomationVideo = () => {
    return (
        <section className="max-w-[1300px] mx-auto px-4 py-20 grid md:grid-cols-2 gap-10 items-center">
            <div className="w-full aspect-video rounded-lg overflow-hidden shadow-lg">
                <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                >
                </iframe>
            </div>
            <div className="flex flex-col gap-5">
                <h2 className="text-2xl font-bold text-gray-900">
                    Как проходит автоматизация бизнеса
                </h2>
                <p className="text-gray-700 text-base">
                    Как автоматизация помогает сократить расходы и увеличить доход уже с первых месяцев работы.
                    Смотрите в удобном формате - YouTube, Rutube, VK Видео
                </p>
                <div className="flex items-center gap-4 flex-wrap">
                    <a href="https://youtube.com">
                        <img src="./img/pauza.svg" alt="img" />
                    </a>
                    <a href="https://rutube.com">
                        <img src="./img/rvideo.svg" alt="img" />
                    </a>
                    <a href="https://vkvideo.ru/">
                        <img src="./img/video.svg" alt="img" />
                    </a>
                    <a href="https://www.youtube.com/embed/dQw4w9WgXcQ" className="bg-orange-500 hover:bg-orange-600 text-white font-semibold cursor-pointer px-6 py-3 rounded-lg">
                        ОТКРЫТЬ СТАТЬЮ
                    </a>
                    <span className="text-gray-600 text-sm ">
                        Читайте краткую выжимку в статье
                    </span>
                </div>
            </div>
        </section>
    );
};

export default AutomationVideo;
