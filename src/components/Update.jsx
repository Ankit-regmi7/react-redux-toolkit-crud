import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateUser } from "../features/userDetailSlice";

const Update = () => {
  const { id } = useParams();  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [updateData, setUpdateData] = useState();

  const { users, loading } = useSelector((state) => state.app);

  useEffect(() => {
    if (id) {
            const singleUser = users.filter((ele) => ele.id === id);
            setUpdateData(singleUser[0])
    }
  }, []);

  const newData = (e) => {
    setUpdateData({ ...updateData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUser(updateData));
    navigate("/read");
  };

  return (
    <div className="d-flex flex-column align-items-center justify-content-center mt-5">
      <h2>Edit the data</h2>
      <form className="w-50 mx-auto " onSubmit={handleSubmit} >
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            name="name"
            className="form-control"
            id="name"
            onChange={newData}
            value={updateData && updateData.name}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            name="email"
            className="form-control"
            id="email"
            onChange={newData}
            value={updateData && updateData.email}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="age" className="form-label">
            Age
          </label>
          <input
            type="text"
            name="age"
            className="form-control"
            id="age"
            onChange={newData}
            value={updateData && updateData.age}
          />
        </div>

        <div className="mb-3">
          <input
            className="form-check-input"
            name="gender"
            type="radio"
            value="Male"
            onChange={newData}
            checked = {updateData && updateData.gender === 'Male'}
          />
          <label className="form-check-label">Male</label>
        </div>
        <div className="mb-3">
          <input
            className="form-check-input"
            name="gender"
            type="radio"
            value="Female"
            onChange={newData}
            checked = {updateData && updateData.gender === 'Female'}
          />
          <label className="form-check-label">Female</label>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Update;
