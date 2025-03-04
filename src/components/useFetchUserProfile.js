import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const useFetchUserProfile = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem("token");

    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                const response = await axios.get("https://api.sysdc.uz/api/v1/user/profile", {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                if (!response.data || !response.data.data) {
                    if (window.location.pathname !== "/registration" && window.location.pathname !== "/") {
                        navigate("/login");
                    }
                }
            } catch (error) {
                console.error("Error fetching user profile:", error);
                if (window.location.pathname !== "/registration" && window.location.pathname !== "/") {
                    navigate("/login");
                }
            }
        };

        if (token) {
            fetchUserProfile();
        } else {
            if (window.location.pathname !== "/registration" && window.location.pathname !== "/") {
                navigate("/login");
            }
        }
    }, [navigate, token]);
};

export default useFetchUserProfile;
