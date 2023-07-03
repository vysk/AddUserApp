import React, { useState } from 'react';
import Card from '../UI/Card';
import styles from './AddUser.module.css';
import Button from '../UI/Button';

const inputDefalutState = {
  username: '',
  age: '',
};
const AddUser = (props) => {
  const [userData, setUserdata] = useState(inputDefalutState);

  const addUserHandler = (event) => {
    event.preventDefault();
    if (
      userData.username.trim().length === 0 ||
      userData.age.trim().length === 0
    ) {
      return;
    }
    if (+userData.age < 1) {
      return;
    }
    setUserdata(inputDefalutState);
    //console.log(userData);
    props.onAddUser(userData);
  };

  const inputHandler = (input, value) => {
    setUserdata((prevInput) => {
      return { ...prevInput, [input]: value };
    });
  };

  return (
    <Card className={styles.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor='username'>Username</label>
        <input
          type='text'
          id='username'
          value={userData.username}
          onChange={(event) => inputHandler('username', event.target.value)}
        ></input>
        <label htmlFor='age'>Age (Years)</label>
        <input
          type='number'
          id='age'
          value={userData.age}
          onChange={(event) => inputHandler('age', event.target.value)}
        ></input>
        <Button type='submit'>Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
