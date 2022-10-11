import { createSlice, nanoid, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
	posts: [],
	status: "idle",
	error: null,
};

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
	const res = await fetch("https://jsonplaceholder.typicode.com/posts");
	if (!res.ok) {
		throw Error(`Error fetch ${res.errorMessage}`);
	}

	return res;
});

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
	extraReducers: (builder) => {
		builder
			.addCase(fetchPosts.pending, (state, action) => {
				state.status = "loading";
			})
			.addCase(fetchPosts.fulfilled, (state, action) => {
				state.status = "success";
				state.posts = action.payload;
			})
			.addCase(fetchPosts.rejected, (state, action) => {
				state.status = "error";
				state.error = action.error.message;
			});
	},
});

export const selectAllPosts = (state) => state.posts.posts;
export const selectPostsStatus = (state) => state.posts.status;
export const selectPostsError = (state) => state.posts.error;
export const { postAdded } = postsSlice.actions;

export default postsSlice.reducer;
