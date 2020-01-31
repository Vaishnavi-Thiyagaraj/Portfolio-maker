import React from 'react';
import { InputField } from './styles';

class EducationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      "institution": "",
      "area": "",
      "studyType": "",
      "startyear": "",
      "endyear": "",
      "description": ""
    }

    this.fields = [{ name: "institution", type: "text" }, { name: "area", type: "text" }, { name: "studyType", type: "text" }, { name: "startyear", type: "text" }, { name: "endyear", type: "text" }, { name: "description", type: "text" }];
  }
  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }
  //const {fields, stateValues, handleInputChange} = props;
  render() {
    return (
      <form>
        {this.fields.map((field) => {
          //var name = field.name;
          return <label key={field.name}>
            {field.name}
            <InputField
              name={field.name}
              type={field.type}
              value={this.state[field.name]}
              onChange={this.handleInputChange.bind(this)}
            />
          </label>

        })}
      </form>
    );
  }
}
export default EducationForm;