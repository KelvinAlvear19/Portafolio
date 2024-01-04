import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl,githubLink }) => {
    const handleGitHubLinkClick = () => {
        window.open(githubLink, '_blank');
      };
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <button
            style={{
              color: 'white',
              color: 'black',
              fontWeight: 'bold',
            }}
            onClick={handleGitHubLinkClick}
          >
            Ver en GitHub
          </button>
        </div>
      </div>
    </Col>
  )
}