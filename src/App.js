import React, { useState } from 'react';
import AddUser from './components/User/AddUser';
import UsersList from './components/User/UsersList';

function App() {
  const [usersList, setusersList] = useState([]);
  const onSubmitHandler = (data) => {
    setusersList((prevUserdata) => {
      return [
        ...prevUserdata,
        {
          username: data.username,
          age: data.age,
          id: Math.random().toString(),
        },
      ];
    });
  };
  return (
    <div>
      <AddUser onAddUser={onSubmitHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
