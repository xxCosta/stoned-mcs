import './home.scss';
import {  BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import TemplateHome from "./components/template/TemplateHome"
import  InstallHome  from './components/install/InstallHome';

function App() {
  return (
    <Router>
      <nav>
       <Link to="/template">Template</Link>
       <Link to="/install">Install</Link>

      </nav>
      <Routes>
        <Route path="/"></Route>
        <Route path="/template" element={<TemplateHome />}></Route>
        <Route path="/install" element={<InstallHome />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
