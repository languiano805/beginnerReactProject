import React, { useState } from "react";
import LikeButton from "./components/LikeButton/LikeButton";

function App() {
  const [activeItem, setActiveItem] = useState(false);

  return (
    <div>
      <LikeButton active={activeItem} onClick={() => setActiveItem(!activeItem)} />
    </div>
  );
}

export default App;
