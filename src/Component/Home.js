import React from 'react';

const Home = (props) => {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
      <p>Address: {props.address}</p>
      <p>Email: {props.email}</p>
    </div>
  );
}

export default Home;
