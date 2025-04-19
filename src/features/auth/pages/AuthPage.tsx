import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Box, Button, Typography, useMediaQuery, useTheme } from "@mui/material";
import AuthLayout from "../components/layouts/AuthLayout";
import LoginForm from "../components/forms/LoginForm";
import SignupForm from "../components/forms/SignupForm";
import { UserRoles } from "@core/types/user.Interface";
import Lottie from "lottie-react";
import animation from "../../../assets/03e00cc5-2b17-4937-9de6-b7a1b5fed732.json";

const AuthPage = () => {
    const [formDisabled, _setFormDisabled] = useState(false);
    const [searchParams] = useSearchParams();
    const currentPage = searchParams.get("page") || "login";
    const [userType, setUserType] = useState<Omit<UserRoles, "admin">>("seeker");

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    useEffect(() => {
        sessionStorage.removeItem("otpStartTime");
        sessionStorage.removeItem("verifyPageActive");
    }, []);

    const tabButtonStyle = (activeFor: UserRoles) => ({
        padding: "8px 16px",
        backgroundColor: userType === activeFor ? "#E9EBFD" : "transparent",
        color: "primary.main",
        border: "none",
        boxShadow: "none",
        "&:hover": {
            backgroundColor: userType === activeFor ? "primary.main" : "primary.contrastText",
            color: userType === activeFor ? "primary.contrastText" : "primary.main",
        },
    });

    return (
        <AuthLayout>
        
            <Box
                sx={{
                    display: "flex",
                    flexDirection: isMobile ? "column" : "row",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 4,
                    px: 2,
                    py: 6,
                }}
            >
           
                <Box sx={{ maxWidth: 400, width: "100%" }}>
                    <Lottie animationData={animation} loop={true} />
                </Box>

                <Box
                    textAlign="center"
                    sx={{
                        width: "100%",
                        maxWidth: 400,
                        mx: "auto",
                    }}
                >
                    <Box mb={3} display="flex" justifyContent="center" gap={1}>
                        <Button
                            variant="contained"
                            onClick={() => setUserType("seeker")}
                            sx={tabButtonStyle("seeker")}
                        >
                            Job Seeker
                        </Button>
                        <Button
                            variant="contained"
                            onClick={() => setUserType("company")}
                            sx={tabButtonStyle("company")}
                        >
                            Company
                        </Button>
                    </Box>

                    <Typography
                        variant="h4"
                        fontWeight={600}
                        sx={{
                            fontSize: { xs: "1.5rem", sm: "2rem", md: "2.25rem" },
                            mb: 3,
                        }}
                    >
                        {currentPage === "login" ? "Welcome Back, Dude" : "Get more opportunities"}
                    </Typography>

                  
                    <Box
                        sx={{
                            position: "relative",
                            width: "100%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <Box
                            sx={{
                                position: "absolute",
                                top: "50%",
                                left: 0,
                                right: 0,
                                borderTop: "1px solid #ddd",
                            }}
                        />
                        <Typography
                            variant="body2"
                            color="text.disabled"
                            sx={{
                                backgroundColor: "white",
                                paddingX: 2,
                                position: "relative",
                                zIndex: 1,
                            }}
                        >
                            Or with Email
                        </Typography>
                    </Box>

                   
                    <Box marginBlock={2}>
                        {currentPage === "login" ? (
                            <LoginForm disabled={formDisabled} />
                        ) : (
                            <SignupForm role={userType.toString()} disabled={formDisabled} />
                        )}
                    </Box>
                </Box>
            </Box>
        </AuthLayout>
    );
};

export default AuthPage;
