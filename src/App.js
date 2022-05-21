import "./App.css";
import { NavLink, Routes, Route, Link } from "react-router-dom";
import { Hot } from "./components/Hot";
import { Regular } from "./components/Regular";
import { MainPage } from "./components/MainPage";
import { AddMem } from "./components/AddMem";
import { Favorited } from "./components/Favorited";
function App() {
	return (
		<div className="App">
			<aside>
				<Link to="/">
					<img src="..\img\logo.png" alt="logo" className="logo" />
				</Link>
				<nav>
					<NavLink to="/">Strona główna</NavLink>
					<br />
					<NavLink to="/hot">Hot Mems</NavLink>
					<br />
					<NavLink to="/regular">Niedocenione</NavLink>
					<br />
					<NavLink to="/favorited">Ulubione</NavLink>
					<br />
					<NavLink to="/add">Dodaj mema</NavLink>
					<br />
				</nav>
			</aside>
			<main>
				<Routes>
					<Route path="/" element={<MainPage />}></Route>
					<Route path="/hot" element={<Hot />}></Route>
					<Route path="/regular" element={<Regular />}></Route>
					<Route path="/favorited" element={<Favorited />}></Route>
					<Route path="/add" element={<AddMem />}></Route>
				</Routes>
			</main>
		</div>
	);
}

export default App;
