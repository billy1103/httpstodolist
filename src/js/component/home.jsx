import React, { useState, useEffect } from "react";

const Home = () => {
	const [task, setTask] = useState("");
	const [todoList, setTodoList] = useState([]);

	const getTodos = () => {
		fetch("https://assets.breatheco.de/apis/fake/todos/user/billy")
			.then((response) => response.json())
			.then((result) => setTodoList(result))
			.catch((error) => console.log("error", error));
	};

	useEffect(() => {
		getTodos();
	}, []);

	console.log(todoList);

	const addTodo = (newItem) => {
		const newTask = {
			label: newItem,
			done: false,
		};
		fetch("https://assets.breatheco.de/apis/fake/todos/user/billy", {
			method: "PUT",
			redirect: "follow",
			headers: {
				"Content-type": "application/json",
			},
			body: JSON.stringify([...todoList, newTask]),
		})
			.then((response) => (response.status === 200 ? getTodos() : ""))
			.catch((error) => console.log("error", error));
	};

	const deleteTodo = (index) => {
		const rid = setTodoList().list.filter((item, i) => index !== i);
		fetch("https://assets.breatheco.de/apis/fake/todos/user/billy", {
			method: "PUT",
			redirect: "follow",
			headers: {
				"Content-type": "application/json",
			},
			body: JSON.stringify(rid),
		})
			.then((response) =>
				response.status === 200 ? setTodoList({ list: rid }) : ""
			)
			.catch((error) => console.log("error", error));
	};

	return (
		<div className="box">
			<h1>todos</h1>
			<div className="ib">
				<input
					type="text"
					placeholder="What needs to be done?"
					onChange={(event) => {
						console.log(event.target.value);
						setTask(event.target.value);
					}}
					value={task}
				/>
				<button
					type="button"
					onClick={() => {
						if (task !== "") {
							addTodo(task);
							setTask("");
						}
					}}>
					Add Task
				</button>
			</div>
			<ul className="bullets">
				{todoList.map((todo, i) => {
					return (
						<li key={i}>
							{todo.label}
							<button
								onClick={() => {
									setTodoList(
										todoList.filter(
											(item, index) => index !== i
										)
									);
								}}>
								X
							</button>
						</li>
					);
				})}
			</ul>
			<span>{todoList.length} item left</span>
		</div>
	);
};

export default Home;
