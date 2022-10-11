import React from "react";
import { useSelector } from "react-redux";
import { selectAllCharacters } from "../features/characters/character-slice";

const Characters = () => {
	const characters = useSelector(selectAllCharacters);
	console.log(
		"🚀 ~ file: Characters.jsx ~ line 6 ~ Characters ~ characters",
		characters
	);
	return <div>Characters</div>;
};

export default Characters;
