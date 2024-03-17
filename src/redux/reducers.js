


const initialState={
    count:10
}


export function reducer(state=initialState,action){
    switch(action.type){
        case "INCREMENT":
            return {...state,count:state.count+1}
        case "DECREMENT":
            return{...state,count:state.count-1}
        case "RESET":
            return{...state,count:state.count=0}
        default:
            return state
    }
}