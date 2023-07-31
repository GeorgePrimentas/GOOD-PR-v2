import React, { useState } from "react";

const Form = () => {
  const [teamName, setTeamName] = useState("");
  const [fullName, setFullName] = useState("");
  const [role, setRole] = useState("");
  const [projectBrief, setProjectBrief] = useState("");
  const [slackChannel, setSlackChannel] = useState("");
  const [githubUsername, setGithubUsername] = useState("");
  const [githubRepo, setGithubRepo] = useState("");
  const [githubProject, setGithubProject] = useState("");
  const [deployedApp, setDeployedApp] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8000/submit-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          teamName,
          fullName,
          role,
          projectBrief,
          slackChannel,
          githubUsername,
          githubRepo,
          githubProject,
          deployedApp,
        }),
      });

      const data = await response.json();
      console.log(data);

      setTeamName("");
      setFullName("");
      setRole("");
      setProjectBrief("");
      setSlackChannel("");
      setGithubUsername("");
      setGithubRepo("");
      setGithubProject("");
      setDeployedApp("");
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
          value={teamName}
          onChange={(e) => setTeamName(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="fullName">Full Name:</label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="role">Role:</label>
        <input
          type="text"
          id="role"
          name="role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="projectBrief">Project Brief:</label>
        <textarea
          id="projectBrief"
          name="projectBrief"
          value={projectBrief}
          onChange={(e) => setProjectBrief(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="slackChannel">Slack Channel:</label>
        <input
          type="text"
          id="slackChannel"
          name="slackChannel"
          value={slackChannel}
          onChange={(e) => setSlackChannel(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="githubUsername">GitHub Username:</label>
        <input
          type="text"
          id="githubUsername"
          name="githubUsername"
          value={githubUsername}
          onChange={(e) => setGithubUsername(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="githubRepo">GitHub Repo:</label>
        <input
          type="text"
          id="githubRepo"
          name="githubRepo"
          value={githubRepo}
          onChange={(e) => setGithubRepo(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="githubProject">GitHub Project:</label>
        <input
          type="text"
          id="githubProject"
          name="githubProject"
          value={githubProject}
          onChange={(e) => setGithubProject(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="deployedApp">Deployed App:</label>
        <input
          type="text"
          id="deployedApp"
          name="deployedApp"
          value={deployedApp}
          onChange={(e) => setDeployedApp(e.target.value)}
          required
        />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
