import React from 'react'
import { categories } from '../utils/constants'

const SideBar = ({click,setClick}) => {
  return (
    <div className='d-flex overflow-y-auto bg-white'>
        {
            categories.map((category)=>(
                <button className='category-btn'
                    style={
                        {
                            backgroundColor:category.id===click && 'rgba(92, 92, 92, 0.1)',
                            color:category.name===click && 'black'
                        }
                    }
                    onClick={()=>{
                        setClick(category.id)
                    }}
                    key={category.name}
                >
                    <span style={{marginRight:'10px'}}>{category.icon} </span>
                    <span>{category.name}</span>
                </button>
                
            ))

        }

    </div>
    

  )
}

export default SideBar