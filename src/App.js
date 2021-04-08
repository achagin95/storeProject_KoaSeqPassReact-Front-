import './css/style.css';
import { BrowserRouter } from 'react-router-dom';
import { useRoutes } from './components/routes';
import { NavBar } from './components/navbar/navbar';
import { Footer } from './components/footer/footer';
//import NavBar from './components/navbar/navbar'

function App() {
  const routes = useRoutes()

  return (
    <div className="wrapper">
      <div className="grid">
        <BrowserRouter>

          <NavBar />

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
