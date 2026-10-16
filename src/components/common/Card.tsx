import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { ReactNode } from "react";

interface CardProps {
  title?: string;
  children?: ReactNode;
  deletable?: boolean;
  deleteAction?: () => void;
}

const Card = ({title, children, deletable, deleteAction}: CardProps) => {
  return (
    <div className="flex bg-white shadow-xl rounded-lg flex-col border-primary border-2 flex-1">
      <div className="text-white bg-primary mb-3 px-5 py-2 flex justify-between items-center">
        <h2 className="text-2xl font-bold">{title}</h2>
        {deletable && (
          <button onClick={deleteAction}>
            <FontAwesomeIcon icon={faXmark} />
          </button>
        )}
      </div>
      <div className="p-5">{children}</div>
    </div>
  )
}

export default Card;
