import NavBar from './components/NavBar/NavBar';
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <NavBar />
      <ItemListContainer greeting="Próximamente ésto será el Catálogo de productos" color="Red" fontSize="35px" />
      </header>
    </div>
  );
}

export default App;
