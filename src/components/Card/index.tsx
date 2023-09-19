import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import SwipeableViews from "react-swipeable-views";

// carousel
export const images = [
  {
    imgPath:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGMr4p8Wm_4i1yY3bEbUuUz32fof5k4ENrL3tcEuAlNAmXl_E43qrSSRFyvOIdjmLXeOU&usqp=CAU",
  },
  {
    imgPath:
      "https://www.digitaltrends.com/wp-content/uploads/2022/08/iPhone-SE-2022-Starlight-Back-in-Hand.jpg?p=1",
  },
  {
    imgPath:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS38ka6n4SJwKxXzgkI3wkTAYaNkTY0z3GhCy7J8ILz7wVz5HzZ-VG60wEymFygWO77dRw&usqp=CAU",
  },
  {
    imgPath:
      "https://www.apple.com/newsroom/images/product/iphone/standard/Apple-iPhone-14-iPhone-14-Plus-hero-220907_Full-Bleed-Image.jpg.large.jpg",
  },
];
//

export const CardContainer = ({ maxW }: any) => {
  const [isMobile, setIsMobile] = React.useState(false);
  const [isBookmark, setIsBookmark] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      const isMobileDevice = window.innerWidth <= 768; // Adjust the breakpoint as needed
      setIsMobile(isMobileDevice);
    };

    // Initial check
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };
  const textdf = "Apple iPhone 13 128 GB";
  return (
    <Card sx={{ maxWidth: maxW, cursor: "pointer" }}>
      <Box sx={{ maxWidth: 400, flexGrow: 1, position: "relative" }}>
        <IconButton
          aria-label="bookmark"
          sx={{
            position: "absolute",
            zIndex: 1,
            right: 10,
            top: 10,
            background: "#fff",
          }}
          onClick={() => {
            setIsBookmark(!isBookmark);
          }}
        >
          {isBookmark ? (
            <AiFillHeart className="text-black" />
          ) : (
            <AiOutlineHeart className="text-black" />
          )}
        </IconButton>
        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
          autoPlay
        >
          {images.map((step, index) => (
            <div key={index}>
              {Math.abs(activeStep - index) <= 2 ? (
                <Box
                  component="img"
                  sx={{
                    height: 255,
                    display: "block",
                    maxWidth: 400,
                    overflow: "hidden",
                    width: "100%",
                    objectFit: "cover",
                  }}
                  src={step.imgPath}
                />
              ) : null}
            </div>
          ))}
        </SwipeableViews>
        {isMobile && (
          <MobileStepper
            sx={{
              position: "absolute",
              height: 35,
              top: 220,
              width: "100%",
              background: "none",
              backdropFilter: "sepia(100%)",
              display: "flex",
              justifyContent: "center",
            }}
            steps={maxSteps}
            position="static"
            activeStep={activeStep}
            backButton=""
            nextButton=""
          />
        )}
      </Box>

      <CardContent
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
          position: "relative",
        }}
      >
        <span className="text-base text-orange-600 font-bold">280 AZN</span>
        <span className="text-base font-semibold	">
          {textdf.substring(0, 18)}...
        </span>
        <span className="text-sm ">Bakı, Azərbaycan</span>
        <span className="text-xs font-light	text-stone-500 mt-2">
          12 sentyabr 2023
        </span>
        <a
          href={`http://wa.me/994${519291845}`}
          className="absolute right-3 bottom-5 text-2xl text-yellow-600"
          target="_blank"
          rel="noreferrer"
        >
          <IoLogoWhatsapp />
        </a>
      </CardContent>
    </Card>
  );
};
