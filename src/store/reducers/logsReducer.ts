import {LogsAction, LogsActionTypes, logsState} from "../../types/user";

const initialState: logsState = {
    logs: [],
    search: ''
}

export const logsReducer = (state = initialState, action: LogsAction): logsState => {
    switch (action.type){
        case LogsActionTypes.GET_LOGS:
            return {...state, logs: action.payload}
        case LogsActionTypes.SET_FILTER:
            return {...state, search: action.payload}
        default:
            return state
    }
}
