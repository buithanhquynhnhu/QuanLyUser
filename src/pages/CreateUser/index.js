import React, { useState,useEffect } from "react";
import { Table, Button, Modal, Input } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import axios from "axios";
import "./create.css";

const CreateUser = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/users")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);
  
  const columns = [
    {
      key: "1",
      title: "UserName",
      dataIndex: "userName",
    },
    {
      key: "2",
      title: "Password",
      dataIndex: "password",
    },
    {
      key: "3",
      title: "Email",
      dataIndex: "email",
    },
    {
      key: "4",
      title: "FirstName",
      dataIndex: "firstName",
    },
    {
      key: "5",
      title: "SurName",
      dataIndex: "surName",
    },
    {
      key: "6",
      title: "FullName",
      dataIndex: "fullName",
    },
    {
      key: "7",
      title: "Address",
      dataIndex: "address",
    }
  ];

  const AddUser = () => {
    const randomNumber = parseInt(Math.random() * 1000);
    const newUser = {
      id: randomNumber,
      userName: "UserName" + randomNumber,
      email: randomNumber + "@gmail.com",
      address: "Address" + randomNumber,
      password: "Password" + randomNumber,
      firstName: "FirstName" + randomNumber,
      surName: "SurName" + randomNumber,
      fullName: "FullName" + randomNumber,
    };
    axios
      .post("http://localhost:3000/users", newUser)
      .then((res) => alert("Create successful!"))
      .catch((err) => console.log(err));
  };


return (
  <div className="create__user">
    <Button onClick={AddUser} className="button__user" type="primary">
      Create a new User
    </Button>
    <Table columns={columns} dataSource={data}></Table>
   
  </div>
);
};
export default CreateUser;