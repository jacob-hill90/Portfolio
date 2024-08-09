const About = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row p-8 bg-white shadow-lg rounded-lg">
        {/* Profile Photo Section */}
        <div className="md:w-1/2">
          <img
            src="https://via.placeholder.com/300"
            alt="Profile"
            className="w-full h-auto rounded-lg"
          />
        </div>
        {/* Text Section */}
        <div className="md:w-1/2 mt-4 md:mt-0 md:pl-8">
          <h1 className="text-3xl font-semibold mb-4">About Me</h1>
          <p className="text-gray-700 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget
            augue fermentum, vehicula mi ac, tincidunt sem. Nullam scelerisque
            ullamcorper mauris, ut vestibulum magna tincidunt eu. Fusce nec
            lobortis odio, sed ultrices ex. Phasellus a lorem mi. Donec
            scelerisque, nisi eu molestie ultricies, elit magna tincidunt risus,
            et vehicula eros orci et nunc. Phasellus interdum quam ac purus
            fermentum tincidunt. Proin ac tellus ut sem tincidunt viverra. Sed
            tempus vel lacus nec fermentum. Cras feugiat ullamcorper erat eget
            efficitur. Donec suscipit sit amet dolor id facilisis.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
