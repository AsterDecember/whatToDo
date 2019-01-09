import React from 'react';
import {Link,history} from "react-router-dom";
import { AutoComplete,Button } from 'antd';

const CategoryList = (props) => {

    const renderCategories = () => {
        const {categories} = props
        return  categories ? categories.map((e) => <Link to={`/event/${e.id}`} key={e.id}><p>{e.name}</p></Link>) : <h1>No info</h1>

    }
    const categories = props.categories ? props.categories.map((e) => e.name) : ['no info']
    return (

        <div>

            <AutoComplete
                style={{ width: 200 }}
                dataSource={categories}
                placeholder="type a keyword"
                filterOption={(inputValue, option) => option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1}
                onBlur={(e)=> {
                    console.log('hey there',e)
                    this.props.getEventbriteEventsSaga(e)
                    //location.push(`/event/${e}`)
                }}
            />
            <Button type="primary" shape="circle" icon="search" />

        </div>
    );
}


export default CategoryList;