import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
	selectAllPosts,
	selectPostsStatus,
	selectPostsError,
	fetchPosts,
} from "../../features/posts/post-slice";

const Posts = () => {
	const posts = useSelector(selectAllPosts);
	const postsStatus = useSelector(selectPostsStatus);
	const postError = useSelector(selectPostsError);

	const dispatch = useDispatch();

	useEffect(() => {
		if (postsStatus === "idle") {
			dispatch(fetchPosts());
		}
	}, [postsStatus, dispatch]);

	if (postsStatus === "loading") {
		return <p>Loading</p>;
	}

	if (postsStatus === "error") {
		return <p>{postError}</p>;
	}
	return (
		<div>
			{posts.map((post) => {
				return (
					<div key={post.id}>
						<p>Title: {post.title}</p>
						<p>Content: {post.body}</p>
					</div>
				);
			})}
		</div>
	);
};

export default Posts;
