import React from "react";
import { render, getByText, getByPlaceholderText, getByDisplayValue, fireEvent } from "@testing-library/react";
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

test("finds error", () => {
  const { getByText } = render(<ContactForm />)
  getByText(/maxlength/i)
})
