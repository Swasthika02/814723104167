import React, { useEffect, useState } from "react";

function App() {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setNotifications([
      {
        Type: "placement",
        Message: "CSX Corporation hiring",
        Timestamp: "2026-04-22 17:51:18"
      },
      {
        Type: "placement",
        Message: "Advanced Micro Devices hiring",
        Timestamp: "2026-04-22 17:49:42"
      },
      {
        Type: "result",
        Message: "mid-sem",
        Timestamp: "2026-04-22 17:51:30"
      },
      {
        Type: "event",
        Message: "farewell",
        Timestamp: "2026-04-22 17:51:06"
      }
    ]);
    setLoading(false);
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Notification Inbox</h1>

      {loading ? (
        <p>Loading...</p>
      ) : notifications.length === 0 ? (
        <p>No data</p>
      ) : (
        notifications.map((item, index) => (
          <div
            key={index}
            style={{
              border: "1px solid gray",
              margin: "10px",
              padding: "10px",
              borderRadius: "8px",
            }}
          >
            <h3>{item.Type}</h3>
            <p>{item.Message}</p>
            <small>{item.Timestamp}</small>
          </div>
        ))
      )}
    </div>
  );
}

export default App;