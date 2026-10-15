interface TextInputProps {
  label?: string;
  onChange: (name: string) => void;
}

const TextInput = ({label, onChange}: TextInputProps) => {

  return (
    <div className="relative">
      <input
        className={`border border-primary rounded-md px-2 py-1 peer`}
        type="text"
        placeholder=" "
        onChange={(e) => onChange(e.target.value)}
      />
      <label
        className="
          text-gray-500 absolute left-1 top-1 transition-all duration-200 bg-white
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
