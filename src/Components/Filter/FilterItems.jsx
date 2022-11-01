import React from 'react'
import "./FilterItems.css"
export const FilterItems = ({filter}) => {
  return (
    <div className='filterItems'>
        {filter.icon && filter.icon}
        <div className="filter-name">{filter.title}</div>
    </div>
  )
}
