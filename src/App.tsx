import React, {useEffect} from 'react';
import {useTypedSelector} from "./hooks/useTypedSelector";
import {useActions} from "./hooks/useActions";
import getCorrentDate, {Table} from "./components/Table";
import './index.css'

const App = () => {
    const logsList = useTypedSelector(state => state.users.logs)
    const search = useTypedSelector(state => state.users.search)
    const {fetchUsers} = useActions()
    const {updateFilter} = useActions()

    const logsFilter = (item: any) => {
        let created_date = getCorrentDate(item.action_createad_at)
        let resultSearch = created_date.indexOf(search) > -1 || item.action.indexOf(search) > -1 || item.username.indexOf(search) > -1

        if (resultSearch){
            return item
        }
    }

    const handleChange = (e: any) => {
        updateFilter(e.target.value)
    }

    useEffect(() => {
        fetchUsers()
    }, [])

    return (
        <div className="">
            <div style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                margin: '25vh 0 25vh 0',
            }}>
                <div>
                    <input
                        className="bp4-input .modifier"
                        type="text"
                        placeholder="Search"
                        dir="auto"
                        onChange={(e) => handleChange(e)}
                    />
                    <Table logs={logsList.filter((item:any) => logsFilter(item))} />
                </div>
            </div>
        </div>
    );
};

export default App;
