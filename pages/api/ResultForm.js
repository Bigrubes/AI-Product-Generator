import { useState, useEffect, handleSubmit } from "react";
import styles from "./index.module.css";
import Navigation from './Navigation'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {Form} from 'react-bootstrap'
import Card from "react-bootstrap/Card";


const ResultForm = (props) => {
  const [productInput, setProductInput] = useState('');
  const [result, setResult] = useState('');

  useEffect(() => {
    const data = window.localStorage.getItem('result');
    if ( data !== null ) setResult(JSON.parse(data));
  }, []);

  useEffect(() => {
    window.localStorage.setItem('result', JSON.stringify(result));
  }, [result]);

  const handleChange = (e) => {
    setProductInput(e.target.value)
  };

  async function handleSubmit(e) {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text:productInput
    });
    setProductInput('');
  
  
    const response = await fetch("/api/Generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ product: productInput }),
    });
    const data = await response.json();
    setResult(data.result);
    setProductInput("");
  }

  return (
    <div>
      <Navigation/>
      <main className={styles.main}>
        <h3 className="title">Welcome to AI Product Website Generator</h3>
        <Form onSubmit={handleSubmit}>
          <input
            type="text"
            name="product"
            placeholder="Enter a Product"
            value={productInput}
            onChange={handleChange}
          />
          <input type="submit" value="Generate website name and description" />
        </Form>
        <Form className={styles.result}>{result}</Form>
      </main>
      </div>
  );
}
export default ResultForm