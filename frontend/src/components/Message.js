import React from "react";

const Message = ({ colorText, msg }) => {
  const style = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    color: colorText,
    marginTop: "2rem",
  };
  return <h5 style={style}>{msg}</h5>;
};

export default Message;
