import React from "react";
import PropTypes from "prop-types";

const Rating = ({ value, text, color }) => {
  // const { value, text } = props;
  return (
    <div className="rating">
      <span>
        <i
          style={{ color: color }}
          className={
            value >= 1
              ? "fas fa-star"
              : value >= 0.5
              ? "fas fa-star-half-alt"
              : "far fa-star"
          }
        >
          {" "}
        </i>
      </span>
      <span>
        <i
          style={{ color: color }}
          className={
            value >= 2
              ? "fas fa-star"
              : value >= 1.5
              ? "fas fa-star-half-alt"
              : "far fa-star"
          }
        >
          {" "}
        </i>
      </span>
      <span>
        <i
          style={{ color: color }}
          className={
            value >= 3
              ? "fas fa-star"
              : value >= 2.5
              ? "fas fa-star-half-alt"
              : "far fa-star"
          }
        >
          {" "}
        </i>
      </span>
      <span>
        <i
          style={{ color: color }}
          className={
            value >= 4
              ? "fas fa-star"
              : value >= 3.5
              ? "fas fa-star-half-alt"
              : "far fa-star"
          }
        >
          {" "}
        </i>
      </span>
      <span>
        <i
          style={{ color: color }}
          className={
            value >= 5
              ? "fas fa-star"
              : value >= 4.5
              ? "fas fa-star-half-alt"
              : "far fa-star"
          }
        >
          {" "}
        </i>
      </span>
      <span>{text ? text : ""}</span>
    </div>
  );
};
//not passing color as a prop but setting it's default value for this component
Rating.defaultProps = {
  color: "#f8e825",
};

// just for type checking (completely optional) - if number is passed as text prop from Product it will show an error in console.
// Rating.propTypes = {
//   value: PropTypes.number.isRequired,
//   text: PropTypes.string.isRequired,
//   color: PropTypes.string,
// };

export default Rating;

// {text ? text : " "}  same as {text && text}
