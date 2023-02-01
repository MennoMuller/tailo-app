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
    <div className="col-start-2 col-end-2 row-start-2 row-end-2 flex max-w-full flex-col rounded-2xl bg-blue-600 p-5 text-white dark:bg-indigo-900 sm:max-h-full">
      <h2 className="text-2xl font-bold">
        Random quote of the day
      </h2>
      <h3 className=" font-bold">"{quote.quote}"</h3>
      <p className="quote-author">-{quote.author}</p>
      <span className=" z-50 mt-auto inline-flex font-bold">
        <img
          src="https://theysaidso.com/branding/theysaidso.png"
          height="10"
          width="10"
          alt="theysaidso.com"
        />
        <a
          href="https://theysaidso.com"
          title="Powered by quotes from theysaidso.com"
          className="ml-1 align-middle text-xs text-blue-300"
        >
          They Said So®
        </a>
      </span>
    </div>
  );
};

export default WebsiteQuote;
