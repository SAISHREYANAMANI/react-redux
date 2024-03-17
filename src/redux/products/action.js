


export function getProductAction(products){
    return{
        type:"GET_PRODUCT_SUCCESS",
        payload:products
    }
}

export function addNewProduct(newProduct){
    return{
        type:"ADD_NEW_PRODUCT",
        payload:newProduct
    }
}

export function deleteProduct(delete_a_Product){
    return{
        type:"DELETE_PRODUCT",
        payload:delete_a_Product
    }
}
