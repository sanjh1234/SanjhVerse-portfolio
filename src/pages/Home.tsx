export const HomePage = () => {
  return (
    <div className="home-page page">
      <div className="home-img-div">
        <img className="home-img" src="/spaceImg/ast2.png" alt="Image Here" />
      </div>
      <div className="home-page-div">
        <div className="home-title-div">
          <h1 className="home-title">Welcome to SanjhVerse!</h1>
          <h2 className="home-subtitle">
            -A galaxy where creativity meets code
          </h2>
        </div>
        <div className="home-desc-div">
          <h6 className="home-desc">
            <span>
              This is your friendly space station where I keep all my missions — from coding adventures to creative projects.
            </span>
            <span>
              {" "}
              Inside, you’ll explore my skills, see my projects, learn a bit about me, and find a direct comms channel to reach me.
            </span>
            <br />
            <span> The stars are out, the engines are ready… let’s explore the universe together!</span>{" "}
          </h6>
        </div>
      </div>
    </div>
  );
};
