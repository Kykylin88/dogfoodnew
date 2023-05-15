import { useState } from "react";
import testData from "./assents/data.json";
import Card from "./components/Card/Card";
import Promo from "./components/Promo/Promo";
import { Header, Footer } from "./components/General";
const promoData = ["=)", "*?*", ")("];

const App = () => {
    /*const user = localStorage.getItem("user");*/
    const [user, setUser] = useState(localStorage.getItem("user12"))

    const [goods, setGoods] = useState(testData)
    const [searchResult, setSearchResult] = useState("")
    return (
        <>

            <Header
                user={user}
                upd={setUser}
                searchArr={testData}
                setGoods={setGoods}
                setSearchResult= {setSearchResult}
                 />
            <div>
                {searchResult && <p className="search-result"> {searchResult} </p>}
                <div className="container" >
                    {goods.map((pro, i) => (<Card key={i} img={pro.pictures}
                        name={pro.name} price={pro.price} />
                    ))}
                    {/*{promoData.map(el => <Promo key={el} text={el} />)}*/}
                </div>
            </div>
            <Footer />
        </>
    )
}

export default App; 