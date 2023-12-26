import React, { useState } from "react";
import Message from "./components/Message"; // Import the Message component
import produce from "immer";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";

function App() {
  const [cartItems, setCartItems]  = useState(['product1', 'product2']);

  return <div>
    <NavBar cartItemsCount={cartItems.length} />
    <Cart cartItems={cartItems} onClear={() => setCartItems([])}/>
  </div>;
}

export default App;
