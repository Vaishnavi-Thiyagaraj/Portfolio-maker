import React from 'react';
import { InputField } from './styles';
const MainForm = function (props) {
  const { fields, stateValues, handleInputChange } = props;
  return (
    <form>
      {fields.map((field) => {
        return <label key={field.name}>
          {field.name}
          <InputField
            name={field.name}
            type={field.type}
            value={stateValues[field.name]}
            onChange={handleInputChange} />
        </label>
      })}
    </form>
  );
}
export default MainForm;