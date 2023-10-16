import React, { useEffect, useState } from "react";
import TableHeader from "./TableHeader";
import "./TableData.css";
import TableRow from "./TableRow";
import Days from "./Days";
import axios from "axios";

const TableData = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [plans, setPlans] = useState(true);
  useEffect(() => {
    axios("http://localhost:2319/api").then((data) => {
      setPlans(data.data);
      setIsLoading(false);
    });
  }, []);

  const handleOnDelete = (id) => () => {
    axios({
      method: "delete",
      url: `http://localhost:2319/api/${id}`,
    }).then(() => {
      axios("http://localhost:2319/api").then((data) => {
        setPlans(data.data);
        setIsLoading(false);
      });
    });
  };

  if (isLoading) return <div>Loading</div>;

  return (
    <div>
      <table>
        <thead>
          <TableHeader />
        </thead>
        <tbody>
          {plans.map((plan) => (
            <TableRow {...plan} onDelete={handleOnDelete(plan.id)} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableData;
