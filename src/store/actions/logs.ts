import {LogsAction, LogsActionTypes} from "../../types/user";
import {Dispatch} from "redux";

export const fetchUsers = () => {
    return async (dispatch: Dispatch<LogsAction>) => {
        fetch('/data.json')
            .then(response => response.json())
            .then(json => dispatch({type: LogsActionTypes.GET_LOGS, payload: json}))
    }
}
export const updateFilter = (searchStr: string) => {
    return (dispatch: Dispatch<LogsAction>) => {
        dispatch({type: LogsActionTypes.SET_FILTER, payload: searchStr})
    }
}
