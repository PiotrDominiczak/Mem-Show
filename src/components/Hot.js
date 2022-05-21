import { useSelector } from "react-redux";
import { CreateMem } from "./Mem";
import { Link } from "react-router-dom";

export const scrollArrow = (
	
		<button className="arrow">
			<i className="fas fa-angle-down"></i>
		</button>
	
);

export const Hot = () => {
	const mems = useSelector((state) => state.mems);
	const hotList = mems.filter((mem) => mem.upvotes - mem.downvotes > 5);
	const hotMems = hotList.map((mem) => CreateMem(mem));

	return (
		<>
			<div className="wrapper">
				<h2>Hot mems</h2>
				<p>
					Zapraszamy do obejrzejnia najbardziej topowych i ulubionych
					przez internautów hot-memów.
				</p>

				{hotMems.length > 0 ? (
					<a href="#mems">{scrollArrow}</a>
				) : (
					<p className="infoNoMems">
						Przepraszamy, niestety obecnie żaden z naszych memów nie
						jest hot.
						<br />
						Przejdź do {<Link to="/regular"> niedocenione</Link>} i
						zagłosuj na te, które przypadną Ci do gustu.
					</p>
				)}
			</div>
			<div id="mems">
			{hotMems}</div>
		</>
	);
};
