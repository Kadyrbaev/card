import "./BooksData.css"

function BooksData(props){
    const month = props.data.toLocaleDateString("en-US", {month: "long"})
    const day = props.data.toLocaleDateString("en-US", {day: "2-digit"})
    const year = props.data.getFullYear()

    // function formatData(){
    //     const res = new Date().getFullYear()
    //     return res
    // }
    // const result = formatData()
    return(
        <div className="wrap">
            <p>{day}</p>
            <p>{month}</p>
            <p>{year}</p>
        </div>
    )
}
export default BooksData