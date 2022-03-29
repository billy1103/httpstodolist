import React, { useState } from "react";

//create your first component
const Home = () => {
	const [username, setUsername] = useState("");
	console.log(username);

	return (
		<div>
			<input
				type="text"
				className="form-control"
				placeholder="Recipient's username"
				onChange={(event) => {
					setUsername(event.target.value);
				}}
			/>
			<button className="btn btn-outline-secondary" type="button">
				Button
			</button>
			<ul>
				{username.map(() => (
					<li key={username}>{username}</li>
				))}
			</ul>
		</div>
	);
};

export default Home;
