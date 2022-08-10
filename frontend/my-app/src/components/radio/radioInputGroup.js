import { useState } from "react";
import "./radioInputGroup.css";
const RadioInput = ({
  name,
  label,
  value,
  isChecked,
  handleChange,
  details,
}) => {
  const handleRadioChange = (e) => {
    const { id } = e.currentTarget;
    handleChange(id); // Send back id to radio group for comparison
  };

  return (
    <div className="radio-container">
      <input
        type="radio"
        className="custom-radio"
        name={name}
        id={value} // htlmlFor targets this id.
        checked={isChecked}
        onChange={handleRadioChange}
      />
      <label htmlFor={value}>
        <span className="radio-font">
          <h4>{label}</h4>
          <p>{details}</p>
        </span>
      </label>
    </div>
  );
};

export function RadioGropupInput({ data }) {
  const [selectedInput, setSelectedInput] = useState("");
  const handleChange = (inputValue) => {
    localStorage.setItem('type', inputValue)
    setSelectedInput(inputValue);
  };
  console.log(data);
  return (
    <>
      {data.map(({ title, details },index) => {
        return (
          <RadioInput
            key={index}
            name="option"
            value={title}
            label={title}
            details={details}
            isChecked={selectedInput === title}
            handleChange={handleChange}
          />
        );
      })}
      
    </>
  );
}
