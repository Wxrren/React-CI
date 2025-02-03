import './App.css';
import './components/css/Sidebar.module.css';
import './components/css/NavBarSimple.module.css';

import Sidebar from './components/Sidebar';
import NavBarSimple from './components/NavBarSimple';

function App() {
  return (
    <div className="App">
        <Sidebar />
        <NavBarSimple />
    </div>
  );
}

export default App;
