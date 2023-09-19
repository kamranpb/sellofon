import styled from "styled-components";
const radioOptions = [
  { value: "allOf", label: "Hamısı" },
  { value: "new", label: "Yeni" },
  { value: "old", label: "2-ci əl" },
];

export function RadioInput({ value, onChange, name }: any) {
  return (
    <RadioInputWrapper>
      {radioOptions.map((option: any) => (
        <div key={option.value} onClick={() => (value = option.value)}>
          <input
            value={option.value}
            type="radio"
            name={name}
            id={option.value}
            onChange={onChange}
            checked={value === option.value}
          />
          <label htmlFor={option.value} className={option.value}>
            {option.label}
          </label>
        </div>
      ))}
    </RadioInputWrapper>
  );
}

const RadioInputWrapper = styled.div`
  font-size: 1.0625rem;
  font-family: sans-serif;
  display: flex;
  label {
    display: inline-block;
    background-color: #e8eeef;
    color: purple;
    padding: 10px 20px;
    font-family: sans-serif, Arial;
    font-size: 16px;
    cursor: pointer;
  }
  .allOf {
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
  }
  .old {
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }
  label:hover {
    background-color: #f4f7f8;
  }
  input {
    opacity: 0;
    position: fixed;
    width: 0;
  }
  input:checked + label {
    background: rgb(122, 69, 247);
    color: #f4f4f4;
  }
`;
