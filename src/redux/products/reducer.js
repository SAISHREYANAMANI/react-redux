

const initialState={
    products:[],
    loader:false,
    error:null
}

export function productReducer(state=initialState,action){
    switch(action.type){
        case "GET_PRODUCT_SUCCESS":
            return{...state,products:action.payload}
            case "ADD_NEW_PRODUCT":
            return{...state,products:[...state.products,action.payload]}
            case "DELETE_PRODUCT":
                const id = action.payload
                const newState=state.products.filter(item=>item.id!==id)
                return {
                    ...state,
                    products:newState
                };
            case "UPDATE_PRODUCT":
                const updateId = action.payload
                const newUpdateState=state.products.map(item=>{
                   if(item.id==updateId){
                        return{...item,title:"SAMSUNG" }
                   }
                   else{
                    return item
                   }
                }) 
                   return{...state,products:newUpdateState}
            case "SHOW_LOADER":
                return{...state,loader:true}
                case "HIDE_LOADER":
                return{...state,loader:false}
                case "PRODUCTS_ERROR":
                return{...state,error:"something went wrong"}
        default:
            return state
    }
}