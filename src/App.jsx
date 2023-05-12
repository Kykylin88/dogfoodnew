const promoData = ["=)","*?*" ,")("]; 
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
             {promoData.map(el => <Promo text={el}/>) }
            </div>
        </div>
    )
}

export default App; 