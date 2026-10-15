import type { ReactNode } from "react";

interface CardProps {
  title?: string;
  children?: ReactNode;
}

const Card = ({title, children}: CardProps) => {
  return (
    <div className="flex bg-white shadow-xl rounded-lg flex-col border-primary border-2">
      <h2 className="text-white bg-primary text-2xl font-bold mb-3 px-5 py-2">{title}</h2>
      <div className="p-5">{children}</div>
    </div>
  )
}

export default Card;
