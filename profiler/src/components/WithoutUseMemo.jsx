import React, { useState, useEffect } from "react";

const WithoutUseMemo = () => {
  const [users, setUsers] = useState([]);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const filteredUsers = users.filter((user) => {
    console.log("Filtering (without useMemo)");
    return user.name.startsWith("P");
  });

  return (
    <div>
      <h2>Without useMemo</h2>
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

export default WithoutUseMemo;
