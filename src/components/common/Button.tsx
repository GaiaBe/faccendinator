import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ButtonProps {
  label?: string;
  icon?: IconDefinition;
  variant?: "primary" | "secondary" | "ghost" | 'negative';
  onClick: () => void;
}

const Button = ({label, icon, onClick, variant = "primary"}: ButtonProps) => {
  return (
    <button
      className={
        `flex px-5 py-2 rounded-lg gap-2 justify-center items-center
        ${variant !== 'ghost' && 'hover:opacity-75'}
        ${variant === 'primary' ? 
          'text-white bg-primary'
           : 
          variant === 'ghost' ? 
            'bg-primary text-white opacity-35 cursor-not-allowed'
           :
          variant === 'negative' ? 'bg-negative text-white'
           : 
            'text-primary bg-white border border-primary'
        }
        `
      }
      onClick={onClick}
      disabled={variant === 'ghost'}
    >
      {icon && <FontAwesomeIcon icon={icon} />}
      {label}
    </button>
  )
}

export default Button;
