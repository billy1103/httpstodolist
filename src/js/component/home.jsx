import React, { useState } from "react";

//create your first component
const Home = () => {
	const [task, setTask] = useState("");
	const [todoList, setTodoList] = useState([]);

	return (
		<div>
			<input
				type="text"
				className="form-control"
				placeholder="What needs to be done?"
				onKeyDown={/*do something*/}
				onChange={(event) => {
					console.log(event.target.value);
					setTask(event.target.value);
				}}
				value={task}
			/>
			<button
				className="btn btn-outline-secondary"
				type="button"
				onClick={() => {
					setTodoList([...todoList, task]);
					setTask("");
				}}>
				Add Task
			</button>
			<ul>
				{todoList.map((todo, i) => {
					return (
						<>
							<li key={i}>{todo}</li>
							<button onClick={todoList.filter((item) => {task}) }>X</button>
						</>
					);
				})}
			</ul>
		</div>
	);
};

export default Home;
