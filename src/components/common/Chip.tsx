import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ChipProps {
  label?: string;
  deleteAction?: () => void;
}

const Chip = ({label, deleteAction}: ChipProps) => {
  return (
    <div className="bg-primary rounded-xl px-3 py-1 text-white flex justify-between items-center gap-2">
      {label}
      <button onClick={deleteAction}>
        <FontAwesomeIcon icon={faXmark} />
      </button>
    </div>
  )
}

export default Chip;