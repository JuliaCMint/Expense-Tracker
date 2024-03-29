import React, { useState } from "react";
import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";

const INITIAL_COSTS = [
  {
    id: "c1",
    date: new Date(2022, 12, 6),
    description: "Fridge",
    amount: 999.99,
  },
  {
    id: "c2",
    date: new Date(2022, 11, 15),
    description: "MacBook",
    amount: 1254.72,
  },
  {
    id: "c3",
    date: new Date(2022, 10, 4),
    description: "Jeans",
    amount: 49.99,
  },
];

const App = () => {
  const [costs, setCosts] = useState(INITIAL_COSTS);

  const addCostHandler = (cost) => {
    setCosts((prevCosts) => {
      return [cost, ...prevCosts];
    });
  };

  return (
    <div>
      <NewCost onAddCost={addCostHandler} />
      <Costs costs={costs} />
    </div>
  );
};

export default App;
