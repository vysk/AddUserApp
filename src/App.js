import React, { Fragment, useState } from 'react';
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
    <Fragment>
      <AddUser onAddUser={onSubmitHandler} />
      <UsersList users={usersList} />
    </Fragment>
  );
}

export default App;
