import logo from "./logo.svg";
import "./App.css";

// Variable Declaration Out The Function
const number = 5555;
const student = { name: "Student", age: 27 };
const student2 = { name: "Student2", age: 20 };

// Style Declaration Out The Function Using Object
const numberStyle = {
	color: "rgba(55,155,25,0.9)",
	backgroundColor: "white",
	padding: "20px",
};

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<h1>JSX</h1>
				<p style={numberStyle}>{2222 + number}</p>
				{/* Style Declaration Using Style Tag In Another Curli Bracket */}
				<p style={{ color: "blue", backgroundColor: "white" }}>
					Name: {student.name} Age: {student.age}
				</p>
				<p>
					Name: {student2.name} Age: {student2.age}
				</p>
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
		</div>
	);
}

export default App;
