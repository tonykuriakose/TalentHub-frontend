import { Box, useTheme, useMediaQuery } from "@mui/material";
import Logo from "@core/components/ui/Logo";
import useAppSelector from "@core/hooks/useSelector";
import { Navigate } from "react-router-dom";
import ScrollableContainer from "@core/components/ui/ScrollableContainer";
import { ReactNode } from "react";

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  const user = useAppSelector((state) => state.auth.user);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  if (user) {
    if (user.role === "admin") return <Navigate to="/admin" />;
    if (user.role === "seeker") return <Navigate to="/seeker" />;
    if (user.role === "company") return <Navigate to="/company" />;
  }

  return (
    <Box
      display={isSmallScreen ? "block" : "flex"}
      height="100vh"
      sx={{ overflow: "hidden" }}
    >
   
      {!isSmallScreen && (
        <Box
          width="40%"
          bgcolor="#F5F6FA"
          display="flex"
          alignItems="center"
          justifyContent="center"
          px={4}
        >
          <Logo />
        </Box>
      )}

   
      <ScrollableContainer
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        width="100%"
        height="100%"
        sx={{ overflowY: "scroll", paddingTop: 3 }}
        px={isSmallScreen ? 3 : 0}
      >
        {children}
      </ScrollableContainer>
    </Box>
  );
};

export default AuthLayout;
