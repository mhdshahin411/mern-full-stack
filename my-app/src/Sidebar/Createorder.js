import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'



function Createorder() {
  const [fristname, setfristname] = useState("")
  const [lastname,setlastname] = useState("")
  const [orderid,setorderid] = useState("")
  const [product,setproduct] = useState("")
  const [numberofproduct,setnumberofproduct] = useState(0)
  const [date,setdate] = useState("")
  const [street,setstreet] = useState("")
  const [additionalinformation,setadditionalinformation] = useState("")
  const [zipcode,setzipcode] = useState("")
  const [place,setplace] = useState("")
  const [code,setcode] = useState("")
  const [phonenumber,setphonenumber] = useState("")
  const [email,setemail] = useState("")
 const [success, setsuccess] = useState(false)
 const counter =()=>{
    setnumberofproduct(numberofproduct + 1)
 }
 const counter2 =()=>{
  setnumberofproduct(numberofproduct-1)
 }
  const nav = useNavigate();
  const onsubmit =async ( e)=>{
    e.preventDefault();
   const events =  await axios.post("http://localhost:7789/createorder",{fristname, 
   lastname,
   orderid,
   product,
   numberofproduct,
   date,
   street,
   additionalinformation,
   zipcode,
   place,
   code,
   phonenumber,
   email,}).then(res=>(res.data))
    setsuccess(true);
   console.log(events);
  }
  
 
    return (

    <div>{success ? (nav("/Home"))  :(
        <div>
        <h3 style={{ marginTop: "5%", marginLeft: "20%" }}>ADD BOOK PAGE</h3>
        <form
          style={{ marginLeft: "20%", marginRight: "30%", marginTop: "5%" }}
          onSubmit={onsubmit}
        >
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              fristname
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={fristname}
              onChange={(e) => setfristname(e.target.value)}
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              lastname
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleInputPassword1"
              value={lastname}
              onChange={(e) => setlastname(e.target.value)}
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              orderid
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleInputPassword1"
              value={orderid}
              onChange={(e) => setorderid(e.target.value)}
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              product 
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleInputPassword1"
              value={product}
              onChange={(e) => setproduct(e.target.value)}
            />
          </div>
          <div class="mb-3">
            <p for="exampleInputPassword1" class="form-label">
              numberofproduct:{numberofproduct}
            </p>
            <div >
            <button onClick={counter} value={numberofproduct} onChange={(e) => setnumberofproduct(e.target.value)}>+</button>
            <br></br>
            <button onClick={counter2} value={numberofproduct} onChange={(e) => setnumberofproduct(e.target.value)}>-</button>
            </div>
          
              </div>
            <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              date
            </label>
            <input
              type="date"
              class="form-control"
              id="exampleInputPassword1"
              value={date}
              onChange={(e) => setdate(e.target.value)}
            />  </div>
            <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              street
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleInputPassword1"
              value={street}
              onChange={(e) => setstreet(e.target.value)}
            />  </div>
            <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              additionalinformation
            </label>
            <input
              type="information"
              class="form-control"
              id="exampleInputPassword1"
              value={additionalinformation}
              onChange={(e) => setadditionalinformation(e.target.value)}
            />  </div>
            <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              zipcode
            </label>
            <input
              type="pincode"
              class="form-control"
              id="exampleInputPassword1"
              value={zipcode}
              onChange={(e) => setzipcode(e.target.value)}
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              place
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleInputPassword1"
              value={place}
              onChange={(e) => setplace(e.target.value)}
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              code
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleInputPassword1"
              value={code}
              onChange={(e) => setcode(e.target.value)}
            />
          </div><div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              place
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleInputPassword1"
              value={phonenumber}
              onChange={(e) => setphonenumber(e.target.value)}
            />
          </div><div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              email
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleInputPassword1"
              value={email}
              onChange={(e) => setemail(e.target.value)}
            />
          </div>
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    )}
       
    </div>
  )
}

export default Createorder