"use client";
import Slider from "react-slick";
import { FaRobot } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ServiceList from "@/components/ServiceList";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Swiper() {
  const { theme } = useTheme();
  const [isMaxMd, setIsMaxMd] = useState(false);

  // Use useEffect to update screen size state
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)"); // Adjust the breakpoint as needed

    // Define a function to handle media query changes
    const handleMediaQueryChange = (event: {
      matches: boolean | ((prevState: boolean) => boolean);
    }) => {
      setIsMaxMd(event.matches);
    };

    // Add a listener for media query changes
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Initial check for the media query
    setIsMaxMd(mediaQuery.matches);

    // Clean up the listener when the component unmounts
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: isMaxMd ? 1 : 2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2500,
    autoplaySpeed: 3500,
    cssEase: "linear",
  };
  return (
    <div>
      <Slider {...settings}>
        <div>
          <ServiceList
            title="Web Development"
            description="Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet
                                diam sed stet lorem."
            url="/#"
            icon={FaRobot}
          />
        </div>
        <div>
          <ServiceList
            title="Mobile App Development"
            description="Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet
                                diam sed stet lorem"
            url="/#"
            icon={FaRobot}
          />
        </div>
        <div>
          <ServiceList
            title="Web Development"
            description="Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet
                                diam sed stet lorem."
            url="/#"
            icon={FaRobot}
          />
        </div>
        <div>
          <ServiceList
            title="Mobile App Development"
            description="Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet
                                diam sed stet lorem"
            url="/#"
            icon={FaRobot}
          />
        </div>
      </Slider>
    </div>
  );
}
