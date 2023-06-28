import { useState } from "react";

export function BooksForma({saveFormInform}){
    const [nameBook, setNameBook]=useState()
    const [price, setPrice]=useState()
    const [data, setData]=useState()
    console.log(data);
    const saveBookNameHandler=(e)=>{
        setNameBook(e.target.value)
    }
    console.log(nameBook);
    const savePriceHandler=(e)=>{
        setPrice(e.target.value)
    }
    const saveDataHandler=(e)=>{
        setData(e.target.value)
    }


    const booksInformation = {
        nameBook,
        price: price,
        data: new Date(data)
    }
    console.log(booksInformation);

    const addBookHandler=()=>{
        saveFormInform(booksInformation)
    }

    return (
        <div style={{width: "200px", border: "1px solid"}}>
            <label>Bookname</label>
            <input onChange={saveBookNameHandler}/>
            <label>Price</label>
            <input onChange={savePriceHandler}/>
            <label>Data</label>
            <input type="date" onChange={saveDataHandler}/>
            <button onClick={addBookHandler}>Add Book</button>
        </div>
    )
}
