import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Homescreen from './screens/Homescreen.jsx'
import Register from './screens/Registerscreen.jsx'
import Login from './screens/Loginscreen.jsx'
import ProfileScreen from './screens/ProfileScreen.jsx'
import Notexist from './screens/Notexist.jsx'
import './index.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'
import store from './store.js'
import { Provider } from 'react-redux'
import PrivateRoute from './components/utils/PrivateRoute.jsx'
import Players from './screens/PLayers.jsx'
import Coaches from './screens/Coaches.jsx'
import StatsTracker from './components/STButton.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="*" element={<Notexist />} />
      <Route index={true} path="/" element={<Homescreen />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/players" element={<Players />} />
      <Route path="/coaches" element={<Coaches />} />
      <Route path="/stats-tracker" element={<StatsTracker />} />
      {/* PRIVATE ROUTE */}
      <Route path="" element={<PrivateRoute />}>
        <Route path="/profile" element={<ProfileScreen />} />
      </Route>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    {/* <React.StrictMode> */}
    <RouterProvider router={router} />
    {/* </React.StrictMode> */}
  </Provider>
)
