import React from "react";
import dynamic from "next/dynamic";

type Props = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

const SafeHydrate = ({ children, ...props }: Props) => (
  <div {...props}>{children}</div>
);
export default dynamic(() => Promise.resolve(SafeHydrate), {
  ssr: false,
});
