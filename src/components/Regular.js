import { useSelector } from "react-redux";
import { CreateMem } from "./Mem";
import { Link } from "react-router-dom";
import { scrollArrow } from "./Hot";
import { MobileLogo } from "./MobileLogo";

export const Regular = (mem) => {
	const mems = useSelector((state) => state.mems);
	const regularList = mems.filter((mem) => mem.upvotes - mem.downvotes <= 5);
	const regularMems = regularList.map((mem) => CreateMem(mem));

	return (
		<>
			<div className="wrapper">
				<MobileLogo />
				<h2>Niedocenione</h2>
				<p>Te niedocenione memy czekają na Twoją ocenę.</p>

				{regularMems.length > 0 ? (
					<a href="#mems">{scrollArrow}</a>
				) : (
					<p className="infoNoMems">
						Tym razem nie zobaczysz żadnych memów w tym miejscu,
						ponieważ wszystkie nasze memy są
						{<Link to="/hot"> hot</Link>}. <br />
						Nie mamy zwykłych memów, przejdź do
						{<Link to="/hot"> hot</Link>} i oglądaj tam najlepsze
						memy internetów, lub{" "}
						{<Link to="/add"> dodaj swój mem</Link>}.
					</p>
				)}
			</div>
			<div id="mems">{regularMems}</div>
		</>
	);
};
