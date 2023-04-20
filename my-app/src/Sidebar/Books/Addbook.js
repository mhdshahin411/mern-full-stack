import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Addbook() {
  const [Name, setname] = useState("");
  const [Author, setauthor] = useState("");
  const [Country, setcountry] = useState("");
  const [Year, setyear] = useState("");
  const [Availability, setavailability] = useState("");
  const [Success, setsuccess] = useState(false);

  const nav = useNavigate();

  const onsubmit = async (e) => {
    e.preventDefault();
    setsuccess(true);

    const events = await axios.post("http://localhost:7789/bookpost", {
      Name,
      Author,
      Country,
      Year,
      Availability,
    });
    console.log(events);
  };
  return (
    <div>
      {Success ? (
        nav("/Books")
      ) : (
        <div>
          <h3 style={{ marginTop: "5%", marginLeft: "20%" }}>ADD BOOK PAGE</h3>
          <form
            style={{ marginLeft: "20%", marginRight: "30%", marginTop: "5%" }}
            onSubmit={onsubmit}
          >
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                book Name
              </label>
              <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                value={Name}
                onChange={(e) => setname(e.target.value)}
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">
                Author
              </label>
              <input
                type="text"
                class="form-control"
                id="exampleInputPassword1"
                value={Author}
                onChange={(e) => setauthor(e.target.value)}
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">
                country
              </label>
              <input
                type="text"
                class="form-control"
                id="exampleInputPassword1"
                value={Country}
                onChange={(e) => setcountry(e.target.value)}
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">
                Year
              </label>
              <input
                type="text"
                class="form-control"
                id="exampleInputPassword1"
                value={Year}
                onChange={(e) => setyear(e.target.value)}
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">
                Availability
              </label>
              <input
                type="text"
                class="form-control"
                id="exampleInputPassword1"
                value={Availability}
                onChange={(e) => setavailability(e.target.value)}
              />
            </div>
            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Addbook;
