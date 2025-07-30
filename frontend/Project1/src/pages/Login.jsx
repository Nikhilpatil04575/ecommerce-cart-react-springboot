import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/login.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const response = await axios.post(
				"http://localhost:8080/api/auth/login",
				{
					email,
					password,
				}
			);

			const { token, user } = response.data;

			localStorage.setItem("token", token);
			localStorage.setItem("user", JSON.stringify(user));

			console.log("Token", token);
			console.log("User", user);

			toast.success("Login Success!", {
				position: "top-right",
				autoClose: 2000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});

			setTimeout(() => {
				navigate("/");
			}, 1000);
		} catch (error) {
			if (error.response && error.response.status === 401) {
				toast.error("Incorrect email or password", {
					position: "top-right",
					autoClose: 3000,
				});
			} else if (error.response && error.response.status === 404) {
				toast.error("User not found", {
					position: "top-right",
					autoClose: 3000,
				});
			} else {
				console.log("Login error:", error);
				toast.error("Something went wrong. Please try again.", {
					position: "top-right",
					autoClose: 3000,
				});
			}
		}
	};

	return (
		<div className="login-container">
			<header className="navbar"></header>
			<div className="login-box">
				<h1>Login</h1>
				<form onSubmit={handleSubmit}>
					<input
						type="email"
						placeholder="Enter your email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
					/>
					<input
						type="password"
						placeholder="Enter your password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						required
					/>
					<button type="submit">Login</button>
				</form>
				<p>
					Don't have an account? <Link to="/signup">Register here</Link>
				</p>
			</div>
		</div>
	);
};

export default Login;
