import { ChangeEvent } from "react";

interface SelectInputProps {
  label: string;
  options: number[];
  value: number;
  onChange: (value: number) => void;
}

const SelectInput = ({ label, options, value, onChange }: SelectInputProps) => {
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = parseInt(e.target.value) || 0;
    console.log(selectedValue);
    onChange(selectedValue);
  };

  return (
    <>
      <label htmlFor={label}>{label}</label>
      <select id={label} onChange={handleChange} value={value}>
        <option value="">Choisissez une valeur</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </>
  );
};

export default SelectInput;
