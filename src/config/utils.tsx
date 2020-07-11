import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";
import shortid from "shortid";
import { MenuItem } from "./types";

const { SubMenu } = Menu;

export const generateMenu = (menuArray:MenuItem[]) => {
  const itemList = [];
  for (const item of menuArray) {
    if (item.children) {
      const subList = generateMenu(item.children);
      itemList.push((
        <SubMenu title={item.text}>
          {subList}
        </SubMenu>));
    } else {
      itemList.push((
        <Menu.Item>
          <Link to={item.path}>
            {item.text}
          </Link>
        </Menu.Item>));
    }
  }
  return itemList;
};
