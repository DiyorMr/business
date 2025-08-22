const AutomationVideo = () => {
    return (
        <section className="max-w-[1300px] mx-auto px-4 py-16 grid lg:grid-cols-2 gap-10 items-center">
            {/* Video */}
            <div className="w-full aspect-video rounded-lg overflow-hidden shadow-lg">
                <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                ></iframe>
            </div>

            {/* Text part */}
            <div className="flex flex-col gap-5 text-center lg:text-left">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                    Как проходит автоматизация бизнеса
                </h2>
                <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                    Как автоматизация помогает сократить расходы и увеличить доход уже с первых месяцев работы.
                    Смотрите в удобном формате - YouTube, Rutube, VK Видео
                </p>

                {/* Buttons + Icons */}
                <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4 justify-center lg:justify-start items-center">
                    <a href="https://youtube.com">
                        <img src="./img/pauza.svg" alt="img" className="h-10 w-10 sm:h-12 sm:w-12" />
                    </a>
                    <a href="https://rutube.com">
                        <img src="./img/rvideo.svg" alt="img" className="h-10 w-10 sm:h-12 sm:w-12" />
                    </a>
                    <a href="https://vkvideo.ru/">
                        <img src="./img/video.svg" alt="img" className="h-10 w-10 sm:h-12 sm:w-12" />
                    </a>

                    <a
                        href="https://www.youtube.com/embed/dQw4w9WgXcQ"
                        className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg w-full sm:w-auto text-center"
                    >
                        ОТКРЫТЬ СТАТЬЮ
                    </a>
                </div>

                <span className="text-gray-600 text-sm text-center lg:text-left">
                    Читайте краткую выжимку в статье
                </span>
            </div>
        </section>
    );
};

export default AutomationVideo;
