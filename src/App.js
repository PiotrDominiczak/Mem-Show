import "./App.css";
import { NavLink, Routes, Route, Link } from "react-router-dom";
import { Hot } from "./components/Hot";
import { Regular } from "./components/Regular";
import { MainPage } from "./components/MainPage";
import { AddMem } from "./components/AddMem";
import { Favorited } from "./components/Favorited";
export const scrollToTop = () => window.scrollTo(0, 0);
function App() {
	return (
		<div className="App">
			<aside>
				<Link to="/">
					<img src="..\img\logo.png" alt="logo" className="logo" />
				</Link>
				<nav>
					<NavLink onClick={scrollToTop} to="/">
						Strona główna
					</NavLink>
					<br />
					<NavLink onClick={scrollToTop} to="/hot">
						Hot Mems
					</NavLink>
					<br />
					<NavLink onClick={scrollToTop} to="/regular">
						Niedocenione
					</NavLink>
					<br />
					<NavLink onClick={scrollToTop} to="/favorited">
						Ulubione
					</NavLink>
					<br />
					<NavLink onClick={scrollToTop} to="/add">
						Dodaj mema
					</NavLink>
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
