import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { postAdded } from "../../features/posts/post-slice";

const initialState = {
	title: "",
	content: "",
};

export const AddForm = () => {
	const dispatch = useDispatch();

	const [formValue, setFormValue] = useState(initialState);

	const handleInput = (e) => {
		const { name, value } = e.target;

		setFormValue({
			...formValue,
			[name]: value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (formValue.title && formValue.content) {
			dispatch(postAdded(formValue.title, formValue.content));
		}

		setFormValue(initialState);
	};
	return (
		<section>
			<h2>Add a new post</h2>
			<form onSubmit={handleSubmit}>
				<label htmlFor='postTitle'></label>
				<input
					id='postTitle'
					type='text'
					value={formValue.title}
					onChange={handleInput}
					name='title'
				/>

				<label htmlFor='postContent'></label>
				<input
					id='postContent'
					type='text'
					value={formValue.content}
					name='content'
					onChange={handleInput}
				/>
				<button type='submit'>submit</button>
			</form>
		</section>
	);
};
