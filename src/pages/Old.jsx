import {Link} from "react-router-dom";

import Card from "../components/Card/Card";
import Promo from "../components/Promo/Promo";

const promoData = ["=)", "*?*", ")("];

const OldPage = ({ searchText, goods }) => {
    return <>
        <h1>Старые данные</h1>
        <nav>
                    <Link to="/">стр 1</Link>
                    <Link to="/catalog">стр 2</Link>
                    <Link to="/old">стр 3</Link>
                </nav>
        <div className="container" >
            {searchText && <p className="search-result"> {searchText} </p>}
            {goods.map((pro, i) => (<Card key={i} img={pro.pictures}
                name={pro.name} price={pro.price} />
            ))}
            {/*{promoData.map(el => <Promo key={el} text={el} />)}*/}
        </div>

    </>
}
export default OldPage;