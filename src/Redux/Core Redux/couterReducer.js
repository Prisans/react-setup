const initialState = {count : 0}

export function couterReducer(state = initialState , action){
    switch(action.type){
        case "INC" : return {
            count : state.count + 1
        }
        default : 
            return state
    }
}