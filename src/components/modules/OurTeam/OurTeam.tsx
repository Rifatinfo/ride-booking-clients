import { FaLinkedin, FaTwitter, FaGithub, FaFacebook } from "react-icons/fa"; 


const OurTeam = () => {
  const teamMembers = [
    {
      name: 'John Doe',
      role: 'CEO',
      image: 'https://randomuser.me/api/portraits/men/45.jpg',
      socials: {
        linkedin: 'https://www.linkedin.com/in/johndoe',
        twitter: 'https://www.twitter.com/johndoe',
        github: 'https://www.github.com/johndoe',
        facebook: 'https://www.facebook.com/johndoe'
      },
    },
    {
      name: 'Jane Smith',
      role: 'CTO',
      image: 'https://randomuser.me/api/portraits/men/76.jpg',
      socials: {
        linkedin: 'https://www.linkedin.com/in/janesmith',
        twitter: 'https://www.twitter.com/janesmith',
        github: 'https://www.github.com/janesmith',
        facebook: 'https://www.facebook.com/janesmith'
      },
    },
    {
      name: 'Alice Johnson',
      role: 'Lead Developer',
      image: 'https://randomuser.me/api/portraits/men/12.jpg',
      socials: {
        linkedin: 'https://www.linkedin.com/in/alicejohnson',
        twitter: 'https://www.twitter.com/alicejohnson',
        github: 'https://www.github.com/alicejohnson',
        facebook: 'https://www.facebook.com/alicejohnson'
      },
    },
    {
      name: 'Alice Johnson',
      role: 'Lead Developer',
      image: 'https://randomuser.me/api/portraits/men/88.jpg',
      socials: {
        linkedin: 'https://www.linkedin.com/in/alicejohnson',
        twitter: 'https://www.twitter.com/alicejohnson',
        github: 'https://www.github.com/alicejohnson',
        facebook: 'https://www.facebook.com/alicejohnson'
      },
    },
    {
      name: 'Alice Johnson',
      role: 'Lead Developer',
      image: 'https://randomuser.me/api/portraits/men/5.jpg',
      socials: {
        linkedin: 'https://www.linkedin.com/in/alicejohnson',
        twitter: 'https://www.twitter.com/alicejohnson',
        github: 'https://www.github.com/alicejohnson',
        facebook: 'https://www.facebook.com/alicejohnson'
      },
    },
    {
      name: 'Alice Johnson',
      role: 'Lead Developer',
      image: 'https://randomuser.me/api/portraits/women/25.jpg',
      socials: {
        linkedin: 'https://www.linkedin.com/in/alicejohnson',
        twitter: 'https://www.twitter.com/alicejohnson',
        github: 'https://www.github.com/alicejohnson',
        facebook: 'https://www.facebook.com/alicejohnson'
      },
    },
    {
      name: 'Alice Johnson',
      role: 'Lead Developer',
      image: 'https://randomuser.me/api/portraits/women/47.jpg',
      socials: {
        linkedin: 'https://www.linkedin.com/in/alicejohnson',
        twitter: 'https://www.twitter.com/alicejohnson',
        github: 'https://www.github.com/alicejohnson',
        facebook: 'https://www.facebook.com/alicejohnson'
      },
    },
    {
      name: 'Alice Johnson',
      role: 'Lead Developer',
      image: 'https://randomuser.me/api/portraits/women/63.jpg',
      socials: {
        linkedin: 'https://www.linkedin.com/in/alicejohnson',
        twitter: 'https://www.twitter.com/alicejohnson',
        github: 'https://www.github.com/alicejohnson',
        facebook: 'https://www.facebook.com/alicejohnson'
      },
    },
    {
      name: 'Alice Johnson',
      role: 'Lead Developer',
      image: 'https://randomuser.me/api/portraits/women/81.jpg',
      socials: {
        linkedin: 'https://www.linkedin.com/in/alicejohnson',
        twitter: 'https://www.twitter.com/alicejohnson',
        github: 'https://www.github.com/alicejohnson',
        facebook: 'https://www.facebook.com/alicejohnson'
      },
    },
    {
      name: 'Alice Johnson',
      role: 'Lead Developer',
      image: 'https://randomuser.me/api/portraits/women/9.jpg',
      socials: {
        linkedin: 'https://www.linkedin.com/in/alicejohnson',
        twitter: 'https://www.twitter.com/alicejohnson',
        github: 'https://www.github.com/alicejohnson',
        facebook: 'https://www.facebook.com/alicejohnson'
      },
    },
    {
      name: 'Alice Johnson',
      role: 'Lead Developer',
      image: 'https://randomuser.me/api/portraits/women/54.jpg',
      socials: {
        linkedin: 'https://www.linkedin.com/in/alicejohnson',
        twitter: 'https://www.twitter.com/alicejohnson',
        github: 'https://www.github.com/alicejohnson',
        facebook: 'https://www.facebook.com/alicejohnson'
      },
    },
  ];

  const socialIcons = {
    linkedin: FaLinkedin,
    twitter: FaTwitter,
    github: FaGithub,
    facebook: FaFacebook
  };


  return (
    <div className="team-section py-16 max-w-7xl mx-auto mt-[40px]">
        <p className="text-2xl md:text-4xl lg:text-5xl text-center text-red-600 font-semibold mb-[20px]">Our Team</p>
      <div className="team-members grid grid-cols-1 gap-2 md:grid-cols-4">
        {teamMembers.map((member, index) => (
          <div
            className="relative  h-[350px] overflow-hidden group rounded-lg shadow-lg border border-gray-200"
            key={index}
          >
            {/* Grayscale Image */}
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition duration-500"
            />

            {/* Sliding Overlay */}
            <div className="absolute inset-0 bg-[#DD0429] translate-y-[-100%] group-hover:translate-y-0 transition-transform duration-700 ease-in-out flex flex-col justify-center items-center text-white p-4">
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-md">{member.role}</p>

              {/* Social Media Icons */}
              <div className="mt-4 flex justify-center gap-4">
                {Object.keys(member.socials).map((socialPlatform) => {
                  const key = socialPlatform as keyof typeof socialIcons; 
                  const Icon = socialIcons[key];
                  return (
                    <a
                      href={member.socials[key]}
                      target="_blank"
                      rel="noopener noreferrer"
                      key={socialPlatform}
                      className="text-white hover:text-black transition duration-300 transform hover:scale-110"
                    >
                      <Icon className="text-xl" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;