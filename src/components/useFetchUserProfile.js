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
                    if (window.location.pathname !== "/registration"
                        && window.location.pathname !== "/"
                        && window.location.pathname !== "/hostings"
                        && window.location.pathname !== "/forgot-password"
                        && window.location.pathname !== "/news"
                        && window.location.pathname !== "/settings"
                        && window.location.pathname !== "/rules"
                        && window.location.pathname !== "/info"
                        && window.location.pathname !== "/payments"
                        && window.location.pathname !== "/verify-email"
                        && window.location.pathname !== "/order"
                        && window.location.pathname !== "/forgot-password"
                        && window.location.pathname !== "/domen"
                    ) {
                        navigate("/login");
                    }
                }
            } catch (error) {
                console.error("Error fetching user profile:", error);
                if (window.location.pathname !== "/registration"
                    && window.location.pathname !== "/"
                    && window.location.pathname !== "/hostings"
                    && window.location.pathname !== "/forgot-password"
                    && window.location.pathname !== "/news"
                    && window.location.pathname !== "/settings"
                    && window.location.pathname !== "/rules"
                    && window.location.pathname !== "/info"
                    && window.location.pathname !== "/payments"
                    && window.location.pathname !== "/verify-email"
                    && window.location.pathname !== "/order"
                    && window.location.pathname !== "/domen"
                    && window.location.pathname !== "/forgot-password") {
                    navigate("/login");
                }
            }
        };

        if (token) {
            fetchUserProfile();
        } else {
            if (window.location.pathname !== "/registration"
                && window.location.pathname !== "/"
                && window.location.pathname !== "/hostings"
                && window.location.pathname !== "/forgot-password"
                && window.location.pathname !== "/news"
                && window.location.pathname !== "/settings"
                && window.location.pathname !== "/rules"
                && window.location.pathname !== "/info"
                && window.location.pathname !== "/payments"
                && window.location.pathname !== "/verify-email"
                && window.location.pathname !== "/order"
                && window.location.pathname !== "/domen"
                && window.location.pathname !== "/forgot-password"
            ) {
                navigate("/login");
            }
        }
    }, [navigate, token]);
};

export default useFetchUserProfile;
