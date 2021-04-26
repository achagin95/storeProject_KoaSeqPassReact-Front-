import './css/style.css';
import { BrowserRouter } from 'react-router-dom';
import { useRoutes } from './components/routes';
import { NavBar } from './components/navbar/navbar';
import { Footer } from './components/footer/footer';
import { NavButtons } from './components/navbar/navButtons';
import { AuthContext } from './context/Auth.Context'
import { useAuth } from './hooks/auth.hook';
//import NavBar from './components/navbar/navbar'

function App() {

  const {token, login, logout, userId, role} = useAuth()
  const auth = !!token
  const routes = useRoutes(auth, role)

  return (
    <AuthContext.Provider value={{
      token, login, logout, userId, auth, role
    }}>
      <div className="wrapper">
        <div className="grid">
          <BrowserRouter>

            <nav className="NavBar">
              {/* <NavBar auth={auth} />
              <NavButtons auth={auth} /> */}
              <NavBar />
              <NavButtons />
            </nav>


            <div>
              {routes}
            </div>
            <Footer />
          </BrowserRouter>
        </div>

      </div>
    </AuthContext.Provider>
  );
}

export default App;
