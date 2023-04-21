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

// Object Wise
const brothers = [
	{ name: "Rased", job: "Service Man" },
	{ name: "Rahul", job: "Student" },
	{ name: "Rafiq", job: "Service Man" },
	{ name: "Ahmed", job: "Service Man" },
];

function App() {
	const nayoks = ["Shakib", "BappRaj", "Salman Shah", "Riaj"];
	return (
		<div className="App">
			{/* {nayoks.map((nayok) => (
				<h3>{nayok}</h3>
			))} */}
			{/* Array String  */}
			{nayoks.map((nayok) => (
				<Person name={nayok}></Person>
			))}

			{/* Array Like Object Dynamic Map */}
			{brothers.map((brother) => (
				<Person name={brother.name}></Person>
			))}
			{/* <Person name="Rased" job="Service Man"></Person>
			<Person name="Rahul" job="Student"></Person> */}
		</div>
	);
}
function Person(props) {
	return (
		<div className="person">
			<h1>Hello {props.name}</h1>
			<p>Profession: {props.job}</p>
		</div>
	);
}

export default App;
