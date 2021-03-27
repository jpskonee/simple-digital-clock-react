import React from "react";

function App() {
  setInterval(getTime, 1000);

  let nowTime = new Date().toLocaleTimeString();

  const [time, setTime] = React.useState(nowTime);

  function getTime() {
    let currentTime = new Date().toLocaleTimeString();
    setTime(currentTime);
  }

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={getTime}>Get Time</button>
    </div>
  );
}

export default App;
