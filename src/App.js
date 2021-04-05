import './css/style.css';
import { BrowserRouter } from 'react-router-dom';
import { useRoutes } from './components/routes';
import {NavBar} from './components/navbar/navbar';

function App() {
  const routes = useRoutes()

  return (
    <div className="content">
      <BrowserRouter>

        <NavBar />

        <div>
          {routes}
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
