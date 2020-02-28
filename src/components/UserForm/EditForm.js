import React from 'react';
import axios from 'axios';
import { Container, Header, Button } from './styles';

import MainForm from './MainForm.js';
import SkillForm from './SkillForm.js';
import ProfileForm from './ProfileForm.js';
import ProjectForm from './ProjectForm.js';
import EducationForm from './EducationForm.js';
import WorkForm from './WorkForm.js';

class EditForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      skillForm: [],
      profileForm: [],
      projectForm: [],
      workForm: [],
      educationForm: [],
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
    event.preventDefault();
    const obj = {
      "name": this.state.name,
      "id": this.userData.id,
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
    })
    obj.skills = [];
    this.state.skillForm.forEach((form) => {
      obj.skills.push(form.current.state);
    })
    obj.projects = [];
    this.state.projectForm.forEach((form) => {
      obj.projects.push(form.current.state);
    })
    obj.work = [];
    this.state.workForm.forEach((form) => {
      obj.work.push(form.current.state);
    });
    obj.education = [];
    this.state.educationForm.forEach((form) => {
      obj.education.push(form.current.state);
    })
    const options = {
      method: 'PUT',
      headers: { 'content-type': 'application/json' },
      data: obj,
      url: `http://localhost:3000/api/users/${this.userData.id}`,
    };
    axios(options)
      .then(function (response) {
        alert(`Your portfolio is avaiable at http://localhost:3000/api/users?name=${response.data.name}`);
      })
      .catch(function (error) {
        console.log(error);
      });

  }

  addSkill(skill) {
    var r = React.createRef();
    const skillForm = [...this.state.skillForm];
    skillForm.push(r);
    this.setState({
      skillForm: skillForm
    });
  }
  getSkillData(index) {
    return this.userData.skills[+index];
  }
  addProfile() {
    var r = React.createRef();
    const profileForm = [...this.state.profileForm];
    profileForm.push(r);
    this.setState({
      profileForm: profileForm
    });
  }
  getProfileData(index) {
    return this.userData.basics.profiles[+index];
  }
  addProject() {
    var r = React.createRef();
    const projectForm = [...this.state.projectForm];
    projectForm.push(r);
    this.setState({
      projectForm: projectForm
    });
  }
  getProjectsData(index) {
    return this.userData.projects[+index];
  }

  addEducation() {
    var r = React.createRef();
    const educationForm = [...this.state.educationForm];
    educationForm.push(r);
    this.setState({
      educationForm: educationForm
    });
  }
  getEducationData(index) {
    return this.userData.education[+index];
  }

  addWork() {
    var r = React.createRef();
    const workForm = [...this.state.workForm];
    workForm.push(r);
    this.setState({
      workForm: workForm
    });
  }
  getWorkData(index) {
    return this.userData.work[+index];
  }
  componentDidMount() {
    var searchParams = window.location.search.split('=');
    fetch(`http://localhost:3000/api/users?name=${searchParams[1]}`)
      .then(res => res.json())
      .then(user => {
        this.userData = user[0];
        const initialValue = user[0].basics;
        this.setState({
          "name": initialValue.name,
          "picture": initialValue.picture,
          "label": initialValue.label,
          "headline": initialValue.headline,
          "summary": initialValue.summary,
          "website": initialValue.website,
          "blog": initialValue.blog,
          "yearsOfExperience": initialValue.yearsOfExperience,
          "username": initialValue.username,
          "email": initialValue.email,
          "region": initialValue.region,
          "phone": initialValue.phone
        });
        user[0].skills.forEach((skill) => {
          this.addSkill(skill);
        })
        initialValue.profiles.forEach((profile) => {
          this.addProfile(profile);
        })
        user[0].projects.forEach((project) => {
          this.addProject(project);
        })
        user[0].work.forEach((w) => {
          this.addWork(w);
        })
        user[0].education.forEach((edu) => {
          this.addEducation(edu);
        })

      });
  }
  render() {
    const { skillForm, profileForm, projectForm, workForm, educationForm } = this.state;
    return (<Container>
      <Header>User Info</Header>
      <MainForm fields={this.fields} stateValues={this.state} handleInputChange={this.handleInputChange} />
      <Button value="Add Profile" onClick={this.addProfile.bind(this)} >Add Profile</Button>
      {profileForm.map((profileRef, i) => {
        return <ProfileForm ref={profileRef} name ={""+i} key={i} getProfileData={this.getProfileData.bind(this)}/>
      })}
      <Header>Skills</Header>
      <Button value="Add Profile" onClick={this.addSkill.bind(this)} >Add Skill</Button>
      {skillForm.map((reference, i) => {
        return <SkillForm ref={reference} name ={""+i} key={i} getSkillData={this.getSkillData.bind(this)}/>
      })}
      <Header>Projects</Header>
      <Button value="Add Project" onClick={this.addProject.bind(this)} >Add Project</Button>
      {projectForm.map((reference, i) => {
        return <ProjectForm ref={reference} getProjectsData={this.getProjectsData.bind(this)} name ={""+i} key={i}/>
      })}
      <Header>Work</Header>
      <Button value="Add Work" onClick={this.addWork.bind(this)} >Add Work</Button>
      {workForm.map((reference, i) => {
        return <WorkForm ref={reference} getWorkData={this.getWorkData.bind(this)} name ={""+i} key={i}/>
      })}
      <Header>Education</Header>
      <Button value="Add Education" onClick={this.addEducation.bind(this)} >Add Education</Button>
      {educationForm.map((reference, i) => {
        return <EducationForm ref={reference} getEducationData={this.getEducationData.bind(this)} name ={""+i} key={i}/>
      })}
      <input type="button" value="Submit" onClick={this.handleSubmit} />
    </Container>)
  }
}

export default EditForm;