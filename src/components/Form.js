import React, { useState } from "react";

function Form() {
  const [firstName, setFirstName] = useState("Sylvia");
  const [lastName, setLastName] = useState("Woods");
  const [submittedData, setSubmittedData] = useState([])
  const [errors, setErrors] = useState()

  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }

  function handleSubmit(event){
    event.preventDefault();

    if(firstName.length > 0 && lastName.length > 0) {
      const formData = {
        firstName: firstName,
        lastName : lastName,
      };
      const data = [...submittedData, formData]
      setSubmittedData(data)
      setFirstName("");
      setLastName("");
      setErrors([])
    }
    else {
      setErrors("First Name and the last Name is Required ")
    }
    
  }

  const all = submittedData.map((data, index) => {
    return(
        <li key={index}>
        {data.firstName} {data.lastName}
        </li>
    )
  })


  return (
    <>
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleFirstNameChange} value={firstName} />
      <input type="text" onChange={handleLastNameChange} value={lastName} />
      <button type="submit">Submit</button>
    </form>
    <p style={{color: "red"}}>{errors}</p>

    <ul>
      {all}
    </ul>
    </>
    
  );
}

export default Form;
