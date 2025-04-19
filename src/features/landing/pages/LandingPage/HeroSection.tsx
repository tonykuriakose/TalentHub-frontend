import { Box, Container, Typography } from "@mui/material";
import Lottie from "lottie-react";
import animation from "@assets/f71d7c06-0426-4926-8508-a800123cf61c.json";

const HeroSection = () => {
  return (
    <Container>
      <Box
        sx={{
          position: "relative",
          paddingY: { xs: 8, sm: 10 },
          height: "calc(100vh - 78px)",
          maxHeight: "700px",
        }}
      >
        {/* Image */}
        <Box
          sx={{
            display: { xs: "none", md: "block" },
            position: "absolute",
            top: 0,
            right: 0,
            width: "50%",
            height: "100%",
            zIndex: -1,
          }}
        >
          <Box sx={{ maxWidth: 700, width: "100%" }}>
            <Lottie animationData={animation} loop={true} />
          </Box>
      
        </Box>

        {/* Content */}
        <Box>
          <Box
            sx={{
              maxWidth: { sm: "100%", md: "50%" },
              textAlign: { xs: "center", sm: "center", md: "left" },
              mb: 5,
            }}
          >
            {/* Title Typography */}
            <Typography
              variant="h3"
              fontWeight={"bold"}
              component="h1"
              gutterBottom
            >
              Your Dream Job Awaits You
            </Typography>

            {/* Description Typography */}
            <Typography
              component={"p"}
              sx={{
                lineHeight: 1.5,
                color: "text.disabled",
              }}
            >
              Find the perfect job that matches your skills and ambitions.
              Explore opportunities with top employers and take the next step in
              your career today.
            </Typography>
          </Box>
          <Box>Explore categories</Box>
        </Box>
      </Box>
    </Container>
  );
};

export default HeroSection;
