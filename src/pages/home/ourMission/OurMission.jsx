

const OurMission = () => {
    return (
        <div className="hero min-h-96 bg-black bg-opacity-50">
      <div className="hero-content flex-col lg:flex-row">
        <div className="flex-1">
          <h1 className="text-5xl font-bold text-white">Our <span className="text-mainColor">Mission</span></h1>
          <p className="py-6 text-white max-w-2xl">
          At Games World, we strive to provide a comprehensive platform that caters to both players and creators. Whether you’re looking to discover your next favorite game, stay updated with the latest industry news, or dive into game development, we have something for you. Our goal is to make gaming accessible, enjoyable, and inspiring for everyone.

          </p>
          <button className="btn bg-mainColor border-none text-white">Get Started</button>
        </div>
        <img
          src="https://i.ibb.co/GRB8W2R/Untitled-design-23.png"
          className="max-w-sm rounded-lg shadow-2xl flex-1"
        />
      </div>
    </div>
    );
};

export default OurMission;