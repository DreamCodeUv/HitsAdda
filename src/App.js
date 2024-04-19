import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom'
import './App.css'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import MainCpm from './components/MainCpm'
import Contact from './components/Contact'
import SelectM from './components/SelectM'
import Frame from './components/Frame'
const App = () => (

   <>
   
     <BrowserRouter>
       <Navigation />
       <Routes>
         <Route path='/' element={<MainCpm />} />
         <Route path='/contact' element={<Contact />} />
         Select component development phase
         <Route path='/selectm' element={<SelectM />} />
       </Routes>
       <Footer />
     </BrowserRouter>
     {/* <Frame /> */}
    </>
)

export default App