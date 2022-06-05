import { Link, NavLink } from "react-router-dom";
import { scrollToTop } from "../App";

export const MobileLogo = () => (
	<div className="mobile">
		<NavLink className="mobile" onClick={scrollToTop} to="/">
			back
		</NavLink>

		<Link className="mobile" to="/">
			<img src="..\img\logo.png" alt="logo" className="logoMobile" />
		</Link>
	</div>
);
