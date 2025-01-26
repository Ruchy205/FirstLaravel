jsx
import React, { useState, useEffect } from 'react';

function ReactPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/api/react-page')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  return (
    <div>
      {data.map(item => (
        <p key={item.id}>{item.name}</p>
      ))}
    </div>
  );
}
export default ReactPage;