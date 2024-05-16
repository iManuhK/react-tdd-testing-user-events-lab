import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';

import App from "../App";

// Portfolio Elements
test("displays a top-level heading with the text `Hi, I'm _______`", () => {
  render(<App />);

  const topLevelHeading = screen.getByRole("heading", {
    name: /hi, i'm/i,
    exact: false,
    level: 1,
  });

  expect(topLevelHeading).toBeInTheDocument();
});

test("displays an image of yourself", () => {
  render(<App />);

  const image = screen.getByAltText("My profile pic");

  expect(image).toHaveAttribute("src", "https://img.freepik.com/free-psd/3d-illustration-person-with-glasses_23-2149436189.jpg?size=626&ext=jpg&ga=GA1.1.330517422.1715855935&semt=sph");
});

test("displays second-level heading with the text `About Me`", () => {
  render(<App />);

  const secondLevelHeading = screen.getByRole("heading", {
    name: /about me/i,
    level: 2,
  });

  expect(secondLevelHeading).toBeInTheDocument();
});

test("displays a paragraph for your biography", () => {
  render(<App />);

  const bio = screen.getByText(/lorem ipsum/i);

  expect(bio).toBeInTheDocument();
});

test("displays the correct links", () => {
  render(<App />);

  const githubLink = screen.getByRole("link", {
    name: /github/i,
  });
  const linkedinLink = screen.getByRole("link", {
    name: /linkedin/i,
  });

  expect(githubLink).toHaveAttribute(
    "href",
    expect.stringContaining("https://github.com")
  );

  expect(linkedinLink).toHaveAttribute(
    "href",
    expect.stringContaining("https://linkedin.com")
  );
});

// Newsletter Form - Initial State
test("the form includes text inputs for name and email address", () => {
  // your test code here
  render(<App />);

  const nameInput = screen.getByPlaceholderText("name");
  const emailInput = screen.getByPlaceholderText("email address");

  expect(nameInput).toBeInTheDocument();
  expect(emailInput).toBeInTheDocument();
});

test("the form includes three checkboxes to select areas of interest", () => {
  // your test code here
  render(<App />);

  const checkbox1 = screen.getByRole("checkbox",{
    name: /newsletters/i,
    checked: false,
    indeterminate: false,
    disabled: false,
    readOnly: false,
    type: "checkbox",
    value: "newsletters"
  });
  const checkbox2 = screen.getByRole("checkbox", {
    name: /events/i,
    checked: false,
    indeterminate: false,
    disabled: false,
    readOnly: false,
    type: "checkbox",
    value: "events"
  });
  const checkbox3 = screen.getByRole("checkbox", {
    name: /jobs/i,
    checked: false,
    indeterminate: false,
    disabled: false,
    readOnly: false,
    type: "checkbox",
    value: "jobs"
  });

  expect(checkbox1).toBeInTheDocument();
  expect(checkbox2).toBeInTheDocument();
  expect(checkbox3).toBeInTheDocument();
});

test("the checkboxes are initially unchecked", () => {
  // your test code here
});

// Newsletter Form - Adding Responses
test("the page shows information the user types into the name and email address form fields", () => {
  // your test code here
});

test("checked status of checkboxes changes when user clicks them", () => {
  // your test code here
});

test("a message is displayed when the user clicks the Submit button", () => {
  // your test code here
});
