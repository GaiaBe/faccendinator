interface SwitchProps {
  label: string;
  onChange: (checked: boolean) => void;
  checked?: boolean;
}

const Switch = ({label, checked, onChange}: SwitchProps) => {
  return (
    <label className="flex items-center justify-between w-full py-2 cursor-pointer">
      <span className="text-slate-600">{label}</span>
      <input
        type="checkbox"
        className="sr-only peer"
        checked={checked}
        onChange={() => checked !== undefined && onChange(checked)}
      />
      <div 
        className={`
          ${checked ? 'bg-primary' : 'bg-gray-300'}
          w-11 h-6 bg-gray-300 rounded-full peer-checked:bg-primary
          transition-colors relative peer-focus-visible:ring-2
          peer-focus-visible:ring-primary
        `}
      >
        <div 
          className={`
            absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform
            ${checked ? 'translate-x-5' : 'translate-x-0'}
          `}
        />
      </div>
    </label>
  )

}

export default Switch;
