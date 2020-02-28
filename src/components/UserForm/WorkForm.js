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
  componentDidMount() {
    if (this.props.name) {
      var work = this.props.getWorkData(this.props.name);
      if(work)
      this.setState({
        company: work.company,
        position: work.position,
        location: work.location,
        summary: work.summary,
        startyear: work.startyear,
        endyear: work.endyear
      });
    }
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
export default WorkForm;