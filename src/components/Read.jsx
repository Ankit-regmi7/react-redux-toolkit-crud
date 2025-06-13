import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showUser, deleteUser } from "../features/userDetailSlice";
import CustomModal from "./CustomModal";
import { Link } from "react-router-dom";

const Read = () => {
  const dispatch = useDispatch();

  const [id, setId] = useState();
  const [showPopup, setShowPopup] = useState(false)
  const [radioData, setRadioData] = useState("")

  const {users, loading, searchData} = useSelector((state) => state.app);

  useEffect( () => {
    dispatch(showUser())
  }, []);

  if(loading){
    return (<h2>Loading</h2>)
  }



  return (
    <div className=""> 
    { showPopup &&
      (<CustomModal id={id} showPopup={showPopup} setShowPopup={setShowPopup} />)
    }




      <h2 className="">All Data</h2>
      <input className="form-check-input" value="All" name="gender" type="radio" checked = {radioData === "" || radioData === "All"} onChange={(e) => setRadioData(e.target.value)}
      />
      <label className="form-check-label">All</label>

      <input className="form-check-input" name="gender" value="Male" type="radio" checked={radioData === "Male"} 
      onChange={(e) => setRadioData(e.target.value)}
      />
      <label className="form-check-label">Male</label>

      <input type="radio" name="gender" className="form-check-input" value="Female" checked= {radioData === "Female"}
      onChange={(e) => setRadioData(e.target.value)}
       />
      <label className="form-check-label">Female</label>


      <div className="">
      { users &&

        users.filter((ele) => {
          if(searchData.length === 0){
            return ele
          }
          else{
            return ele.name.toLowerCase().includes(searchData.toLowerCase())
          }
        }).filter((ele) => {
          if(radioData === "Male"){
            return ele.gender === radioData
          }
          else if(radioData === "Female"){
            return ele.gender === radioData
          }
          else{
            return ele
          }
        })

        .map((user) => (
          <div>
        <div key={user.id} className="card w-50 mx-auto my-2">
          <div className="card-body">
            <h5 className="card-title">{user.name}</h5>
            <h6 className="card-subtitle mb-2 text-body-secondary text-muted">
              {user.email}
            </h6>
            <p className="card-text">
              my gender is: {user.gender}
            </p>
            <button className="card-link" onClick={() => [setId(user.id), setShowPopup(true)]}>
              View
            </button>
            <Link to={`/edit/${user.id}`} className="card-link">
              Edit
            </Link>
            <Link onClick={() => dispatch(deleteUser(user.id))} className="card-link">
              Delete
            </Link>
          </div>
        </div>
      </div>
        ))
      }
      </div>
      
    </div>
  );
};

export default Read;
