import React from 'react'
import Stack from '@mui/material/Stack';
import { categories } from '../utils/constant';

const Sidebar = ({selectedCategory,setSelectedCategory}) => {
    // let selectedCategory="New"
  return (
    <Stack direction="row" sx={{
        flexDirection:{md:"column"},
        height:{sx:"auto",md:"95%"},
        overflowY:"auto",
        

    }}>
{categories.map((category)=>(
    <button className='category-btn'  key={category.name} onClick={()=>{setSelectedCategory(category.name)}}
    style={{backgroundColor:category.name===selectedCategory && "red",color:"white"}}>
        <span style={{color:category.name===selectedCategory?"white":"red",paddingRight:"15px"}} >{category.icon}</span>
        <span>{category.name}</span>

    </button>
))}
    </Stack>
  )
}

export default Sidebar