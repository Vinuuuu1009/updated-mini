
import SignUp from './components/signUp/SignUp'
import SignIn from './components/signIn/SignIn'
import {Routes,Route} from 'react-router-dom'
import Home from './components/home/Home'
import Nav from './components/navbar/Navbar'
import ViewAll from './components/view/ViewAll'
import BrowseProject from './components/browseProject/BrowseProject'
import UploadProject from './components/uploadproject/UploadProject'
import ProfilePage from './components/profilepage/ProfilePage'

function App() {
  
  return (
    <>
    <Nav/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/signin' element={<SignIn/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/viewall' element={<ViewAll/>}/>
      <Route path='/browse/:projectID' element={<BrowseProject/>}/>
      <Route path='/uploadproject' element={<UploadProject/>}/>
      <Route path='/profilepage' element={<ProfilePage/>}/>

    </Routes>
    </>
  )
}

export default App
