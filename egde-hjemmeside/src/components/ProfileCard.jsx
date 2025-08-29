import './ProfileCard.css';
import githubIcon from '../assets/bx-github.svg';
import linkedinIcon from '../assets/bx-linkedin-square.svg';

/*
Props:
- name (string)
- role (string, optional)
- bio (string)
- github (url, optional)
- linkedin (url, optional)
- image (url, optional)
*/

const ProfileCard = ({ name, role, bio, github, linkedin, image }) => {
  const initial = name?.[0] || '?';
  return (
    <div className="profile-card">
      <div className="profile-media">
        {image ? (
          <img src={image} alt={name} className="profile-avatar" />
        ) : (
          <div className="profile-avatar fallback" aria-hidden>{initial}</div>
        )}
      </div>
      <div className="profile-body">
        <h3 className="profile-name">{name}</h3>
        {role && <p className="profile-role">{role}</p>}
        <p className="profile-bio">{bio}</p>
        <div className="profile-links">
          {github && (
            <a href={github} target="_blank" rel="noopener noreferrer" aria-label={`${name} GitHub`}>
              <img src={githubIcon} alt="GitHub" />
            </a>
          )}
          {linkedin && (
            <a href={linkedin} target="_blank" rel="noopener noreferrer" aria-label={`${name} LinkedIn`}>
              <img src={linkedinIcon} alt="LinkedIn" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
