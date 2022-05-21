import { useSelector } from "react-redux";
import { CreateMem } from "./Mem";
import { Link } from "react-router-dom";

export const scrollArrow = (
	
		<button className="arrow">
			<i className="fas fa-angle-down"></i>
		</button>
	
);

export const Favorited = () => {
	const mems = useSelector((state) => state.mems);
	const favoritedList = mems.filter((mem) => mem.isStarred === true);
	const favoritedMems = favoritedList.map((mem) => CreateMem(mem));

	return (
		<>
			<div className="wrapper">
				<h2>Twoje ulubione memy</h2>
				<p>
					Zapraszamy do przejrzenia Twoich ulubionych memów.
				</p>

				{favoritedMems.length > 0 ? (
					<a href="#mems">{scrollArrow}</a>
				) : (
					<p className="infoNoMems">
						Przepraszamy, niestety obecnie żaden z naszych memów nie
						jest przez Ciebie ulubiony.
						<br />
						Przejdź do {<Link to="/regular"> niedocenione</Link>} lub {<Link to="/hot"> hot</Link>} i
						ogwiazdkuj te memy, które najbardziej przypadną Ci do gustu.
					</p>
				)}
			</div>
			<div id="mems">
			{favoritedMems}</div>
		</>
	);
};
