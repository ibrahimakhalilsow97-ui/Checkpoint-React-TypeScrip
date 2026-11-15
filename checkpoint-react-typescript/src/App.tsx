
import Greeting from './components/Greeting';
import Counter from './components/Counter';

function App() {
  return (
    <div>
      <h1>Checkpoint React + TypeScript</h1>

      {/* Affichage du composant Greeting */}
      <Greeting name="khalil" />

      {/* Affichage du composant Counter */}
      <Counter />
    </div>
  );
}

export default App;
