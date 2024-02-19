import React, { useRef } from 'react';

const FormAction = ({ onSubmit }) => {
  const nameRef = useRef(null);
  const ageRef = useRef(null);
  const addressRef = useRef(null);
  const emailRef = useRef(null);
  

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  

  return (
    <div>
      <h2>Fill out the form</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" ref={nameRef} placeholder="Name" />
        <input type="text" ref={ageRef} placeholder="Age" />
        <input type="text" ref={addressRef} placeholder="Address" />
        <input type="text" ref={emailRef} placeholder="Email" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default FormAction;
