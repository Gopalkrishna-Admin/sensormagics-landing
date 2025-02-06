import { companyLogos } from "../constants";
import { useEffect, useState } from "react";

const CompanyLogo = ({ className }) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const scrollInterval = setInterval(() => {
      setScrollPosition((prev) => {
        const newPosition = prev - 1; // Adjust speed by changing this value
        // Reset position when all logos have scrolled
        return newPosition <= -100 ? 0 : newPosition;
      });
    }, 30); // Adjust interval for smoother/faster animation

    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <div className={className}>
      <h5 className="tagline mb-6 text-center text-n-1">
        HELPING PEOPLE CREATE BEAUTIFUL CONTENT AT
      </h5>

      <div className="overflow-hidden relative">
        <div 
          className="flex whitespace-nowrap"
          style={{ transform: `translateX(${scrollPosition}px)` }}
        >
          {/* First set of logos */}
          {companyLogos.map((logo, index) => (
            <div
              key={`logo-1-${index}`}
              className="inline-flex items-center bg-n-1 justify-center min-w-[200px] h-[8.5rem] mx-4"
            >
              <img
                src={logo}
                width={134}
                height={28}
                className="pointer-events-none"
                alt="companyLogo"
              />
            </div>
          ))}
          
          {/* Duplicate set of logos for seamless loop */}
          {companyLogos.map((logo, index) => (
            <div
              key={`logo-2-${index}`}
              className="inline-flex items-center bg-n-1 justify-center min-w-[200px] h-[8.5rem] mx-4"
            >
              <img
                src={logo}
                width={134}
                height={28}
                className="pointer-events-none"
                alt="companyLogo"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompanyLogo;
