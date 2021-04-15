import './css/style.css';
import { BrowserRouter } from 'react-router-dom';
import { useRoutes } from './components/routes';
import { NavBar } from './components/navbar/navbar';
import { Footer } from './components/footer/footer';
import { NavButtons } from './components/navbar/navButtons';
//import NavBar from './components/navbar/navbar'

function App() {
  
  const auth = !true
  const routes = useRoutes(auth)

  return (
    <div className="wrapper">
      <div className="grid">
        <BrowserRouter>

          <nav className="NavBar">
            <NavBar auth={auth}/>
            <NavButtons auth={auth}/>
          </nav>
          

          <div>
            {routes}
          </div>
          <Footer/>
        </BrowserRouter>
      </div>

    </div>
  );
}

export default App;
