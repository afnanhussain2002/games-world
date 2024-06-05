const HomeAbout = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src="https://i.ibb.co/bXLz1Ds/Untitled-design-21.png" 
          className="max-w-sm rounded-lg shadow-2xl flex-1"
        />
        <div className="flex-1">
          <h1 className="text-5xl font-bold">Who We Are</h1>
          <p className="py-6">
          Welcome to Games World, your ultimate destination for all things gaming! We are passionate gamers and dedicated developers committed to bringing you the best in gaming entertainment and development resources. Our mission is to create a vibrant community where gamers and developers can connect, share, and thrive.


          </p>
          <button className="btn bg-mainColor border-none text-white">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
