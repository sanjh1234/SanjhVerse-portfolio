import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export const ContactPage = () => {
  return (
    <div className="contact-page page">
      <div className="contact-title-div">
        <h1 className="contact-title title">Signal Me</h1>
      </div>
      <div className="contact-content">
        <img
          className="contact-title-img"
          src="/spaceImg/sship3.png"
          alt="Image"
        />
        <p className="contact-para">
          Let’s connect! Whether it’s about a project, an idea, or just to say
          hi — I’d love to hear from you.
        </p>
        <div className="contact-links">
          <a
            href="https://www.linkedin.com/in/sanjh-raj"
            className="contact-linkedin contact-link-box"
          >
            <FaLinkedin className="contact-icon" />
          </a>
          <a
            href="https://github.com/sanjh1234"
            className="contact-github contact-link-box"
          >
            <FaGithub className="contact-icon" />
          </a>
          <a
            href="mailto:sanjhraj7@gmail.com"
            className="contact-email contact-link-box"
          >
            <FaEnvelope className="contact-icon" />
          </a>
        </div>
        <div className="contact-send-message"></div>
      </div>
    </div>
  );
};
