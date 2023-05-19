import { useState, useEffect } from "react";
import "./style.css"
const Search = ({ data, setGoods, setSearchResult }) => {
    const [text, setText] = useState("");
    const [num, setNum] = useState(0);
    const changeValue = (e) => {
        let val = e.target.value.toLowerCase();
        /*  console.log(e.target.value)*/
        setText(val);
        /*setText(e.target.value);*/
        /*setNum(num + 1);*/
        /*setNum(data.filter(el =>el.name.toLowerCase().includes(
            e.target.value.toLoverCase())).length);*/
        setNum(data.filter(el => el.name.toLowerCase().includes(val)).length);
    }
    const changeText = () => {
        console.log("Click")
        setText("Привет")
    }
    console.log(text);
    useEffect(() => {
        let str = '';
        if (num && text) {
            str = `По запросу ${text} не найдено ${num} товаров`;
        } else if (text) {
            str = `По запросу ${text} не найдено не одного товара`;
        } else {
            str = '';
        }
        setSearchResult(str);;
    }, [num, text]);
    useEffect(() => {

        let result = data.filter(el => el.name.toLowerCase().
            includes(text));

        setGoods(result);
        setNum(result.length);
        console.log(result);
    }, [text]);
    return <>
        <input className="search" type="search" value={text} onChange={changeValue} />
        {/* <button onClick={changeText}>поиск {num} раз</button>*/}
        {/*text && <p> По запросу {text} найдено {num} товаров </p>*/}
    </>
}

export default Search;