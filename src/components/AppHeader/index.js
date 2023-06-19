import { Badge, Image, Space, Typography } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
function AppHeader() {
  return (
    <div className="AppHeader">
      <Image
        width={100}
        src="https://eduplus.edu.vn/wp-content/uploads/2020/09/49329780_2174851519232120_4559172458321543168_n.png"
      ></Image>
      <Typography.Title>User Management</Typography.Title>
      <Space>
        <Link to="/login">
          <Badge>
            <UserOutlined style={{ fontSize: 24 }} />
          </Badge>
        </Link>
        
      </Space>
    </div>
  );
}
export default AppHeader;




