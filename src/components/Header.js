import React, { useEffect } from "react";

// class Header extends React.Component {
//   componentDidMount() {
//     this.timerID = setInterval(
//       () => this.props.tick(),
//       500
//     );
//   }

//   componentWillUnmount() {
//     clearInterval(this.timerID);
//   }

//   getDate = (date) => {
//     return (
//       date.getDate() +
//       "/" +
//       (date.getMonth() + 1) +
//       "/" +
//       date.getFullYear()
//     );
//   };

//   getTime = (date) => {
//     return (
//       date.getHours() +
//       ":" +
//       (date.getMinutes() >= 10
//         ? date.getMinutes()
//         : "0" + date.getMinutes()) +
//       ":" +
//       (date.getSeconds() >= 10
//         ? date.getSeconds()
//         : "0" + date.getSeconds())
//     );
//   };

//   render() {
//     return (
//       <header>
//         <span className="date">
//           {this.getDate(this.props.date)}
//         </span>
//         <span className="time">
//           {this.getTime(this.props.date)}
//         </span>
//       </header>
//     );
//   }
// }

const Header = (props) => {
  let timerID;

  useEffect(() => {
    timerID = setInterval(() => props.tick(), 500);
    return function cleanup() {
      clearInterval(timerID);
    };
  });

  const getDate = (date) => {
    return (
      date.getDate() +
      "/" +
      (date.getMonth() + 1) +
      "/" +
      date.getFullYear()
    );
  };

  const getTime = (date) => {
    return (
      date.getHours() +
      ":" +
      (date.getMinutes() >= 10
        ? date.getMinutes()
        : "0" + date.getMinutes()) +
      ":" +
      (date.getSeconds() >= 10
        ? date.getSeconds()
        : "0" + date.getSeconds())
    );
  };

  return (
    <header>
      <span className="date">{getDate(props.date)}</span>
      <span className="time">{getTime(props.date)}</span>
    </header>
  );
};

export default Header;
