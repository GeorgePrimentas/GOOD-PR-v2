
const DeveloperProfile = ({ person }) => {
  return (
    <div className="person-card">
      <h2>{person.name}</h2>
      <p>{person.role}</p>
      <p>
        GitHub:{" "}
        <a href={`https://github.com/${person.githubUsername}`}>
          {person.githubUsername}
        </a>
      </p>
      <p>
        LinkedIn:{" "}
        <a href={`https://www.linkedin.com/in/${person.linkedinUsername}`}>
          {person.linkedinUsername}
        </a>
      </p>
    </div>
  );
};

export default DeveloperProfile;
