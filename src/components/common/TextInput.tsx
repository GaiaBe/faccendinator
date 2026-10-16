interface TextInputProps {
  label?: string;
  onChange: (name: string) => void;
  value?: string;
}

const TextInput = ({label, onChange, value}: TextInputProps) => {

  return (
    <div className="relative flex-1 flex">
      <input
        className={`border border-primary rounded-md px-2 py-2 peer flex-1`}
        type="text"
        placeholder=" "
        onChange={(e) => onChange(e.target.value)}
        value={value}
      />
      <label
        className="
          text-gray-500 absolute left-2 top-2 transition-all duration-200 bg-white
          peer-focus:top-[-8px] peer-focus:bg-white peer-focus:left-3 peer-focus:text-sm
          peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:-left-[-12px] peer-[:not(:placeholder-shown)]:text-sm
        "
      >
        {label}
      </label>
    </div>
  )
}

export default TextInput;
