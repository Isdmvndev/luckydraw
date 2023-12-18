import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const items: MenuProps["items"] = [
  {
    label: (
      <Link to="/luckydraw" rel="noopener noreferrer">
        Quay số
      </Link>
    ),
    key: "/luckydraw",
    icon: <MailOutlined />,
  },
  {
    label: "Navigation Two",
    key: "app",
    icon: <AppstoreOutlined />,
    disabled: true,
  },
  {
    label: "Cấu hình quay số",
    key: "SubMenu",
    icon: <SettingOutlined />,
    children: [
      {
        type: "group",
        label: "Lần quay",
        children: [
          {
            label: (
              <Link to="/turn/list" rel="noopener noreferrer">
                Danh sách các lần quay
              </Link>
            ),
            key: "/turn/list",
          },
          {
            label: (
              <Link to="/prize" rel="noopener noreferrer">
                Quay số
              </Link>
            ),
            key: "setting:2",
          },
        ],
      },
      {
        type: "group",
        label: "Cấu hình tỉ lệ",
        children: [
          {
            label: "Cấu hình tỉ lệ phòng ban",
            key: "setting:3",
          },
          {
            label: "Option 4",
            key: "setting:4",
          },
        ],
      },
    ],
  },
  {
    label: (
      <Link to="/turn1" rel="noopener noreferrer">
        Giai thuong
      </Link>
    ),
    key: "/turn1",
  },
];

const MenuItem: React.FC = () => {
  let location = useLocation();
  const [current, setCurrent] = useState(
    location.pathname === "/" || location.pathname === ""
      ? "/luckydraw"
      : location.pathname,
  );
  //or simply use const [current, setCurrent] = useState(location.pathname)

  useEffect(() => {
    if (location) {
      if (current === "/luckydraw" && location.pathname==="/") {
        setCurrent(current);
      } else if (current !== location.pathname) {
        setCurrent(location.pathname);
      }
    }
  }, [location, current]);

  function handleClick(e: any) {
    setCurrent(e.key);
  }

  return (
    <Menu
      theme="dark"
      onClick={handleClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
    />
  );
};

export default MenuItem;
