import Banner from "./pages/Banner"
import BusinessCard from "./pages/BusinessCard"
import PortfolioCard from "./pages/PortfolioCard"

const Business = () => {
    return (
        <div>
            <Banner />
            <div className="text-center">
                <h1 className="text-4xl font-semibold text-center">Онлайн-витрина оборудования</h1>
                <div className="text-center mt-4 w-[847px] mx-auto mb-15">
                    <p className="text-lg font-normal">Готовые решения для автоматизации бизнеса: POS-терминалы, сенсорные моноблоки, чековые и
                        этикеточные принтеры, кассы самообслуживания, сканеры штрих-кодов и многое другое.
                    </p>
                </div>
            </div>
            <BusinessCard />
            <PortfolioCard />
        </div>
    )
}

export default Business