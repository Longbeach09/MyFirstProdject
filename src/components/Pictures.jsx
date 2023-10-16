import React from 'react'
import { useState } from 'react'
import SubHeader from './SubHeader'
import TableData from './TableData'



const Pictures = ({ editMode, toggleEditFn }) => {
  // const [isEditing, setIsEditing] = useState(false)

  // const toggleEdit = () => setIsEditing(!isEditing)

  return editMode ? (
    <>
    <TableData/>
    </>
  ) : (
    <>
    <button  onClick={toggleEditFn}>Bali!!!!</button>
    <div className= "bali">
        <img src={"https://imageio.forbes.com/specials-images/imageserve/675172642/pura-ulun-danu-bratan-temple-in-Bali-/960x0.jpg?format=jpg&width=960"}/>
    </div>
    </>
  )
}

export default Pictures