const FilterBooks = (props) => {

    const getYearValue=(e)=>{
        props.onFilterDataHandler(e.target.value)
        console.log(e.target.value);
    }
  return (
    <div>
        <select value={props.filtered} onChange={getYearValue}>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
            <option value="2024">2024</option>
        </select>
        
    </div>
  )
}

export default FilterBooks

