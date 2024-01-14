

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post("http://localhost:3000/login", { email, password })
      .then(result => {
        console.log(result);
        if (result.data.success) {
          alert('Login successful');
          navigate('/');
        } else {
          alert(`Login failed: ${result.data.message}`);
        }
      })
      .catch(err => console.log(err));
  };


return (
    <div>
        <section className="vh-100" style={{"background-color": "#eee"}}>
  <div className="container h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-lg-12 col-xl-11">
        <div className="card text-black" style={{"border-radius": "25px"}}>
          <div className="card-body p-md-5">
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Login</p>

                <form onSubmit={handleSubmit} className="mx-1 mx-md-4">

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="email" placeholder="enter email"autoComplete='off'name="email"className='form-control rounded-0'onChange={(e)=>setEmail(e.target.value)} />
                      <label className="form-label" for="form3Example3c"> Email</label>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="password" placeholder="enter password"autoComplete='off'name="password"className='form-control rounded-0'onChange={(e)=>setPassword(e.target.value)}/>
                      <label className="form-label" for="form3Example4c">Password</label>
                    </div>
                  </div>

                  
                  <div className="form-check d-flex justify-content-center mb-5">
                    <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
                    <label className="form-check-label" for="form2Example3">
                      I agree all statements in <a href="#!">Terms of service</a>
                    </label>
                  </div>

                  <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button type="submit" className="btn btn-primary btn-lg">Login</button>
                  </div>
                  </form>

<p style={{"textAlign":'center'}}>Agree to terms and policy</p>
<div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <Link to="/register" className="btn btn-primary btn-lg">Create a new account</Link>
                  </div>

              </div>
              <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                  className="img-fluid" alt="Sample image"/>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Login