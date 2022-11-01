import React from 'react'
import { ExploreCard}  from './ExploreCard'
import "./ExploreSection.css"
export const ExploreSection = ({list,collectionName}) => {
  return (
    <div className='max-width exploreSection'>
        <div className="collection-title">{collectionName}</div>
        <div className='explore-grid'>
            {list.map((restaurant)=>{
                return (<ExploreCard restaurant={restaurant}/>)
            })}
        </div>
    </div>
  )
}
