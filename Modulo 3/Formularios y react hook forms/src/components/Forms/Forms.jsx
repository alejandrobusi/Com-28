import React, { useState } from 'react';


function Forms() {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  const [user, setUser] = useState({ email: '' , password: ''})

  const emailVal = new RegExp(/^\w+([\.\+\-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/);

  const handleForm = (event) => {
    event.preventDefault();
    console.log(user);
    const body = {
      title: user.email,
      body: user.password,
      userId: 1,
    };
    
    if (user.password.trim() === '' || !emailVal.test(user.email)) {
      alert("Corrobora los datos.")
    } else {
      fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json));
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser(prevState => ({
      ...prevState,
      [name]: value
    }))
  };

  return (
    <div className='container-fluid'>
      <h1>Formulario</h1>
      <form onSubmit={handleForm}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="text" className="form-control" onChange={handleChange} name='email' id="email" aria-describedby="emailHelp" />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" onChange={handleChange} id="password" name='password' />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default Forms
