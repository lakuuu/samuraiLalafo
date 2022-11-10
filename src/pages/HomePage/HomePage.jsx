import css from "./HomePage.module.css"
import house from "./house.png"

const HomePage = () => {
    return (
        <body>
            <h2 className={css.last}>Последние объявления</h2>
                <div className={css.ads}>
                    <div className={css.adOne}>
                        <img src={house} alt="house" />
                            <p>продается 6км дом в Бишкеке <br />
                                5500$
                            </p>
                            <button>купить</button>
                    </div>
                </div>
        </body>
    )
}

export default HomePage
