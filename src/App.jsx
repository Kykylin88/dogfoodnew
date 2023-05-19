import { useState, useEffect } from "react";
import testData from "./assents/data.json";
import Card from "./components/Card/Card";
import Promo from "./components/Promo/Promo";
import Modal from "./components/Modal";
import { Header, Footer } from "./components/General";
const promoData = ["=)", "*?*", ")("];

const App = () => {
    /*const user = localStorage.getItem("user");*/
    const [user, setUser] = useState(localStorage.getItem("user12"));
    const [userId, setUserId] = useState(localStorage.getItem("user12-id"));
    const [token, setToken] = useState(localStorage.getItem("token12"));
    const [goods, setGoods] = useState(testData);
    const [searchResult, setSearchResult] = useState("");
    const [modalOpen, setModalOpen] = useState(false);

    useEffect(() => {
        if (user) {
            setUserId(localStorage.getItem("user12-id"));
            setToken(localStorage.getItem("token12"));
        } else {
            localStorage.removeItem("user12-id")
            localStorage.removeItem("token12")
            setUserId(null);
            setToken(null);
        }
    }, [user])
    useEffect(() => {
        console.log("token", token);
}, [token])
    return (
        <>

            <Header
                user={user}
                upd={setUser}
                searchArr={testData}
                setGoods={setGoods}
                setSearchResult={setSearchResult}
                setModalOpen={setModalOpen}
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
            <Modal
                isActive={modalOpen}
                setIsActive={setModalOpen}
                setUser={setUser}
            />
        </>
    )
}

export default App; 