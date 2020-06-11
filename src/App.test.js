import React from "react";
import { render, getByText, fireEvent } from "@testing-library/react";
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

test("can find submit button", () => {
  const { getByTestId } = render(<ContactForm />);
  getByTestId(/submit/i)
})
