import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { decrementAction, incrementAction, resetAction } from './redux/actions';
import { useEffect } from 'react';
import axios from 'axios';
import { addNewProduct, deleteProduct, getProductAction } from './redux/products/action';

function App() {
 const{profile,ticket,productListing}= useSelector(state=>state)
//  console.log(reduxStore,"reduxStore")
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

useEffect(()=>{
   fetchData()
},[])
  async function fetchData(){
 const result= await axios.get("https://dummyjson.com/products")

dispatch(getProductAction(result.data.products))

 console.log(result)
  }

  const addNew=()=>{
    const newProduct={
      "id":30 ,
      "title": "iPhone 9",
      "description": "An apple mobile which is nothing like apple",
      "price": 549,
      "discountPercentage": 12.96,
      "rating": 4.69,
      "stock": 94,
      "brand": "Apple",
      "category": "smartphones",
      "thumbnail": "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
      "images": [
          "https://cdn.dummyjson.com/product-images/1/1.jpg",
          "https://cdn.dummyjson.com/product-images/1/2.jpg",
          "https://cdn.dummyjson.com/product-images/1/3.jpg",
          "https://cdn.dummyjson.com/product-images/1/4.jpg",
          "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg"
      ]
    }
    dispatch(addNewProduct(newProduct))
  }

  const deleteThisProduct=()=>{
    const delete_a_Product={
      "id": 2,
      "title": "iPhone X",
      "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
      "price": 899,
      "discountPercentage": 17.94,
      "rating": 4.44,
      "stock": 34,
      "brand": "Apple",
      "category": "smartphones",
      "thumbnail": "https://cdn.dummyjson.com/product-images/2/thumbnail.jpg",
      "images": [
          "https://cdn.dummyjson.com/product-images/2/1.jpg",
          "https://cdn.dummyjson.com/product-images/2/2.jpg",
          "https://cdn.dummyjson.com/product-images/2/3.jpg",
          "https://cdn.dummyjson.com/product-images/2/thumbnail.jpg"
      ]
    }
    dispatch(deleteProduct(delete_a_Product))
  }


 


return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>{profile.name}</h3>
       <h3>{ticket.count}</h3>
        <button onClick={handleIncrement}>Increment counter</button>
       <button onClick={handleDecrement}>Decrement counter</button>
       <button onClick={handleReset}>Reset counter</button> 
       <button onClick={addNew}>ADD NEW PRODUCT</button>
       <button onClick={deleteThisProduct}>DELETE A PRODUCT</button>
       {
        productListing.products.length>0 &&
        productListing.products.map(eachObject=><h3>{eachObject.title}</h3>)
       }

      </header>
    </div>
  );
}

export default App;
