import React, { useState } from "react";
const Form = () => {
  const initialFormState = {
    teamName: "",
    projectBrief: "",
    githubRepo: "",
    githubProjectBoard: "",
    deployedApp: "",
    slackChannel: "",
    memberName1: "",
    memberName2: "",
    memberName3: "",
    memberName4: "",
    role1: "",
    role2: "",
    role3: "",
    role4: "",
    githubUsername1: "",
    githubUsername2: "",
    githubUsername3: "",
    githubUsername4: "",
  };

  const [formData, setFormData] = useState(initialFormState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8000/submit-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      setFormData(initialFormState);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="teamName">Team Name:</label>
        <input
          type="text"
          id="teamName"
          name="teamName"
          value={formData.teamName}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="projectBrief">Project Brief:</label>
        <input
          type="url"
          id="projectBrief"
          name="projectBrief"
          value={formData.projectBrief}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="githubRepo">GitHub Repo:</label>
        <input
          type="url"
          id="githubRepo"
          name="githubRepo"
          value={formData.githubRepo}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="githubProjectBoard">GitHub Project Board:</label>
        <input
          type="url"
          id="githubProjectBoard"
          name="githubProjectBoard"
          value={formData.githubProjectBoard}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="deployedApp">Deployed App:</label>
        <input
          type="url"
          id="deployedApp"
          name="deployedApp"
          value={formData.deployedApp}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor="slackChannel">Slack Channel:</label>
        <input
          type="text"
          id="slackChannel"
          name="slackChannel"
          value={formData.slackChannel}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor="memberName1">Member 1:</label>
        <input
          type="text"
          id="memberName1"
          name="memberName1"
          value={formData.memberName1}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="role1">Role:</label>
        <input
          type="text"
          id="role1"
          name="role1"
          value={formData.role1}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor="githubUsername1">GitHub Username:</label>
        <input
          type="text"
          id="githubUsername1"
          name="githubUsername1"
          value={formData.githubUsername1}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor="memberName2">Member 2:</label>
        <input
          type="text"
          id="memberName2"
          name="memberName2"
          value={formData.memberName2}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="role2">Role:</label>
        <input
          type="text"
          id="role2"
          name="role2"
          value={formData.role2}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor="githubUsername2">GitHub Username:</label>
        <input
          type="text"
          id="githubUsername2"
          name="githubUsername2"
          value={formData.githubUsername2}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor="memberName3">Member 3:</label>
        <input
          type="text"
          id="memberName3"
          name="memberName3"
          value={formData.memberName3}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="role3">Role:</label>
        <input
          type="text"
          id="role3"
          name="role3"
          value={formData.role3}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor="githubUsername3">GitHub Username:</label>
        <input
          type="text"
          id="githubUsername3"
          name="githubUsername3"
          value={formData.githubUsername3}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor="memberName4">Member 4:</label>
        <input
          type="text"
          id="memberName4"
          name="memberName4"
          value={formData.memberName4}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="role4">Role:</label>
        <input
          type="text"
          id="role4"
          name="role4"
          value={formData.role4}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor="githubUsername4">GitHub Username:</label>
        <input
          type="text"
          id="githubUsername4"
          name="githubUsername4"
          value={formData.githubUsername4}
          onChange={handleChange}
          required
        />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
