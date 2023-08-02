import React, { useState } from "react";

const Form = () => {
  const [teamName, setTeamName] = useState("");
  const [projectBrief, setProjectBrief] = useState("");
  const [githubRepo, setGithubRepo] = useState("");
  const [githubProjectBoard, setGithubProjectBoard] = useState("");
  const [deployedApp, setDeployedApp] = useState("");
  const [slackChannel, setSlackChannel] = useState("");

  const [memberName1, setMemberName1] = useState("");
  const [memberName2, setMemberName2] = useState("");
  const [memberName3, setMemberName3] = useState("");
  const [memberName4, setMemberName4] = useState("");

  const [role1, setRole1] = useState("");
  const [role2, setRole2] = useState("");
  const [role3, setRole3] = useState("");
  const [role4, setRole4] = useState("");

  const [githubUsername1, setGithubUsername1] = useState("");
  const [githubUsername2, setGithubUsername2] = useState("");
  const [githubUsername3, setGithubUsername3] = useState("");
  const [githubUsername4, setGithubUsername4] = useState("");

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
          projectBrief,
          githubRepo,
          githubProjectBoard,
          deployedApp,
          slackChannel,

          memberName1,
          memberName2,
          memberName3,
          memberName4,
          role1,
          role2,
          role3,
          role4,
          githubUsername1,
          githubUsername2,
          githubUsername3,
          githubUsername4,
        }),
      });

      const data = await response.json();
      console.log(data);

      setTeamName("");
      setProjectBrief("");
      setGithubRepo("");
      setGithubProjectBoard("");
      setDeployedApp("");
      setSlackChannel("");

      setMemberName1("");
      setMemberName2("");
      setMemberName3("");
      setMemberName4("");

      setRole1("");
      setRole2("");
      setRole3("");
      setRole4("");

      setGithubUsername1("");
      setGithubUsername2("");
      setGithubUsername3("");
      setGithubUsername4("");
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
        <label htmlFor="projectBrief">Project Brief:</label>
        <textarea
          type="url"
          id="projectBrief"
          name="projectBrief"
          value={projectBrief}
          onChange={(e) => setProjectBrief(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="githubRepo">GitHub Repo:</label>
        <input
          type="url"
          id="githubRepo"
          name="githubRepo"
          value={githubRepo}
          onChange={(e) => setGithubRepo(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="githubProjectBoard">GitHub Project Board:</label>
        <input
          type="url"
          id="githubProjectBoard"
          name="githubProjectBoard"
          value={githubProjectBoard}
          onChange={(e) => setGithubProjectBoard(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="deployedApp">Deployed App:</label>
        <input
          type="url"
          id="deployedApp"
          name="deployedApp"
          value={deployedApp}
          onChange={(e) => setDeployedApp(e.target.value)}
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
        <label htmlFor="memberName1">Member 1:</label>
        <input
          type="text"
          id="memberName1"
          name="memberName1"
          value={memberName1}
          onChange={(e) => setMemberName1(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="role1">Role:</label>
        <input
          type="text"
          id="role1"
          name="role1"
          value={role1}
          onChange={(e) => setRole1(e.target.value)}
          required
        />
      </div>

      <div>
        <label htmlFor="githubUsername1">GitHub Username:</label>
        <input
          type="text"
          id="githubUsername1"
          name="githubUsername1"
          value={githubUsername1}
          onChange={(e) => setGithubUsername1(e.target.value)}
          required
        />
      </div>

      <div>
        <label htmlFor="memberName2">Member 2:</label>
        <input
          type="text"
          id="memberName2"
          name="memberName2"
          value={memberName2}
          onChange={(e) => setMemberName2(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="role2">Role:</label>
        <input
          type="text"
          id="role2"
          name="role2"
          value={role2}
          onChange={(e) => setRole2(e.target.value)}
          required
        />
      </div>

      <div>
        <label htmlFor="githubUsername2">GitHub Username:</label>
        <input
          type="text"
          id="githubUsername2"
          name="githubUsername2"
          value={githubUsername2}
          onChange={(e) => setGithubUsername2(e.target.value)}
          required
        />
      </div>

      <div>
        <label htmlFor="memberName3">Member 3:</label>
        <input
          type="text"
          id="memberName3"
          name="memberName3"
          value={memberName3}
          onChange={(e) => setMemberName3(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="role3">Role:</label>
        <input
          type="text"
          id="role3"
          name="role3"
          value={role3}
          onChange={(e) => setRole3(e.target.value)}
          required
        />
      </div>

      <div>
        <label htmlFor="githubUsername3">GitHub Username:</label>
        <input
          type="text"
          id="githubUsername3"
          name="githubUsername3"
          value={githubUsername3}
          onChange={(e) => setGithubUsername3(e.target.value)}
          required
        />
      </div>

      <div>
        <label htmlFor="memberName4">Member 4:</label>
        <input
          type="text"
          id="memberName4"
          name="memberName4"
          value={memberName4}
          onChange={(e) => setMemberName4(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="role4">Role:</label>
        <input
          type="text"
          id="role4"
          name="role4"
          value={role4}
          onChange={(e) => setRole4(e.target.value)}
          required
        />
      </div>

      <div>
        <label htmlFor="githubUsername4">GitHub Username:</label>
        <input
          type="text"
          id="githubUsername4"
          name="githubUsername4"
          value={githubUsername4}
          onChange={(e) => setGithubUsername4(e.target.value)}
          required
        />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
