import { configureStore } from "@reduxjs/toolkit";
import postReducer from "../features/posts/post-slice";

export const store = configureStore({
	reducer: {
		posts: postReducer,
	},
});
