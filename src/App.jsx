import "./App.css";
import { AddForm } from "./components/addForm/AddForm";
import Posts from "./components/Posts/Posts";

function App() {
	return (
		<div className='App'>
			<AddForm />
			<Posts />
		</div>
	);
}

export default App;
