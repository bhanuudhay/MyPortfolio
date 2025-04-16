import TitleHeader from "../components/TitleHeader";
import { certificates } from "../constants";

const Certifications = () => {
  return (
    <div
      id="certifications"
      className="flex-center section-padding bg-black text-center"
    >
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="Certificates I’ve Achieved"
          sub="📄 Recognized Learning Milestones"
        />

        <br />
        <br />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {certificates.map((cert) => (
            <div
              key={cert.namee}
              className="card-border bg-brown p-4 rounded-xl shadow-md hover:shadow-lg transition duration-300"
            >
              <a href={cert.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={cert.imgPath}
                  alt={cert.namee}
                  className="w-full h-48 object-contain mb-3 hover:scale-105 transition-transform duration-300"
                />
              </a>
              <p className="font-medium text-gray-700">{cert.namee}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certifications;
