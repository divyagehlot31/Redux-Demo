import React, { useState, useEffect, useMemo } from "react";

const WithUseMemo = () => {
  const [users, setUsers] = useState([]);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const filteredUsers = useMemo(() => {
    console.log("Filtering (with useMemo)");
    return users.filter((user) => user.name.startsWith("P"));
  }, [users]);

  // console.log("WithUseMemo Component Rendered");

  return (
    <div>
      <h2>With useMemo</h2>
      <button onClick={() => setCounter(counter + 1)}>
        Increase Counter: {counter}
      </button>
      <h4>Filtered Users (Name starts with 'P'):</h4>
      <ul>
        {filteredUsers.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default WithUseMemo;
