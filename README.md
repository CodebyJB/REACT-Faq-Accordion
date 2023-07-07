# React JS FAQ Accordion

This project implements a simple FAQ accordion component using React JS. It allows users to expand and collapse individual FAQ items to reveal or hide their corresponding answers.

## Table of Contents

- [Introduction](#introduction)
- [Installation](#installation)
- [Usage](#usage)
- [Component Structure](#component-structure)
- [FAQ Data](#faq-data)
- [Contributing](#contributing)
- [License](#license)

## Introduction

The React JS FAQ Accordion is built using React functional components and the useState hook. It provides a straightforward way to display a list of FAQs and their respective answers in an accordion format. Users can click on each FAQ item to toggle its visibility and reveal or hide the answer.

## Installation

To run the project locally, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install the project dependencies by running the command: `npm install`.
4. Start the development server with: `npm start`.
5. Open your web browser and visit `http://localhost:3000` to view the application.

## Usage

The main entry point of the application is the `App` component, which renders the `Accordion` component. The `Accordion` component takes an array of FAQ objects as its `data` prop.

```jsx
import { useState } from "react";
import "./styles.css";

const faqs = [
  // ... FAQ objects
];

export default function App() {
  return (
    <div>
      <Accordion data={faqs} />
    </div>
  );
}
```

The `Accordion` component iterates over the FAQ data and renders multiple `AccordionItem` components. Each `AccordionItem` represents an individual FAQ item and takes the necessary props such as `title` and `text`.

```jsx
function Accordion({ data }) {
  const [curOpen, setCurOpen] = useState(null);

  return (
    <div className="accordion">
      {data.map((el, i) => (
        <AccordionItem
          curOpen={curOpen}
          onOpen={setCurOpen}
          title={el.title}
          num={i}
          key={el.title}
        >
          {el.text}
        </AccordionItem>
      ))}
    </div>
  );
}
```

The `AccordionItem` component represents a single FAQ item within the accordion. It receives the current open state (`curOpen`), a function to update the open state (`onOpen`), the FAQ item's `title`, `num`, and the `children` which represent the answer text.

```jsx
function AccordionItem({ num, title, curOpen, onOpen, children }) {
  const isOpen = num === curOpen;

  function handleToggle() {
    onOpen(isOpen ? null : num);
  }

  return (
    <div className={`item ${isOpen ? "open" : ""}`} onClick={handleToggle}>
      <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>

      {isOpen && <div className="content-box">{children}</div>}
    </div>
  );
}
```

## Component Structure

The project consists of three main components:

- **App**: The main component that renders the FAQ accordion component.
- **Accordion**: A component that iterates over the FAQ data and renders individual accordion items.
- **AccordionItem**: Represents an individual FAQ item within the accordion.

## FAQ Data

The FAQ data is provided as an array of objects. Each object contains a `title` and `text` property representing the question and answer, respectively.

```jsx
const faqs = [
  {
    title: "What is React JS?",
    text: "React JS - sometimes shortened to just ‘React’ is a JavaScript library created in 2011 by Facebook. It has been open source since 2013 - in addition to Facebook’s ongoing support and maintenance, there is also a growing community of developers and other actively-involved companies.",
  },
  // ... more FAQ objects
];
```

You can modify the `faqs` array in the `App` component to add, remove, or update FAQ items according to your needs.

## Contributing

Contributions to this project are welcome. If you find any issues or would like to add new features, please submit a pull request or open an issue on the project repository.

## License

This project is licensed under the [MIT License](LICENSE).