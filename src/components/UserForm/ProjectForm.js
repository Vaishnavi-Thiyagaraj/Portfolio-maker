import React from 'react';
import { InputField } from './styles';
class ProjectForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      summary: "",
      languages: []
    }
    this.fields = [{ name: "name", type: "text" }, { name: "summary", type: "text" }];
    this.handleChange = this.handleChange.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  }
  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }
  handleAdd() {
    const values = [...this.state.languages];
    values.push({ value: null });
    this.setState({
      languages: values
    });
  }
  handleRemove(i) {
    const values = [...this.state.languages];
    values.splice(i, 1);
    this.setState({
      languages: values
    });
  }
  handleChange(i, event) {
    const values = [...this.state.languages];
    values[i].value = event.target.value;
    this.setState({
      languages: values
    });
  }
  componentDidMount() {
    if (this.props.name) {
      var project = this.props.getProjectsData(this.props.name);
      if(project)
      this.setState({
        name: project.name,
        summary: project.summary,
        languages: project.languages
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
        <button type="button" onClick={() => this.handleAdd()}>
          + Add Language
      </button>
        {this.state.languages.map((field, idx) => {
          return (
            <div key={`${field}-${idx}`}>
              <InputField
                type="text"
                placeholder="Enter Language"
                value={field.value || ""}
                onChange={e => this.handleChange(idx, e)}
              />
              <button type="button" onClick={() => this.handleRemove(idx)}>
                X
            </button>
            </div>
          );
        })}

      </form>
    );
  }
}
export default ProjectForm;