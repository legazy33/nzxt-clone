import React from "react";
import styled from "styled-components";
import {
	FaRegUser,
	FaRegQuestionCircle,
	FaShoppingCart,
	FaUserSlash,
	FaUserAltSlash,
} from "react-icons/fa";
import { useUserContext } from "../context/user_context";

function Search() {
	const { loginWithRedirect, myUser, logout } = useUserContext();

	return (
		<Searchbar>
			<div className="options">
				<input type="text" placeholder="Search NZXT"></input>

				<ul>
					<li>
						<FaRegQuestionCircle />
					</li>
					<li>
						{myUser ? (
							<button
								type="button"
								className="auth-btn"
								onClick={() => {
									localStorage.removeItem("user");
									logout({ returnTo: window.location.origin });
								}}
							>
								<h3 className="signOut">
									<FaUserAltSlash />
								</h3>
							</button>
						) : (
							<button
								type="button"
								className="auth-btn"
								onClick={loginWithRedirect}
							>
								<h3>
									<FaRegUser />
								</h3>
							</button>
						)}
					</li>
					<li>
						<FaShoppingCart />
					</li>
				</ul>
			</div>
		</Searchbar>
	);
}

const Searchbar = styled.nav`
	background-color: rgba(49, 50, 52);
	height: 50px;
	color: white;
	position: fixed;
	width: 100%;
	z-index: 40;

	.options {
		float: right;
		font-size: 20px;
		align-items: center;
		display: flex;
	}

	.auth-btn {
		border: none;
		background-color: transparent;
		color: white;
		font-size: 20px;
		cursor: pointer;
	}

	input {
		margin-top: 5px;
		font-size: 18px;
		border-radius: 5px;
		padding: 5px;
		padding-left: 10px;
		padding-right: 60px;
		border: none;
	}

	input::placeholder {
		font-size: 14px;
		font-weight: 400;
		letter-spacing: 0.5px;
	}

	input[type="text"]:focus {
		outline: none;
		border: 4px solid #7f00f5;
	}

	ul {
		display: flex;
		list-style: none;
		padding-right: 60px;
		padding-top: 10px;
	}

	li {
		padding-left: 20px;
		font-size: 25px;
		font-weight: 100;
	}

	@media (max-width: 990px) {
		display: none;
	}
`;

export default Search;
