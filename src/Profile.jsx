import React, { useContext } from 'react'
import {ProfileContext} from './App'

function Profile() {

    const {profileName,setProfileName} = useContext(ProfileContext);

    const handleprofileChange=(event)=>{
        console.log(event.target.value)
        setProfileName(event.target.value);
    }
     return (
    <div>
        {/* <h1>{ ProfileName }</h1> */}
        <input 
            value={profileName}
            onChange={handleprofileChange}
        />
        <h1>
            {profileName}
        </h1>
    </div> 
  )
}

export default Profile