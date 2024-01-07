import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { testSlice } from './store';

function App() {
  const res =   useSelector((state)=> state.test )
  const dispatch = useDispatch()
  console.log(res);
  
  
  return (
    <div className="App">
      <h1>{res.text}</h1>
      <button onClick={()=>{dispatch(testSlice.actions.plusNum(60))}}>TEST</button>
      <button onClick={()=>{dispatch({type: "PLUS", payload: 5})}}>+</button>
      <button>eurvheov</button>
      <button>eurvheov-----</button>
     <h2>wufbowfbow</h2>
    </div>
  );
}

export default App;
