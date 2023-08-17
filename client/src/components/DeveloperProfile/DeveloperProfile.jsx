import "./DeveloperProfile.css";

const DeveloperProfile = ({ person }) => {
  return (
    <div className="person-card">
      <h2 className="person-name"> Name: {person.name}</h2>
      <p className="person-role"> Role: {person.role}</p>
      <p className="person-github">
        GitHub:{" "}
        <a href={`https://github.com/${person.githubUsername}`}>
          {person.githubUsername}
        </a>
      </p>
      <p className="person-linkedin">
        LinkedIn:{" "}
        <a href={`https://www.linkedin.com/in/${person.linkedinUsername}`}>
          {person.linkedinUsername}
        </a>
      </p>
    </div>
  );
};

export default DeveloperProfile;
