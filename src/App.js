import { useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';

function App() {

  const {onToggleButton} = useTelegram()

  useEffect(() => {
    tg.ready();
  }, [])

  return (
    <div className="App">
      <Header/>
      <button onClick={onToggleButton}>Toggle</button>
    </div>
  );
}

export default App;
