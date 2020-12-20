import React from "react";
import "./styles.css";
import { useState } from "react";

const bookDB = {
  Action: [
    { name: "Journey to the center of earth", rating: "4/5" },
    { name: "The Empty Houes", rating: "3.5/5" },
    { name: "The three musketeers", rating: "4/5" }
  ],

  Classic: [
    { name: "To kill a Mockingbird", rating: "5/5" },
    { name: "Little woman", rating: "3.5/5" },
    { name: "Beloved", rating: "4/5" }
  ],
  Comic: [
    { name: "Watchmen", rating: "4/5" },
    { name: "The Walking Dead", rating: "3.5/5" },
    { name: "The boy, the mole, the fox and the horse", rating: "4/5" }
  ],

  Mystery: [
    { name: "The Night Fire", rating: "4/5" },
    { name: "The Adventure Of Sherlock Holmes", rating: "3.5/5" },
    { name: "And then there was none", rating: "4/5" }
  ],
  Fantasy: [
    { name: "The water dancer", rating: "4/5" },
    { name: "Circe", rating: "3.5/5" },
    { name: "Ninth house", rating: "4/5" }
  ],
  Selfhelp: [
    { name: "Everything is fucked", rating: "4/5" },
    { name: "The secret", rating: "3.5/5" },
    { name: "Dare to lead", rating: "4/5" }
  ],

  History: [
    { name: "John Adams", rating: "4/5" },
    { name: "1776", rating: "3.5/5" },
    { name: "The Six Wives Of Henry VIII", rating: "4/5" }
  ],

  Health: [
    {
      name: "Lies",
      rating: "5/5"
    }
  ],

  business: [
    {
      name: "Never Split the Difference",
      rating: "3.5/5"
    },
    {
      name: "Rich Dad Poor Dad",
      rating: "5/5"
    }
  ],
  Mythology: [
    { name: "Treasure Of Greek Mythology", rating: "4/5" },
    { name: "Norse God And Giants", rating: "3.5/5" },
    { name: "The three musketeers", rating: "4/5" }
  ],
  Romance: [
    { name: "Fifty Shades Of Grey", rating: "4/5" },
    { name: "The Notebook", rating: "3.5/5" },
    { name: "Perfect chemistery", rating: "4/5" }
  ],
  Satire: [
    { name: "Animal farm", rating: "4/5" },
    { name: "catch-22", rating: "3.5/5" },
    { name: "Cat's Craddle", rating: "4/5" }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("business");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1 id="heading">
        <strong>Book&Bliss</strong>
      </h1>
      <p style={{ fontSize: "medium" }}>
        {" "}
        If you don't like to read, you haven't found the right book. - J.K
        Rowling
      </p>

      <div>
        {Object.keys(bookDB).map((genre) => (
          <button
            class="btn"
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              background: "#E5E7EB",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {bookDB[selectedGenre].map((book) => (
            <li
              key={book.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {book.name} </div>
              <div style={{ fontSize: "smaller" }}> {book.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
