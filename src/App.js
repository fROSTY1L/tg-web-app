import { useEffect } from 'react';
import './App.css';

function App() {

  const onToggle = useTelegram()
  useEffect(() => {
    tg.ready();
  }, [])

  return (
    <div className="App">
      all work
      <button onClick={onClose}>Закрыть</button>
    </div>
  );
}

export default App;
