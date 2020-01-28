import React, { useState } from "react";
import {
	Typography,
	TextField,
	Paper,
	Button,
	List,
	ListItem,
	ListItemText
} from "@material-ui/core";

function App() {
	const [exercises, setExercises] = useState([]);
	const [title, setTitle] = useState("");

	const handleCreate = e => {
		e.preventDefault();
		if (title) {
			setExercises([...exercises, { title, id: Date.now() }]);
			resetTitle();
		}
	};

	const resetTitle = () => setTitle("");

	return (
		<Paper>
			<Typography variant="h1" align="center" gutterBottom>
				Exercises
			</Typography>
			<form onSubmit={handleCreate}>
				<TextField
					name="title"
					label="Exercise"
					value={title}
					onChange={e => setTitle(e.target.value)}
				/>
				<Button type="submit" variant="contained" color="primary">
					Create
				</Button>
			</form>
			<List>
				{exercises.map(({ id, title }) => (
					<ListItem key={id}>
						<ListItemText primary={title} />
					</ListItem>
				))}
			</List>
		</Paper>
	);
}

export default App;
