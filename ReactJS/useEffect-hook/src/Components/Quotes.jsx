import React from "react";

const Quotes = ({ quotes }) => {
  return (
    <div
      className="container"
      style={{
        border: "1px solid red",
        width: "90vw",
        boxSizing: "content-box",
        display: "grid",
        gridTemplateColumns: "repeat(6, 1fr)",
        rowGap: "1rem",
        margin: "0",
      }}
    >
      {quotes.length > 0 ? (
        quotes.map((quote) => (
          <div
            key={quote.id}
            style={{
              minWidth: "150px",
              minHeight: "150px",
              border: "1px solid black",
              display: "grid",
              margin: "5px",
              padding: "5px",
              textAlign: "justify",
            }}
          >
            {quote.quote}
          </div>
        ))
      ) : (
        <p>Loading Quotes</p>
      )}
    </div>
  );
};

export default Quotes;
