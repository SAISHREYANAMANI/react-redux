import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { decrementAction, incrementAction, resetAction } from './redux/actions';

function App() {
 const {count}= useSelector(state=>state)
 const dispatch=useDispatch()
 const handleIncrement=()=>{
  dispatch(incrementAction())
 }
 const handleDecrement=()=>{
  dispatch(decrementAction())
 }
 const handleReset=()=>{
  dispatch(resetAction())
 }

//  console.log(reduxStore)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
       {count}
        </p>
       <button onClick={handleIncrement}>Increment counter</button>
       <button onClick={handleDecrement}>Decrement counter</button>
       <button onClick={handleReset}>Reset counter</button>
      </header>
    </div>
  );
}

export default App;
