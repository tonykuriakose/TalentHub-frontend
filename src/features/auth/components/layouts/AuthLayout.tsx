import { Box } from "@mui/material";

type AuthLayoutProps = {
  children: React.ReactNode;
  imageSrc?: string;
};

const AuthLayout = ({ children, imageSrc = "/images/working-beach.png" }: AuthLayoutProps) => {
  return (
    <Box display="flex" flexDirection="row" height="100vh">
      {/* Left side with background image */}
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flex={1}
        sx={{
          backgroundColor: "secondary.main", // Ensure theme usage
          position: "relative",
          overflow: "hidden",
        }}
      >
        <img
          src={imageSrc}
          alt="auth-layout-bg"
          style={{
            objectFit: "cover",
            width: "100%",
            height: "100%",
            position: "absolute",
            bottom: "0",
          }}
        />
      </Box>

      {/* Right side content */}
      <Box flex={1} display="flex" justifyContent="center" alignItems="center">
        {children}
      </Box>
    </Box>
  );
};

export default AuthLayout;

