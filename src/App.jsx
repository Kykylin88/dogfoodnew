
import testData from "./assents/data.json";
import Card from "./components/Card/Card";
import Header from "./components/Header";
import { Footer } from "./components/Header";
const promoData = ["=)", "*?*", ")("];

const Promo = (props) => {
    return (
        <div className="promo__block">
            <div className="promo__img" />
            <p className="promo__text">{props.text || "-"}</p>
        </div>

    )
}


const App = () => {
    const smiles = []
    for (let i = 0; i < promoData.length; i++) {
        if (i % 2) {
            smiles.push(<Promo key={`sm${i}`} text={promoData[i]}/>)
        }
    }

    return (
        <>
            <Header />
            <div>
                <h1>first page</h1>
                <div className="container" >
                    {testData.map((pro, i) => (<Card key={i} img={pro.pictures}
                        name={pro.name} price={pro.price} />))}
                    {promoData.map(el => <Promo key={`${el}1`} text={el} />)}
                    {promoData.map(el => <Promo key={`${el}2`} text={el} />)}
                    <Promo text={promoData[1]} />

                    <Promo text={promoData[2]} />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default App; 