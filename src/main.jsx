import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import UserListing from './UserListing.jsx'
import UsersCard from "./components/UsersCard.jsx";
import TheNavBar from "./components/ui/TheNavBar.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
      {/*<TheNavBar/>*/}
      {/*<UsersCard/>*/}
      <UserListing />
  </StrictMode>,
)
