import React, { useState } from "react";
import Message from "./components/Message"; // Import the Message component
import produce from "immer";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";
import ExpandableText from "./components/ExpandableText";

function App() {
  return (
    <div>
      <ExpandableText>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos qui
        voluptatem, dolorem nam quas repellat laboriosam fuga eveniet at magni
        ducimus. Voluptas provident autem veritatis nam beatae, enim debitis
        laboriosam. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Itaque laborum, error officia magni ratione totam vel! Accusantium,
        sequi quis asperiores, nihil et porro officiis obcaecati rem esse nam,
        dolore non. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Natus eaque pariatur dolore esse, enim similique ea voluptatibus
        delectus rerum modi reprehenderit, eos officia, est repellendus a. Quasi
        repellendus minus numquam. Lorem, ipsum dolor sit amet consectetur
        adipisicing elit. Incidunt repellendus sequi vitae provident tenetur
        perferendis minima magnam eum voluptate id neque maiores, expedita
        repellat? Incidunt, vel autem? Delectus, tempora eius?
      </ExpandableText>
    </div>
  );
}

export default App;
