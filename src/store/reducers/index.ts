import {combineReducers} from "redux";
import {logsReducer} from "./logsReducer";


export const rootReducer = combineReducers({
    users: logsReducer,
})

export type RootState = ReturnType<typeof rootReducer>
