import React from 'react'
import './Body.css'
import {AiOutlineDelete} from 'react-icons/ai'

const Body = (props) => {
   const {historyItem,onDeleteFn} = props
   const {id,timeAccess,title,domainUrl,logoUrl} = historyItem;

   const onDeleteItem = () => {
     onDeleteFn(id)
   }

  return (
     <li className='list-container'> 
      <p className='list-time'>{timeAccess}</p>
      <div className='list-history-item-container'>
        <div className='list-history-item'>
          <img
           src={logoUrl}
           alt=''
           className='list-domain-logo' />
          <div className='title-container'>
            <p className='list-title'>{title}</p>
            <p className='list-domain'>{domainUrl}</p>
          </div>
        </div>
          <AiOutlineDelete
           className='list-delete'
           onClick={onDeleteItem}
           testid="delete"
          />
      </div>
     </li>
  )
}

export default Body