import { Form, Input, Button } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./update.css"
const Update = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [dataSingle, setDataSingle] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/users/${id}`)
      .then((res) => setDataSingle(res.data))
      .catch((err) => console.log(err));
  }, []);
  function handleSubmit(values) {
    values.preventDefault();
    axios.put(`http://localhost:3000/users/${id}`, dataSingle).then((res) => {
      alert("Update successful!");
      navigate("/viewuser");
    });
  }
  console.log(dataSingle);
 
  return (
    <div className="form__update" >
      <h3>Update User</h3>
      <Form>
        <Form.Item>
          <Input
            value={dataSingle.userName}
            onChange={(e) =>
              setDataSingle({ ...dataSingle, userName: e.target.value })
            }
            placeholder="Enter your userName" 
          />
        </Form.Item>
        <Form.Item>
          <Input
            value={dataSingle.password}
            onChange={(e) =>
              setDataSingle({ ...dataSingle, password: e.target.value })
            }
            placeholder="Enter your password" 
          />
        </Form.Item>
        <Form.Item>
          <Input
            value={dataSingle.email}
            onChange={(e) =>
              setDataSingle({ ...dataSingle, email: e.target.value })
            }
            placeholder="Enter your email" 
          />
        </Form.Item>
        <Form.Item>
          <Input
            value={dataSingle.firstName}
            onChange={(e) =>
              setDataSingle({ ...dataSingle, firstName: e.target.value })
            }
            placeholder="Enter your firstName" 
          />
        </Form.Item>
        <Form.Item>
          <Input
            value={dataSingle.surName}
            onChange={(e) =>
              setDataSingle({ ...dataSingle, surName: e.target.value })
            }
            placeholder="Enter your surName" 
          />
        </Form.Item>
        <Form.Item>
          <Input
            value={dataSingle.fullName}
            onChange={(e) =>
              setDataSingle({ ...dataSingle, fullName: e.target.value })
            }
            placeholder="Enter your fullName" 
          />
        </Form.Item>
        <Form.Item>
          <Input
            value={dataSingle.address}
            onChange={(e) =>
              setDataSingle({ ...dataSingle, address: e.target.value })
            }
            placeholder="Enter your address" 
          />
        </Form.Item>
        <Button onClick={handleSubmit} type="primary">
          Update
        </Button>
      
      </Form>
    </div>
  );
};

export default Update;
