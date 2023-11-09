import React, { useState } from "react";
import { Button } from "@mui/material";
import PropTypes from "prop-types";

const useButtonController = () => {
  const [text, setText] = useState("Hi")

return {
  text, 
  setText
};
};

const CustomButton = ({
  variant,
  children,
  href,
  disabled,
  onClick,
  color,
  size,
  startIcon,
  endIcon,
  style,
  sx
}) => {
  const { text, setText } = useButtonController();
  return (
    <Button
      variant={variant}
      disabled={disabled}
      href={href}
      onClick={onClick}
      color={color}
      size={size}
      startIcon={startIcon}
      endIcon={endIcon}
      sx={sx}
      style={style}
    >
      {children}
    </Button>
  );
};

CustomButton.defaultProps = {
  variant: "contained",
  color:"secondary",
  size: "large"
};

CustomButton.propTypes = {
  variant: PropTypes.oneOf(["text","contained","outlined"]),
  color: PropTypes.oneOf(["primary","secondary","success","error"]),
  size: PropTypes.oneOf(["small","medium","large"])
};

export default CustomButton;
