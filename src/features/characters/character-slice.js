import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	error: "",
	status: "idle",
	data: [],
};

export const fetchCharacters = async () => {
	let res = await fetch("https://rickandmortyapi.com/api/character");

	if (!res.ok) {
		throw Error(`Error ${res.statusMessage}`);
	}

	return await res.json();
};

const characterSlice = createSlice({
	name: "character",
	initialState,
	reducers: {},
	// extraReducers(builder) {
	// 	builder
	// 		.addCase(fetchCharacters.pending, (state, action) => {
	// 			state.status = "loading";
	// 		})
	// 		.addCase(fetchCharacters.fullfiled, (state, action) => {
	// 			state.status = "success";
	// 			state.data = action.payload;
	// 		})
	// 		.addCase(fetchCharacters.rejected, (state, action) => {
	// 			state.status = "error";
	// 			state.error = action.error.message;
	// 		});
	// },
});

export const selectAllCharacters = (state) => state.character.data;
// export const getCharactersStatus = (state) => state.character.status;
// export const getCharacterssError = (state) => state.character.error;

export default characterSlice.reducer;
