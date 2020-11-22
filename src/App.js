import './App.css';
import Joke from './components/Joke';

function App() {
  return (
    <div>
      <h1>Personal page</h1>
      <h2>My name is Dmytro Rekechynsky.
        This page is in development,
        so read some jokes.</h2>
      <Joke />
    </div>
  );
}

export default App;
