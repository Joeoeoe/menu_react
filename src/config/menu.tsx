import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";
import shortid from "shortid";
import { MenuItem } from "./types";
import { NewArticle, ArticleAdmin, FatherA, FatherB } from "../constants";

const { SubMenu } = Menu;

const menuArray: MenuItem[] = [
  {
    path: `${NewArticle.Index}`,
    text: "新文章",
  },
  {
    path: `${ArticleAdmin.Index}`,
    text: "文章管理",
  },
  {
    text: "父导航A",
    children: [
      {
        path: `${FatherA.SonA1}`,
        text: "子菜单A1",
      },
      {
        path: `${FatherA.SonA2}`,
        text: "子菜单A2",
      },
    ],
  },
  {
    text: "父导航B",
    children: [
      {
        text: "子导航B1",
        children: [
          {
            path: `${FatherB.GrandSonB1}`,
            text: "孙子菜单B1"
          },
          {
            path: `${FatherB.GrandSonB2}`,
            text: "孙子菜单B2"
          }
        ]
      },
      {
        path: `${FatherB.SonB2}`,
        text: "子菜单B2"
      }
    ]
  }
];

const generateMenu = (menuArray:MenuItem[]) => {
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

const MenuList = () => {
  const menuItemList = generateMenu(menuArray);
  return <Menu mode="inline">{menuItemList}</Menu>;
};

export default MenuList;
