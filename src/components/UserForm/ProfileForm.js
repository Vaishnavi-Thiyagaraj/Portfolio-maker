import React from 'react';
// import UserForm from './UserForm.js'
import { InputField } from './styles';
class ProfileForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      "network": "",
      "url": ""
    }
    this.fields = [{ name: "network", type: "text" }, { name: "url", type: "text" }];
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
      console.log("name", this.props.name);
      var profile = this.props.getProfileData(this.props.name);
      if(profile)
      this.setState({
        network: profile.network,
        url: profile.url
      });
    }
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
        {/* <input type="submit" value="Submit" /> */}
      </form>
    );
  }
}
export default ProfileForm;