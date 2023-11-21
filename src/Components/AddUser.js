import { useNavigate, useParams } from "react-router-dom";
import { addUser, getUserById } from "../Components/LocalStorage";
import { useForm } from "../Components/UseForm";
import uuid from "react-uuid";
import { useState, useEffect } from "react";
import { editUser } from "../Components/LocalStorage";

export const UserForm = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { inputValues, handleInputChange, resetForm, setForm } = useForm({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    country: "",
    postalcode: "",
  });

  useEffect(() => {
    if (id) {
      const user = getUserById(id);
      setForm(user);
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    id
      ? editUser(id, inputValues)
      : addUser({ id: uuid(), ...inputValues });
    resetForm();
    navigate("/")
  };

  return (
    <div>
      <h3 className="text-center">{id ? "Edit User" : "Add User"}</h3>
      <div className="card p-5 my-4 mx-4">
        <form
          onSubmit={handleSubmit}
        >
          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label">First Name</label>
              <input
                type="text"
                className="form-control"
                name="firstname"
                value={inputValues.firstname}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label">Last Name</label>
              <input
                type="text"
                className="form-control"
                name="lastname"
                value={inputValues.lastname}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label">Email </label>
              <input
                type="text"
                className="form-control"
                name="email"
                value={inputValues.email}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label">Phone Number</label>
              <input
                type="text"
                className="form-control"
                name="phone"
                value={inputValues.phone}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label">Address</label>
              <input
                type="text"
                className="form-control"
                name="address"
                value={inputValues.address}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label">City</label>
              <input
                type="text"
                className="form-control"
                name="city"
                value={inputValues.city}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label">State</label>
              <input
                type="text"
                className="form-control"
                name="state"
                value={inputValues.state}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label">Country</label>
              <input
                type="text"
                className="form-control"
                name="country"
                value={inputValues.country}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label">Postal Code</label>
              <input
                type="text"
                className="form-control"
                name="postalcode"
                value={inputValues.postalcode}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              {id ? "Edit" : "Add"} User
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
