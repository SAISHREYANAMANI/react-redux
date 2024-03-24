// import { type } from "@testing-library/user-event/dist/type"
import axios from "axios"
export function getProductAction(products){
    return{
        type:"GET_PRODUCT_SUCCESS",
        payload:products
    }
}

function showLoader(){
    return{
        type:"SHOW_LOADER"
    }
}

function hideLoader(){
    return{
        type:"HIDE_LOADER"
    }
}

function productsError(){
    return{
        type:"PRODUCTS_ERROR"
    }
}





export function addNewProduct(newProduct){
    return{
        type:"ADD_NEW_PRODUCT",
        payload:newProduct
    }
}

export function deleteProduct(id){
    return{
        type:"DELETE_PRODUCT",
        payload:id
    }
}

export function updateProduct(id){
    return{
        type:"UPDATE_PRODUCT",
        payload:id
    }
}


export function fetchProducts(){
  return async(dispatch)=>{
   dispatch( showLoader())
    const result=await axios.get("https://dummyjson.com/products")
    

    if (result.status==200){
      dispatch(getProductAction(result.data.products))
      dispatch(hideLoader())
    }
    else{
        dispatch(productsError)
    
    }
}
}
