import React from "react";

export const Button = ({ onClick, outline, cart, add, children }) => {
  const classes = ["button"];

  if (outline) {
    classes.push("button--outline");
  }
  if (cart) {
    classes.push("button--cart");
  }
  if (add) {
    classes.push("button--add");
  }

  return (
    <button onClick={onClick} className={classes.join(" ")}>
      {children}
    </button>
  );
};
