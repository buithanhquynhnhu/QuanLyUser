import { Menu } from "antd";
import { AppstoreOutlined, FolderViewOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

function SideMenu() {
  const navigate = useNavigate();
  return (
    <div className="SideMenu">
      <Menu
        onClick={(item) => {
          navigate(item.key);
        }}
        items={[
          {
            label: "View User",
            icon: <AppstoreOutlined />,
            key: "/ViewUser",
          },
          {
            label: "Create User",
            icon: <FolderViewOutlined />,
            key: "/CreateUser",
          },
          ,
          {
            label: "Weather App",
            icon: <AppstoreOutlined />,
            key: "/WeatherApp",
          },
        ]}
      ></Menu>
    </div>
  );
}
export default SideMenu;


