import React from 'react';
// import UserForm from './UserForm.js'
import { InputField } from './styles';
const MainForm = function(props) {
  const {fields, stateValues, handleInputChange} = props;
  return (
    <form>
      {fields.map((field) => {
              //var name = field.name;
               return <label key={field.name}>
                {field.name}
                <InputField
                  name={field.name}
                  type={field.type}
                  value={stateValues[field.name]}
                  onChange={handleInputChange} />
              </label>

      })}
      {/* <input type="submit" value="Submit" /> */}
    </form>
  );
}
export default MainForm;