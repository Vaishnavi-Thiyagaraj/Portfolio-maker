import React from 'react';
import axios from 'axios';
import { Container, Header, Button } from './styles';

import MainForm from './MainForm.js';
import SkillForm from './SkillForm.js';
import ProfileForm from './ProfileForm.js';
import ProjectForm from './ProjectForm.js';
import EducationForm from './EducationForm.js';
import WorkForm from './WorkForm.js';

class UserForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      skillForm: [],
      profileForm: [],
      projectForm: [],
      workForm: [],
      educationForm: [],
      isGoing: true,
      numberOfGuests: 2,
      name: "",
      picture: "",
      label: "",
      headline: "",
      summary: "",
      website: "",
      yearsOfExperience: "",
      username: "",
      email: "",
      region: "",
      phone: ""
    };
    this.fields = [
      { name: "name", type: "text" },
      { name: "picture", type: "text" },
      { name: "label", type: "text" },
      { name: "headline", type: "text" },
      { name: "summary", type: "text" },
      { name: "website", type: "text" },
      { name: "yearsOfExperience", type: "text" },
      { name: "username", type: "text" },
      { name: "email", type: "text" },
      { name: "region", type: "text" },
      { name: "phone", type: "text" }
    ];


    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    //alert('Your favorite flavor is: ' + JSON.stringify(this.state));
    event.preventDefault();
    //console.log(this.state.skillForm[0].current.state);
    const obj = {
      "name": this.state.username,
      "basics": {
        "name": this.state.name,
        "picture": this.state.picture,
        "label": this.state.label,
        "headline": this.state.headline,
        "summary": this.state.summary,
        "website": this.state.website,
        "blog": this.state.blog,
        "yearsOfExperience": this.state.yearsOfExperience,
        "username": this.state.username,
        "email": this.state.email,
        "region": this.state.region,
        "phone": this.state.phone
      }
    }
    obj.basics.profiles = [];
    this.state.profileForm.forEach((form) => {
      obj.basics.profiles.push(form.current.state);
      console.log(form.current.state);
    })
    obj.basics.skills = [];
    this.state.skillForm.forEach((form) => {
      obj.skills.push(form.current.state);
      console.log(form.current.state);
    })
    obj.projects = [];
    this.state.projectForm.forEach((form) => {
      obj.projects.push(form.current.state);
      console.log(form.current.state);
    })
    obj.work = [];
    this.state.workForm.forEach((form) => {
      obj.work.push(form.current.state);
      console.log(form.current.state);
    });
    obj.education = [];
    this.state.educationForm.forEach((form) => {
      obj.education.push(form.current.state);
      console.log(form.current.state);
    })
    const options = {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      data: obj,
      url:'http://localhost:3000/api/users',
    };

    //axios.post(`http://localhost:3000/api/users`, obj)
    axios(options)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

  }

  addSkill() {
    var r = React.createRef();
    const skillForm = [...this.state.skillForm];
    skillForm.push(r);
    this.setState({
      skillForm: skillForm
    });
  }

  addProfile() {
    var r = React.createRef();
    const profileForm = [...this.state.profileForm];
    profileForm.push(r);
    this.setState({
      profileForm: profileForm
    });
  }

  addProject() {
    var r = React.createRef();
    const projectForm = [...this.state.projectForm];
    projectForm.push(r);
    this.setState({
      projectForm: projectForm
    });
  }

  addEducation() {
    var r = React.createRef();
    const educationForm = [...this.state.educationForm];
    educationForm.push(r);
    this.setState({
      educationForm: educationForm
    });
  }

  addWork() {
    var r = React.createRef();
    const workForm = [...this.state.workForm];
    workForm.push(r);
    this.setState({
      workForm: workForm
    });
  }

  render() {
    const { skillForm, profileForm, projectForm, workForm, educationForm } = this.state;
    return (<Container>
      <Header>User Info</Header>
      <MainForm fields={this.fields} stateValues={this.state} handleInputChange={this.handleInputChange} />
      <Button value="Add Profile" onClick={this.addProfile.bind(this)} >Add Profile</Button>
      {profileForm.map((profileRef) => {
        return <ProfileForm ref={profileRef} />
      })}
      <Header>Skills</Header>
      <Button value="Add Profile" onClick={this.addSkill.bind(this)} >Add Skill</Button>
      {skillForm.map((reference) => {
        return <SkillForm ref={reference} />
      })}
      <Header>Projects</Header>
      <Button value="Add Project" onClick={this.addProject.bind(this)} >Add Project</Button>
      {projectForm.map((reference) => {
        return <ProjectForm ref={reference} />
      })}
      <Header>Work</Header>
      <Button value="Add Work" onClick={this.addWork.bind(this)} >Add Work</Button>
      {workForm.map((reference) => {
        return <WorkForm ref={reference} />
      })}
      <Header>Education</Header>
      <Button value="Add Education" onClick={this.addEducation.bind(this)} >Add Education</Button>
      {educationForm.map((reference) => {
        return <EducationForm ref={reference} />
      })}
      <input type="button" value="Submit" onClick={this.handleSubmit} />
    </Container>)
  }
}

export default UserForm;