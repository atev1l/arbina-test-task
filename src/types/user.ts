export interface logsState {
    logs: any[];
    search: string
}

export enum LogsActionTypes {
    GET_LOGS = "GET_LOGS",
    SET_FILTER = "SET_FILTER"
}

interface GetLogsAction {
    type: LogsActionTypes.GET_LOGS;
    payload: any[];
}

interface setFilter {
    type: LogsActionTypes.SET_FILTER;
    payload: string;
}
export type LogsAction = GetLogsAction | setFilter
