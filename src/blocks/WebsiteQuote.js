import React, { useEffect, useState } from "react";

const WebsiteQuote = () => {
  const [quote, setQuote] = useState({
    quote: "Loading quote...",
    author: "Quote API"
  });

  useEffect(() => {
    fetch("https://quotes.rest/qod?language=en")
      .then((response) => response.json())
      .then((data) => setQuote(data.contents.quotes[0]))
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="grid-item item-c blue">
      <h2>Random quote of the day</h2>
      <h3 className="quote">"{quote.quote}"</h3>
      <p className="quote-author">-{quote.author}</p>
      <span className="tss-span">
        <img
          src="https://theysaidso.com/branding/theysaidso.png"
          height="10"
          width="10"
          alt="theysaidso.com"
        />
        <a
          href="https://theysaidso.com"
          title="Powered by quotes from theysaidso.com"
          className="tss-a"
        >
          They Said So®
        </a>
      </span>
    </div>
  );
};

export default WebsiteQuote;
