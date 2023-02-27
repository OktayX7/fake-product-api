import React from "react";

export const Badge = ({variant, children, className}) => {
  return <span className={`badge bg-${variant} ${className}`}>{children}</span>;
};
