import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './Views/Home/Home'
import Navbar from './Components/Navbar/Navbar'
import ViewSurvey from './Views/ViewSurvey/ViewSurvey'
import { Provider } from 'react-redux'
import store from './app/Store'
import CreateSurvey from './Views/CreateSurvey/CreateSurvey'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Provider store={store}>
              <BrowserRouter>
                    <div className='App'>
                        <Navbar/>
                        <main className="main-content">
                              <Routes>
                                          <Route path='/' element={<Home/>}></Route>
                                          <Route path='/viewSurvey' element={<ViewSurvey/>}></Route>     
                                          <Route path='/createSurvey' element={<CreateSurvey/>}></Route>                                       
                              </Routes>
                        </main>
                    </div>
              </BrowserRouter>
      </Provider>
    
    </>
  )
}

export default App
