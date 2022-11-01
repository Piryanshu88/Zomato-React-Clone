import React from 'react'
import './DeliveryItems.css'
export const DeliveryItems = ({items}) => {
  return (
    <div>
        <div className="delivery-item-cover">
            <img src={items.cover} alt="" className='delivery-item-image' />
        </div>
        <div className="delivery-item-title">{items.title}</div>
    </div>
  )
}
