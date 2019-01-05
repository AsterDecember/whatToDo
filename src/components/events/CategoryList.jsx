import React from 'react';

const CategoryList = (props) => {


    const renderCategories = () => {
        const {categories} = props
        //
        return  categories ? categories.map((e) => <div key={e.id}>{e.name}</div>) : <h1>No info</h1>
        console.log('info en categorylist',props)
    }

    return (
        <div>
            {renderCategories()}
        </div>
    );
}


export default CategoryList;