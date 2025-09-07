import React, { useEffect, useState } from 'react';
import { Analytics } from '@vercel/analytics/react';

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch('https://malta1.onrender.com/');
        if (!res.ok) throw new Error(`Error: ${res.status}`);
        const jsonData = await res.json();
        setData(jsonData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!data) return <p>No data found.</p>;

  return (
    <div>
      <h1>My App</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <Analytics />
    </div>
  );
}

export default App;