const Promo = (props) => {
    return (
        <div className="promo__block">
            <div className="promo__img" />
            <p className="promo__text">{props.text || "-"}</p>
        </div>

    )
}


const App = () => {
    return (
        <div>
            <h1>first page</h1>
            <div className="container" >
                <Promo text="first" />
                <Promo text="first" />

                <Promo text="first" />

                <Promo text={3 + 3} />

                <Promo />
            </div>
        </div>
    )
}

export default App; 