import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Signup() {
  const getLocal =()=>{
    const dataz = localStorage.getItem('signupdata')
console.log(dataz);
    if(dataz){
      return JSON.parse(dataz)
    }
    else{
      return[]
    }
  }
  getLocal();
  
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setsuccess] = useState(false);
  const newData = { firstName, lastName, email, password };
  const [local, setlocal] = useState(getLocal())
  const nav = useNavigate();

  const onsubmit = async (e) => {
    e.preventDefault();

    try {
      const newData = { firstName, lastName, email, password };

      const datas = await axios.post("http://localhost:7789/post", newData);
      console.log(datas.data);
      setsuccess(true);

      localStorage.setItem("signupdata",JSON.stringify(datas.data))
      
    } catch (err) {
      console.log("not signed");
    }
  };

  return (
    <div>
      {success && local.length>0 ? (
        nav("/Login")
      ) : (
        <form
          style={{ marginLeft: "20%", marginRight: "20%", marginTop: "5%" }}
          onSubmit={onsubmit}
        >
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Frist name
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={firstName}
              onChange={(e) => setfirstName(e.target.value)}
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Last name
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleInputPassword1"
              value={lastName}
              onChange={(e) => setlastName(e.target.value)}
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Email address
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleInputPassword1"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div id="emailHelp" class="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Password
            </label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      )}
    </div>
  );
}

export default Signup;
