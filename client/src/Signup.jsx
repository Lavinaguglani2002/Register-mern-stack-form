
import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const Register = () => {
  const navigate = useNavigate();
const [password,setPassword]=useState('');
  const [gender, setGender] = useState('');
  const [alertMessage, setAlertMessage] = useState('');

  const [motherName, setMothername] = useState('');
  const [fatherName, setFathername] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dob, setDOB] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [email, setemail] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [course, setCourse] = useState('');
  const [address, setAddress] = useState('');
  const [pincode, setPincode] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post('http://localhost:3000/register', {
        firstName,
        password,
        lastName,
        motherName,
        fatherName,
        address,
        dob,
        pincode,
        course,
        email,
        state: selectedState,
        city: selectedCity,
        gender,
      });
  
      console.log(result);
  
      if (result.data.success) {
        setAlertMessage('Registration successful!');
        window.alert('Registration successful!');
        navigate('/login');
      } else {
        setAlertMessage('Registration failed. Please try again.');
        window.alert('Registration failed. Please try again.');
      }
    } catch (error) {
      console.error(error);
      setAlertMessage('An error occurred during registration.');
      window.alert('An error occurred during registration.');
    }
  };
  
  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

return (
    <div>
<section className="h-100 bg-dark">
<form onSubmit={handleSubmit}>

  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col">
        <div className="card card-registration my-4">
          <div className="row g-0">
            <div className="col-xl-6 d-none d-xl-block">
              <img src="https://img.freepik.com/premium-photo/office-desk-table-with-computer-top-view-with-copy-space_146377-54.jpg"                 
                style={{"border-top-left-radius": ".25rem", "border-bottom-left-radius": ".25rem" ,"width":"100%","height":'100%'}}/>
            </div>
            <div style={{"backgroundColor":'#31404A'}}className="col-xl-6">
              <div className="card-body p-md-5 text-black">
                <h2 style={{"color":'white'}} className="mb-5 text-uppercase">REGISTRATION FORM</h2>

                <div  className="row">
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                    <input 
            type="text"
            name="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}

            placeholder="First name"   required
            // Add necessary classNamees and attributes for styling and validation
          />

                      <label style={{"color":"white"}} className="form-label" for="form3Example1m">First name</label>
                    </div>
                  </div>
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                      <input type="text" name="lastName" value={lastName} onChange={(e)=>setLastName(e.target.value)} placeholder="lastName" required/>
                      <label style={{"color":"white"}}className="form-label" for="form3Example1n">Last name</label>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                      <input type="text"name="motherName" value={motherName} onChange={(e)=>setMothername(e.target.value)} placeholder="mothername"/>
                      <label style={{"color":"white"}}className="form-label" for="form3Example1m1">Mother's name</label>
                    </div>
                  </div>
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                    <input type="text"name="fatherName" value={fatherName} onChange={(e)=>setFathername(e.target.value)} placeholder="fathername"/>

                      <label style={{"color":"white"}}className="form-label" for="form3Example1n1">Father's name</label>
                    </div>
                  </div>
                </div>

                <div className="form-outline mb-4">
                <input type="text"name="address" value={address} onChange={(e)=>setAddress(e.target.value)} placeholder="address" required/>

                  <label style={{"color":"white"}} className="form-label" for="form3Example8">Address</label>
                </div>

                <div className="d-md-flex justify-content-start align-items-center mb-4 py-2">

                  <h6 style={{"color":"white"}}className="mb-0 me-4">Gender: </h6>

                  <div className="form-check form-check-inline mb-0 me-4">
                  <input
              className="form-check-input"
              type="radio"
              name="genderOptions"
              id="femaleGender"
              value="Female"
              checked={gender === 'Female'}
              onChange={handleGenderChange}
           required />


                    <label style={{"color":"white"}} className="form-check-label" for="femaleGender">Female</label>
                  </div>

                  <div className="form-check form-check-inline mb-0 me-4">
                  <input
              className="form-check-input"
              type="radio"
              name="genderOptions"
              id="maleGender"
              value="Male"
              checked={gender === 'Male'}
              onChange={handleGenderChange}
          required  />

                    <label style={{"color":"white"}}className="form-check-label" for="maleGender">Male</label>
                  </div>

                  <div className="form-check form-check-inline mb-0">
                  <input
              className="form-check-input"
              type="radio"
              name="genderOptions"
              id="otherGender"
              value="Other"
              checked={gender === 'Other'}
              onChange={handleGenderChange}
            />

                    <label style={{"color":"white"}}className="form-check-label" for="otherGender">Other</label>
                  </div>

                </div>

                <div className="row">
                  <div className="col-md-6 mb-4">

                  <select
            className="select"
            value={selectedState}
            onChange={(e) => setSelectedState(e.target.value)}
          >
            <option value="">Select State</option>
            <option value="State 1">Punjab</option>
            <option value="State 2">Haryana 2</option>
            <option value="State 3">Canada</option>
            {/* Add other options as needed */}
          </select>

                  </div>
                  <div className="col-md-6 mb-4">
                  <select
            className="select"
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
          >
            <option value="">Select City</option>
            <option value="City 1">Bathinda</option>
            <option value="City 2">Chandigarh</option>
            <option value="City 3">Delhi</option>
          </select>

                  </div>
                </div>

                <div className="form-outline mb-4">
                <input type="text"name="dob" value={dob} onChange={(e)=>setDOB(e.target.value)} placeholder="DOB"/>

                  <label style={{"color":"white"}}className="form-label" for="form3Example9">DOB</label>
                </div>

                <div className="form-outline mb-4">
                <input type="text"name="pincode" value={pincode} onChange={(e)=>setPincode(e.target.value)} placeholder="pincode"/>

                  <label style={{"color":"white"}} className="form-label" for="form3Example90">Pincode</label>
                </div>

                <div className="form-outline mb-4">
                <input type="text"name="course" value={course} onChange={(e)=>setCourse(e.target.value)} placeholder="course" required/>

                  <label style={{"color":"white"}}className="form-label" for="form3Example99">Course</label>
                </div>

                <div className="form-outline mb-4">
                <input type="text"name="email" value={email} onChange={(e)=>setemail(e.target.value)} placeholder="email"required/>

                  <label style={{"color":"white"}} className="form-label" for="form3Example97">Email ID</label>
                </div>
                <div className="form-outline mb-4">
                <input type="text"name="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="password" required/>

                  <label style={{"color":"white"}} className="form-label" for="form3Example97">Password</label>
                </div>


                <div className="d-flex justify-content-end pt-3">
                  <button style={{"color":"#31404A","backgroundColor":'white',"width":'150px',"height":"40px","borderRadius":'30px',"marginRight":'40px',"float":'center',"font-size":'23px' }} className='className="btn btn-default border w-100 bg-light rounded-0"' type="submit">Register
          </button>


                </div>
  <p style={{"color":"white"}}>Already have an account</p>
  <Link to="/login" className="btn btn-default border w-90 bg-light rounded-0">Login</Link>

              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  </div>
  </form>
</section>
</div>
    )
}

export default Register