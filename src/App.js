import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { decrementAction, incrementAction, resetAction } from './redux/actions';
import { useEffect } from 'react';
import axios from 'axios';
import { addNewProduct, deleteProduct, fetchProducts, getProductAction, updateProduct } from './redux/products/action';

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
   dispatch(fetchProducts())
},[])


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

  const deleteThisProduct=(id)=>{
    dispatch(deleteProduct(id))
  }

  const updateProductAction=(id)=>{
  dispatch(updateProduct(id)  )
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
      
       {
        
        productListing.loader?
        <h3>Please wait products loading....</h3>
        :
        productListing.products.map(eachObject=>
        <>
        <h3>{eachObject.title}</h3>
        <button onClick={()=>deleteThisProduct(eachObject.id)}>Delete</button> 
        <button onClick={()=>updateProductAction(eachObject.id)}>Update</button> 
        </>
        )
       }

      </header>
    </div>
  );
}

export default App;
