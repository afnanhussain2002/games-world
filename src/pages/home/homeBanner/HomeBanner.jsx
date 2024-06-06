const HomeBanner = () => {
  return (
    <div className="hero min-h-screen bg-[url('https://upload.gtarcade.com/got/2019/08/1566532920447.jpg')] rounded-b-2xl">
      <div className=" text-center w-full h-full flex  justify-center items-center backdrop-brightness-50 rounded-b-2xl">
        <div className=" text-white">
          <h1 className="text-5xl font-bold"><span className="text-mainColor py-2 px-1 rounded-md bg-white">Games</span> World</h1>
          <p className="py-6">
          Your Ultimate Destination for Gaming Adventures and Development Resources
          </p>
          
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
