import React from 'react';
import {Link} from "react-router-dom";

const CategoryList = (props) => {


    const renderCategories = () => {
        const {categories} = props
        return  categories ? categories.map((e) => <Link to={`/event/${e.id}`}><p key={e.id}>{e.name}</p></Link>) : <h1>No info</h1>

    }

    return (
        <div>
            {renderCategories()}
        </div>
    );
}


export default CategoryList;