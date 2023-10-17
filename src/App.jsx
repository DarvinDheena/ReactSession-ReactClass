import React, { createContext, useState } from 'react'
import Profile from './Profile'

const ProfileContext =  createContext('');

function App() {
  const [profileName,setProfileName] = useState ('');
  return (
    <div>
      <h1>React Day - 27</h1>
      <ProfileContext.Provider value={{profileName, setProfileName}}>
          <Profile />
      </ProfileContext.Provider>
    </div>
  )
}

export  {App as default, ProfileContext};