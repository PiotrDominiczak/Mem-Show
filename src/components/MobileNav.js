import { NavLink } from "react-router-dom";
import { scrollToTop } from "../App";

export const MobileNav = () => (
	<nav className="mobile">
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
);
