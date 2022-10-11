import React from "react";
import { useSelector } from "react-redux";
import {
	selectAllPosts,
	selectPostsStatus,
	selectPostsError,
	fetchPosts,
} from "../../features/posts/post-slice";

const Posts = () => {
	const posts = useSelector(selectAllPosts);
	return (
		<div>
			{posts.length
				? posts.map((post) => {
						return (
							<div key={post.id}>
								<p>Title: {post.title}</p>
								<p>Content: {post.content}</p>
							</div>
						);
				  })
				: null}
		</div>
	);
};

export default Posts;
