import { Link } from "react-router-dom";
import { MobileNav } from "./MobileNav";
export const MainPage = () => {
	return (
		<div className="wrapper">
			<Link className="mobile" to="/">
				<img src="..\img\logo.png" alt="logo" className="logoMobile" />
			</Link>

			<h2>Witamy</h2>
			<p>
				Lorem Khaled Ipsum is a major key to success. The key to more
				success is to have a lot of pillows. How’s business? Boomin. Egg
				whites, turkey sausage, wheat toast, water. Of course they don’t
				want us to eat our breakfast, so we are going to enjoy our
				breakfast.
			</p>
			<MobileNav />
		</div>
	);
};
