import {useSelector,useDispatch} from "react-redux";
import {selectActiveFilter} from '../store2/filters/filter-selector'
import React from 'react';
import {setFilter} from "../store2/filters/filters-actions";

const Filter = () => {
    const dispatch = useDispatch()
    const activeFilter = useSelector(selectActiveFilter)
    return (
        <div>

            <button onClick={()=> dispatch(setFilter('all'))} style={{color: activeFilter === 'all' ? 'red': 'black'}}>All</button>
            <button onClick={()=> dispatch(setFilter('active'))} style={{color: activeFilter === 'active' ? 'red': 'black'}}>Active</button>
            <button onClick={()=> dispatch(setFilter('completed'))} style={{color: activeFilter === 'completed' ? 'red': 'black'}}>Completed</button>
        </div>
    );
};

export default Filter;