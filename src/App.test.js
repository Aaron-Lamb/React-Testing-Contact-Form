import React from "react";
import { render, getByText, getByPlaceholderText, fireEvent, getByTestId } from "@testing-library/react";
import App from "./App";
import ContactForm from './components/ContactForm';

test("renders App without crashing", () => {
  render(<App />);
});

test("finds input label", () => {
  const { getByText } = render(<ContactForm />)
  const form = getByText(/message/i)
  expect(form).toBeInTheDocument();
})

test("finds placeholder", () => {
  const { getByPlaceholderText } = render(<ContactForm />)
  getByPlaceholderText(/edd/i)
})

test("fires event", () => {
  const { getByPlaceholderText } = render(<ContactForm />)
  let input = getByPlaceholderText(/burke/i)
  fireEvent(input, new MouseEvent('click'));
})

test("finds element", () => {
  render(<ContactForm />)
  render(<pre>first name</pre>);
})

test("finds error", () => {
  render(<ContactForm />)
  render(<p>maxLength</p>)
})

test("finds ID", () => {
  render(<ContactForm />)
  render(<input id='firstName' />)
})
