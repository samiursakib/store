import React, { useState } from "react";

// Styles
import "./app.scss";
import "bootstrap/dist/css/bootstrap.css";


// Components
import { Container } from 'react-bootstrap';
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Customer } from "./section/Customer";
import { Tab } from "./components/Header/Tab";
import { Order } from "./section/Order";
import { Product } from "./section/Product";
import { Supplies } from "./section/Supplies";

function App() {
  const [selected, setSelected] = useState('Products');
  return (
    <div className = "app">
      <Container>
        <Header tabs = {['Products', 'Orders', 'Customers', 'Supplies']} selected = {selected} setSelected = {(tab) => setSelected(tab)}>
          <Tab isSelected = {selected === 'Products'}>
            <Product />
          </Tab>
          <Tab isSelected = {selected === 'Orders'}>
            <Order />
          </Tab>
          <Tab isSelected = {selected === 'Customers'}>
            <Customer />
          </Tab>
          <Tab isSelected = {selected === 'Supplies'}>
            <Supplies />
          </Tab>
        </Header>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
