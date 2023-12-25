import React, { useState } from "react";
import ListGroup from "./components/ListGroup";

function App() {

  let cities = ["New York", "London", "Paris", "Tokyo", "Sydney"];
  
  return (
    <div>
      <ListGroup items={cities} heading={"Cities"} onSelectItem={function (item: string): void {
        throw new Error("Function not implemented.");
      } } ></ListGroup>
    </div>
  );
}

export default App;
