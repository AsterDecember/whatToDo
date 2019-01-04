import React from 'react';

const CategoryList = (props) => {


    const renderCategories = () => {

        return  props.categories ? categories.map((e) => <div key={e.id}>{e.name}</div>) : <h1>No info</h1>
    };

    return (
        <div>
            {renderCategories()}
        </div>
    );
}


export default CategoryList;