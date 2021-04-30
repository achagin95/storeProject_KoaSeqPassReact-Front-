import './css/style.css';
import { BrowserRouter } from 'react-router-dom';
import { useRoutes } from './components/routes';
import { NavBar } from './components/navbar/navbar';
import { Footer } from './components/footer/footer';
import { NavButtons } from './components/navbar/navButtons';
import { AuthContext } from './context/Auth.Context'
import { useAuth } from './hooks/auth.hook';
import { useEffect, useRef } from 'react';
//import { useJwt } from './hooks/jwt.hook';
//import NavBar from './components/navbar/navbar'

function App() {


  const { token, login, logout, userId, role } = useAuth()
  let countForDebugg = useRef(0)
  //попробовать вернуть const
  const auth = !!token
  const routes = useRoutes(auth, role)
  useEffect(()=> {
    countForDebugg.current++
  })

  if (countForDebugg.current===0) {
    return (
      <div>Loading</div>
    )
  }
  return (
    <AuthContext.Provider value={{
      token, login, logout, userId, auth, role
    }}>
      <div className="wrapper">
        <div className="grid">
          <BrowserRouter>

            <nav className="NavBar">
              <NavBar />
              <NavButtons />
            </nav>

            <div>
              {routes
              /*При обновлении страницы косяк, попробовать разбить роуты
              на 2 разных (if (auth) {rout1} else {rout2}) 
              или попробовать добавить юзэффект какой-нибудь в app.js, чтоб
              запрашивал токен в самом начале*/}
            </div>
            <Footer />
          </BrowserRouter>
        </div>

      </div>
    </AuthContext.Provider>
  );
}

export default App;
