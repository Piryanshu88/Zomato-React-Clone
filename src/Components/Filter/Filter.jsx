import React from 'react'
import './Filter.css'
import { FilterItems } from './FilterItems'
export const Filter = ({filterList}) => {
    
  return (
    <div className='filter'>
        {filterList&&filterList.map((filter)=>{
            return (
                <FilterItems filter={filter} key={filter.id}/>
            )
        })}
    </div>
  )
}
