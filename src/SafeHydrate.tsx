import React from "react";
import dynamic from "next/dynamic";

const SafeHydrate = ({ children, ...props }) => (
  <div {...props}>{children}</div>
);
export default dynamic(() => Promise.resolve(SafeHydrate), {
  ssr: false,
});
