import React, { useEffect, useState } from "react";
import { Button, Space, Table } from "antd";
import { getListUser } from "./LocalStorage";
import { useNavigate } from "react-router-dom";
export const UserList = () => {
  const [sortedInfo, setSortedInfo] = useState({});
  const handleChange = (pagination, filters, sorter) => {
    setSortedInfo(sorter);
  };
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const userlist = getListUser();
    setUsers(userlist);
  }, []);

  const columns = [
    {
      title: "First Name",
      dataIndex: "firstname",
      key: "firstname",
      sorter: (a, b) => a.firstname.localeCompare(b.firstname),
      sortOrder: sortedInfo.columnKey === "firstname" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Last Name",
      dataIndex: "lastname",
      key: "lastname",
      sorter: (a, b) => a.lastname.localeCompare(b.lastname),
      sortOrder: sortedInfo.columnKey === "lastname" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      sorter: (a, b) => a.email.localeCompare(b.email),
      sortOrder: sortedInfo.columnKey === "email" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
      sorter: (a, b) => a.phone - b.phone,
      sortOrder: sortedInfo.columnKey === "phone" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
      sorter: (a, b) => a.address.localeCompare(b.address),
      sortOrder: sortedInfo.columnKey === "address" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "City",
      dataIndex: "city",
      key: "city",
      sorter: (a, b) => a.city.localeCompare(b.city),
      sortOrder: sortedInfo.columnKey === "city" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "State",
      dataIndex: "state",
      key: "state",
      sorter: (a, b) => a.state.localeCompare(b.state),
      sortOrder: sortedInfo.columnKey === "state" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Country",
      dataIndex: "country",
      key: "country",
      sorter: (a, b) => a.country.localeCompare(b.country),
      sortOrder: sortedInfo.columnKey === "country" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Postal Code",
      dataIndex: "postalcode",
      key: "postalcode",
      sorter: (a, b) => a.postalcode - b.postalcode,
      sortOrder:
        sortedInfo.columnKey === "postalcode" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Action",
      dataIndex: "id",
      key: "action",
      render: (id) => (
        <div className="d-flex gap-3">
          <span
            type="button"
            className="badge bg-primary"
            onClick={() => navigate(`/edituser/${id}`)}
          >
            Edit
          </span>
        </div>
      ),
    },
  ];
  return (
    <>
      {users?.length > 0 ? (
        <div className="container mt-4">
          <div className="row">
            <div className="col-md-6">
              <h3 className="">User Lists</h3>
            </div>

            <div className="col-md-6 d-flex justify-content-end">
              <Button
                type="primary"
                className="mt-3 mt-md-0"
                onClick={() => navigate("/adduser")}
              >
                Add User
              </Button>
            </div>
          </div>

          <Table columns={columns} dataSource={users} onChange={handleChange} />
        </div>
      ) : (
        <h3 className="text-center mb-4">No Data Found</h3>
      )}
    </>
  );
};
