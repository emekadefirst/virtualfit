import apiCall from "./apiConfig";
import { toast } from "react-toastify";

export async function loginService(data) {
    try {
        const response = await apiCall("/user/login", "POST", data);

        if (response.status === 200) {
            localStorage.setItem("access_token", response.data.access_token);
            localStorage.setItem("refresh_token", response.data.refresh_token);
            toast.success("Login successful!");
            return response
        } else {
            toast.error("Login failed. Please check your credentials.");
            console.error("Login error:", response.data);
        }

    } catch (error) {
        console.error("Login error:", error);
        toast.error("An unexpected error occurred. Please try again.");
    }
}


export async function SignupService(data) {
    try {
        const response = await apiCall("/user/register", "POST", data);

        if (response.status === 201) {
            toast.success("Signup successful!");
        } else {
            toast.error("Signup failed. Please check your credentials.");
            console.error("Signup error:", response.data);
        }

    } catch (error) {
        console.error("Signuup error:", error);
        toast.error("An unexpected error occurred. Please try again.");
    }
}


export async function getUser() {
  try {
    const response = await apiCall("/user/whoami", "GET");
    return response.data;
  } catch (err) {
    if (err.message?.includes("Network error") || err.name === "NetworkError") {
      toast.error("Network error. Please check your connection.");
    } else if (err.name === "AuthenticationError") {
      toast.error("Session expired. Please login again.");
    } else {
      toast.error("Failed to load user data");
    }
    throw err;
  }
}
