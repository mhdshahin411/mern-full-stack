import React, { useEffect, useState } from "react";
import "./book.css";
import axios from "axios";
import { Link } from "react-router-dom";
import Pagination from "../Pagination.jsx";
import { AiOutlineSearch } from "react-icons/ai";
import { FaPlus } from "react-icons/fa";



function Books() {
  const [books, setBook] = useState([]);
  const [searchbar, setsearchbar] = useState();


  const [currentPage, setcurrentPage] = useState(1);
  const [postperpage, setpostperpage] = useState(3);

  const lastpageindex = currentPage * postperpage;
  const firstpageindex = lastpageindex - postperpage;

  const currentPost = (books.slice(firstpageindex, lastpageindex));
console.log(currentPost);
  const getBooks = async (req, res) => {
    await axios
      .get(`http://localhost:7789/getbook`)
      .then((res) => setBook(res.data));
  };

  const deleteBooks = (id) => {
    setBook(books.filter((val) => val._id !== id));
    axios
      .delete(`http://localhost:7789/deletebook/${id}`)
      .then((res) => res.data);
  };

  useEffect(() => {
  getBooks();

  }, []);

  
  return (
    <div>
      <br />
      <div style={{ marginLeft: "70%" }}>
        <AiOutlineSearch style={{ fontSize: "2em" }} />

        <input 
          type="text"
          placeholder="seacrh by bookname"
          onChange={(e) => setsearchbar(e.target.value)}
        ></input>
      </div>
      <br></br>
      <table className="table">
        <thead>
          <th>NO.</th>
          <th>NAME</th>
          <th>AUTHOR</th>
          <th>COUNTRY</th>
          <th>YEAR</th>
          <th>AVAILABILITY </th>
        </thead>

        {currentPost&&currentPost.map((item, index) => {
            return (
              <>
                <tr>
                  <td>
                    <p>{postperpage * (currentPage - 1) + index + 1}</p>
                  </td>
                  <td>{item.Name} </td>
                  <td>{item.Author}</td>
                  <td>{item.Country}</td>
                  <td>{item.Year}</td>
                  <td>{item.Availability}</td>
                  <td>
                    <button
                    
                      type="button"
                      class="btn btn-outline-info"
                    >
                      <Link
                        to={`/Viewclient/${item._id}`}
                        style={{ textDecoration: "none", color: "darkblue" }}
                      >
                        view
                      </Link>
                    </button>
                  </td>
                  <td>
                    <button
                     
                      type="button"
                      class="btn btn-outline-success"
                    >
                      <Link
                        to={`/Crudedit/${item._id} `}
                        style={{ textDecoration: "none", color: "darkgreen" }}
                      >
                        edit
                      </Link>
                    </button>
                  </td>
                  <td>
                    <button
                      style={{ color: "dark" }}
                      type="button"
                      class="btn btn-outline-danger"
                      onClick={() => deleteBooks(item._id)}
                    >
                      delete
                    </button>
                  </td>
                </tr>
              </>
            );
          })}
      </table>
     
     
      <div className="d-flex justify-content-center">
        <Pagination
          setcurrentPage={setcurrentPage}
          postperpage={postperpage}
          totaldata={books.length}
        />
      </div>
      <br></br>
      <div className="d-flex justify-content-center">
        <Link
          style={{ textDecoration: "none", color: "green" }}
          to={"/Addbook"}
        >
          <FaPlus style={{ fontSize: "1em" }} />
          {/* <label style={{color:"black"}}>A</label> */}
        </Link>
      </div>
    </div>
  );
}

export default Books;
