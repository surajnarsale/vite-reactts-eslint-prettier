import { Route, Routes } from 'react-router-dom';

import Homepage from './routes/homepage/homepage.component';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
    </Routes>
  );
}

export default App;
