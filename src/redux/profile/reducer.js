



const initialState={
    name:"SHREYA"
}

export function profileReducer(state=initialState,action){
    switch(action.type){
        case"CHANGE_NAME":
        return{...state,name:"hello"}
        default:
        return state
    }
}