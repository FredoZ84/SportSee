import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import Header from '../components/Header'

import Sidebar from '../components/Sidebar'
import Home from '../pages/Home'
import Profile from '../pages/Profile'
import Setting from '../pages/Setting'
import Community from '../pages/Community'
import Error from '../components/Error'

function Routing() {
  const [user, updateUser] = useState('12')

  return (
    <Router>
      <Header user={user} />
      <Sidebar />
      <Routes>
        <Route
          path="/"
          element={<Home user={user} updateUser={updateUser} />}
        />
        <Route path="/user/:id" element={<Profile />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="/community" element={<Community />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  )
}

export default Routing
