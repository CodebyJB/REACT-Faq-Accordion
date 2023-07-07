import { useState } from "react";
import "./styles.css";

const faqs = [
  {
    title: "What is React JS?",
    text: "React JS - sometimes shortened to just ‘React’ is a JavaScript library created in 2011 by Facebook. It has been open source since 2013 - in addition to Facebook’s ongoing support and maintenance, there is also a growing community of developers and other actively-involved companies.",
  },
  {
    title: "Is React JS a framework or a library?",
    text: "React JS is a library, not a framework. It focuses on the view layer of the MVC (Model-View-Controller) framework, so it is a part of creating a framework. That said, many people find that it has some features that enable it to help build or support larger frameworks. This is especially true when factoring in the wider ecosystem.",
  },
  {
    title: "When is React JS development useful?",
    text: "ReactJS is useful for creating user interfaces with reusable components. It handles the view layer for web and mobile development. It is particularly useful for single-page applications, but can also be used for mobile, web and progressive web applications as well.",
  },
];

export default function App() {
  return (
    <div>
      <Accordion data={faqs} />
    </div>
  );
}

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
