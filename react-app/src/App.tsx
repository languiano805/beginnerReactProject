import React, { useState } from "react";
import Message from "./components/Message"; // Import the Message component
import produce from "immer";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";
import ExpandableText from "./components/ExpandableText";
import Form from "./components/Form";
import ExpenseList from "./expense-tracker/components/ExpenseList";

function App() {
  const [expenses, setExpenses] = useState([
    {
      id: 1,
      description: "Groceries",
      amount: 80,
      category: "Food",
    },
    {
      id: 2,
      description: "Gas",
      amount: 40,
      category: "Car",
    },
    {
      id: 3,
      description: "Rent",
      amount: 1000,
      category: "Bills",
    },
  ]);

  return (
    <div>
      <ExpenseList
        expenses={expenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      />
    </div>
  );
}

export default App;
