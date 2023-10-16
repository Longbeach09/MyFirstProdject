import { useState } from 'react'


const SubHeader = ({editMode}) => {


  return editMode ?(
    <div>Bali great choice</div>
  ) :
  <div>Places to vist click the names to start</div>
}

export default SubHeader