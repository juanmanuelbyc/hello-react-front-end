import { Routes, Route } from 'react-router-dom';
import { Greeting } from './features/greeting/Greeting';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/greeting" element={<Greeting />} />
      </Routes>
    </div>
  );
}

export default App;
