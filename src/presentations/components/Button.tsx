import React from "react";

export default function Button({
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const buttonClass = `min-w-20 shadow ${!props.disabled ? "bg-blue-500 hover:bg-blue-300" : "bg-gray-300"} p-2 rounded font-bold ${className}`;

  return <button className={buttonClass} {...props} />;
}
