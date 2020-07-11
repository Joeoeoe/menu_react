// eslint-disable-next-line import/no-extraneous-dependencies
import { hot } from "react-hot-loader/root"; // 热替换
import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Layout } from "antd";
import RouteComs from "./routes";

import Menu from "./config/menu";

const {
  Header, Content, Footer, Sider,
} = Layout;

function App() {
  return (
    <Router>
      <Layout style={{ minHeight: "100vh" }}>
        <Sider>
          <Menu />
        </Sider>
        <Layout>
          <Content>
            {RouteComs}
          </Content>
        </Layout>
      </Layout>
    </Router>
  );
}

export default hot(App);
