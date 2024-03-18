interface StateType{
    count:number
}

const initialState:StateType = {
    count: 0,
}

interface ActionPayloadType {
    type: string;
    payload: number;
}


export const counterReducer = (state=initialState,action:ActionPayloadType) => {
    const {type, payload} =action;
    switch(type) {
        case 'INCREMENT':
            return {
              ...state,
                count: state.count + payload
            }
        case 'DECREMENT':
            return {
              ...state,
                count: state.count - payload
            }
        case "SET_COUNTER":
            return{
                ...state,
                count: payload
            }
        default:
            return state;
    }
}