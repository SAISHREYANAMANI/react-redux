

const initialState={
    products:[]
}

export function productReducer(state=initialState,action){
    switch(action.type){
        case "GET_PRODUCT_SUCCESS":
            return{...state,products:action.payload}
            case "ADD_NEW_PRODUCT":
            return{...state,products:[...state.products,action.payload]}
            case "DELETE_PRODUCT":
                return {
                    ...state,
                    products: state.products.filter(product => product.id !== action.payload.id)
                };
        default:
            return state
    }
}