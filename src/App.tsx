import Layout from 'components/Layout';
import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/tags">
          <Tags />
        </Route>
        <Route path="/money">
          <Money />
        </Route>
        <Route path="/statistics">
          <Statistics />
        </Route>
        <Redirect exact from="/" to="/money" />
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </Router>
  );
}

function Money() {
  return (
    <Layout>
      <h2>记账</h2>
    </Layout>
  )
}

function Tags() {
  return (
    <Layout>
      <h2>标签</h2>
    </Layout>
  )
}

function Statistics() {
  return (
    <Layout>
      <h2>统计</h2>
    </Layout>
  )
}

function NoMatch() {
  return <h2>输入的路径不存在</h2>;
}

export default App;
