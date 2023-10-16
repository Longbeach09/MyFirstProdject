import React, { useState } from 'react';
import Header from './Header';
import SubHeader from './SubHeader';
import Pictures from './Pictures';
import './TravelPlanner.css'
const TravelPlanner = () => {

  const [isEditing, setIsEditing] = useState(false)

  const toggleEdit = () => setIsEditing(!isEditing)

  return (
    <>
      <h1>
        <Header />
      </h1>
      <h3>
        <SubHeader editMode={isEditing} />
      </h3>
      <div>
        <Pictures editMode={isEditing} toggleEditFn={toggleEdit} />
      </div>
    </>
  );
}

export default TravelPlanner;
