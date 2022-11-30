import React, { useState } from 'react';
import Girl from './Img/out.png'; 

export default function Form() {

    const [student, setStudent] = useState({
        firstName: "",
        lastName: "",
        date: "",
        gender: "",
        email:"",
        phone: Number,
        std: "",
        address: "",
        city: "",
        zipcode: Number
    })

    const [records, setRecords] = useState([])

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setStudent({...student, [name]: value})
    }

    const handleSubmit = (e) =>{
        e.preventDefault();

        const newRecord = {...student, id: new Date().getTime().toString()}
        
        setRecords([...records, newRecord])
        console.log(records);
        setStudent({firstName:"", lastName:"", date:"", gender:"", email:"", phone: Number, std: "", address: "", city: "", zipcode: Number});

    }

  return (
    <div className='flex'>
    <form action='' onSubmit={handleSubmit}>
        <div className="wrapper rounded-4 bg-white" action=''>
                <h2>Admission Form</h2>
                <div className="form">
                    <div className="row">
                        <div className="col-md-6 mt-md-0 mt-3">
                            <label>First Name</label>
                            <input type="text" value={student.firstName}
                                onChange={handleInput}
                                name='firstName' id='firstName' className="form-control"/>
                        </div>
                        <div className="col-md-6 mt-md-0 mt-3">
                            <label>Last Name</label>
                            <input type="text" value={student.lastName}
                                onChange={handleInput}
                                name='lastName' id='lastName' className="form-control"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 mt-md-0 mt-3">
                            <label>Birthday</label>
                            <input type="date" value={student.date} 
                            onChange={handleInput}
                            name='date' className="form-control"/>
                        </div>
                        <div className="col-md-6 mt-md-0 mt-3">
                            <label>Gender</label>
                            <div className="d-flex align-items-center mt-2">
                                <label className="option">
                                    <input type="radio" value="Male" 
                                    onChange={handleInput} 
                                    name="gender"/>Male
                                    <span className="checkmark"></span>
                                </label>
                                <label className="option ms-4">
                                    <input type="radio" value="Female" 
                                    onChange={handleInput} 
                                    name="gender"/>Female
                                    <span className="checkmark"></span>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 mt-md-0 mt-3">
                            <label>Email</label>
                            <input type="email" name='email' value={student.email} 
                            onChange={handleInput} 
                            id='email' className="form-control"/>
                        </div>
                        <div className="col-md-6 mt-md-0 mt-3">
                            <label>Phone Number</label>
                            <input type="tel" name='phone' value={student.phone} 
                            onChange={handleInput} 
                            id='phone' className="form-control"/>
                        </div>
                    </div>
                    <div className="my-md-2 my-3">
                        <label>Select Class</label>
                        <select name='std' value={student.std} 
                        onChange={handleInput} 
                        id="std" required>
                            <option value="" hidden>Choose Option</option>
                            <option value="1st">1st Standard</option>
                            <option value="2nd">2nd Standard</option>
                            <option value="3rd">3rd Standard</option>
                            <option value="4th">4th Standard</option>
                            <option value="5th">5th Standard</option>
                        </select>
                    </div>
                    <div className="row">
                        <div className="col-md-12 mt-md-0 mt-3">
                            <label>Address</label>
                            <input type="text" name='address' value={student.address} 
                            onChange={handleInput} 
                            id='address' className="form-control"/>
                        </div>
                        {/* <div className="col-md-6 mt-md-0 mt-3">
                            <label>-</label>
                            <input type="tel" class="form-control"/>
                        </div> */}
                    </div>
                    <div className="row">
                        <div className="col-md-6 mt-md-0 mt-3">
                            <label>City</label>
                            <input type="text" name='city' value={student.city} 
                            onChange={handleInput} 
                            id='city' className="form-control"/>
                        </div>
                        <div className="col-md-6 mt-md-0 mt-3">
                            <label>Zip Code</label>
                            <input type="number" name='zipcode' value={student.zipcode} 
                            onChange={handleInput}
                            id='zipcode' className="form-control"/>
                        </div>
                    </div>
                    <button type='submit' className="btn btn-primary mt-3">Submit</button>
                </div>
            </div>
        </form>
            <img className='girlImg' src={Girl} alt="Girl" />
    </div>

  )
}
