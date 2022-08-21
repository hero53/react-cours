import React from "react";
import ReactDOM from "react-dom";
import image_1 from "./pexels-1.jpg";
import image_2 from "./pexels-2.jpg";
import "./index.css";

const firstBook = {
  Author: " Kiny",
  Title: "Père riche",
  Image: image_1,
};

const books = [
  {
    id: 1,
    author: " Max",
    title: "Père riche",
    image: image_1,
    height: 200,
    width: 200,
  },
  {
    id: 2,
    author: " kiny",
    title: "L'alchimiste",
    image: image_2,
    height: 200,
    width: 200,
  },
];
function BookList() {
  return (
    <article className="booklist">
      {books.map((book) => {
        return <Book key={book.id} {...book}></Book>;
      })}
    </article>
  );
}
const Book = ({ image, height, width, title, author, children }) => {
  const clickHandler = (e) => {
    alert(e.target);
  };

  const conplexExanple = (author) => {
    alert(author);
  };
  return (
    <article
      className="book"
      onMouseOver={() => {
        alert(title);
      }}
    >
      <img src={image} alt="" height={height} width={width} />
      <h1>{title}</h1>
      <h4>{author}</h4>
      <button onClick={clickHandler}>click ici</button>
      <button onClick={() => conplexExanple(author)}>click ici</button>
    </article>
  );
};

ReactDOM.render(<BookList />, document.getElementById("root"));
