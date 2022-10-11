import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
	posts: [],
	status: "idle",
	error: null,
};

const postsSlice = createSlice({
	name: "posts",
	initialState,
	reducers: {
		postAdded: {
			reducer(state, action) {
				state.posts.push(action.payload);
			},
			prepare(title, content) {
				return {
					payload: {
						id: nanoid(),
						title,
						content,
					},
				};
			},
		},
	},
});

export const selectAllPosts = (state) => state.posts.posts;
export const { postAdded } = postsSlice.actions;

export default postsSlice.reducer;
