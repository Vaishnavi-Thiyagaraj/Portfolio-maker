import React from 'react';
import { InputField } from './styles';

class WorkForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      "company": "",
      "position": "",
      "location": "",
      "summary": "",
      "startyear": "",
      "endyear": ""
    }
    this.fields = [{ name: "company", type: "text" }, { name: "position", type: "text" }, { name: "location", type: "text" }, { name: "summary", type: "text" }, { name: "startyear", type: "text" }, { name: "endyear", type: "text" }];
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
export default WorkForm;