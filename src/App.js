import './App.css';
import Menu from './Potager/components/Menu/Menu';
import Dashboard from './Potager/components/Dashboard/Dashboard';
function App() {
  return (
    <div className="dashboard">
      <Menu />
      <div className="contenu-dashboard">
        <Dashboard />
      </div>

    </div>
  );
};

export default App;