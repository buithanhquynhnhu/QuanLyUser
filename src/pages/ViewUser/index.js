import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Table,Modal } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import axios from "axios";
import "./viewuser.css";

const User = () => {
  const [data, setData] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3000/users")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);
  const onDeleteUser = (item) => {
    Modal.confirm({title: "You want to delete this User item ?",
    okText: "Delete",
    okType: "danger",
    onOk: () => {
      setData((pre) => {
        return pre.filter((user) => user.id !== item.id);
      });
    },
  });
};
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
    },
    {
      key: "8",
      title: "Actions",
      render: (item) => {
        return (
          <>
            <EditOutlined
              onClick={() => {
                navigate(`/update/${item.id}`);
              }}
            />
            <DeleteOutlined
              onClick={() => {
                onDeleteUser(item);
              }}
              style={{ color: "red", marginLeft: 12 }}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="list__user">
      <Table columns={columns} dataSource={data}></Table>
    </div>
  );
};

export default User;
