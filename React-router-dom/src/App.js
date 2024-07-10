import{BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './Components/Home';
import Contact from './Components/Contact';
import Course from './Components/Course';
import About from './Components/About';
import Fee from './Components/Fee';

const App=()=>{
  return(
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/About-us' element={<About/>} />
          <Route path='/Course' element={<Course/>} />
          <Route path='/Fee' element={<Fee/>} />
          <Route path='/Contact-us' element={<Contact/>} />
          <Route path='*' element={<h1>404 Error: Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;