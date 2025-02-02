import { FaGithub, FaLinkedin } from 'react-icons/fa';

const AboutUs = () => {
  const team = [
    {
      name: "5th Mentee",
      role: "Crazy Coder",
      bio: "Carried the whole project.",
      links: {
        linkedin: "#",
        github: "#"
      },
      image: "https://i.pinimg.com/736x/17/f0/22/17f022aa9c15c3299ea1804226a8478c.jpg"
    },
    {
      name: "ChatGPT",
      role: "Best Coder",
      bio: "Project would not have been completed without bro",
      links: {
        linkedin: "#",
        github: "#"
      },
      image: "https://www.edigitalagency.com.au/wp-content/uploads/ChatGPT-logo-PNG-medium-size-white-green-background.png"
    },
    {
      name: "John Doe",
      role: "CEO & Founder",
      bio: "Visionary leader with 10+ years in tech innovation and strategic growth.",
      links: {
        linkedin: "#",
        github: "#"
      },
      image: "/images/john-doe.jpg" // Update with actual image path
    },
    {
      name: "Jane Smith",
      role: "CTO",
      bio: "Tech architect specializing in scalable solutions and system optimization.",
      links: {
        linkedin: "#",
        github: "#"
      },
      image: "/images/jane-smith.jpg"
    },
    {
      name: "Mike Johnson",
      role: "Lead Developer",
      bio: "Full-stack expert focused on clean code and efficient workflows.",
      links: {
        linkedin: "#",
        github: "#"
      },
      image: "/images/mike-johnson.jpg"
    },
    {
      name: "Sarah Williams",
      role: "Product Manager",
      bio: "Customer-focused strategist bridging business needs with technical execution.",
      links: {
        linkedin: "#",
        github: "#"
      },
      image: "/images/sarah-williams.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-radial from-[#451795] to-[#12032b] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl text-white font-bold text-center mb-12">Our Team</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {team.map((member, index) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-lg rounded-lg p-8 transition-all hover:transform hover:scale-105"
            >
              <div className="flex flex-col items-center space-y-4">
                {/* Member Image */}
                <div className="w-32 h-32 rounded-full border-4 border-[#00ff88] overflow-hidden mb-4">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Member Info */}
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-white">{member.name}</h3>
                  <p className="text-[#00ff88] text-sm font-medium mt-1">{member.role}</p>
                </div>
                
                <p className="text-gray-300 text-sm text-center leading-relaxed">{member.bio}</p>
                
                {/* Social Links */}
                <div className="flex space-x-4 pt-4">
                  <a 
                    href={member.links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-[#00ff88] transition-colors"
                  >
                    <FaLinkedin size={20} />
                  </a>
                  <a 
                    href={member.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-[#00ff88] transition-colors"
                  >
                    <FaGithub size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;