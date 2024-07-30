import React from 'react'

const Lineitem = ({item, handleCheck, handleDelete}) => {
  return (
    <li className="item" >
    <input 
    type="checkbox" 
    onChange={() => handleCheck(item.id)}
    checked =  {item.checked}
    />
    <label style={(item.checked)?{textDecoration: 'line-througth'} : null} onDoubleClick={() => handleCheck(item.id)}>{item.item}</label>
    
    <i class="fa-solid fa-trash-can"
           role="button"
           onClick={() => handleDelete(item.id)}
           tabIndex="0"
           aria-label={`Delete ${item.id}`}
    ></i>
</li>
  )
}

export default Lineitem