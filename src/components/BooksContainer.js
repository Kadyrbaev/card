import { useState } from "react"
import Books from "./Books"
import FilterBooks from "./FilterBooks"

const BooksContainer =(props)=>{
    const [filter, setFilter] = useState("2023")

    const filterDataHandler=(year)=>{
        console.log(year);
        setFilter(year)
    }

    const filteredByYear = props.books.filter((el)=>{
        console.log(el.data.getFullYear());
        return el.data.getFullYear().toString() === filter
    })

    let data = <h1>NO BOOKS</h1>
    if(filteredByYear.length !== 0){
        data = filteredByYear.map((elem)=>{
            return <Books bookName={elem.nameBook} price={elem.price} data={elem.data}/>
        })
    }

    

    return (
        <div>
            <FilterBooks filtered={filter} onFilterDataHandler={filterDataHandler}>
            </FilterBooks>
            {data}
        </div>
    )
}
export default BooksContainer