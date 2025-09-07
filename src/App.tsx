import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://malta1.onrender.com/') // Your Render URL
      .then(res => res.json())
      .then(setData);
  }, []);

  return (
    <div>
      <h1>My App</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre> {/* Displays backend JSON */}
    </div>
  );
}

export default App;