import React from 'react';
import { InputField } from './styles';

class SkillForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    }
    this.fields = [{ name: "name", type: "text" }];
  }
  componentDidMount() {
    if(this.props.name) {
      var name = this.props.getSkillData(this.props.name);
      if(name)
      this.setState({
        name: name.name
      });
    }
  }
  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }
  render() {
    return (
      <form>
        {this.fields.map((field) => {
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
export default SkillForm;