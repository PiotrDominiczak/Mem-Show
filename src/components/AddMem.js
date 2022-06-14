import { useDispatch } from "react-redux";
import { ADD_MEM } from "../store/reducer";
import { useState } from "react";
import { useSelector } from "react-redux";
import validator from "validator";
import { MobileLogo } from "./MobileLogo";

export const AddMem = () => {
	const [title, setTitle] = useState("");
	const [imgSrc, setImgSrc] = useState("");
	const mems = useSelector((state) => state.mems);
	const dispatch = useDispatch();
	const [formVisible, setIsFormVisible] = useState(true);
	return (
		<div className="wrapper">
			<MobileLogo />
			<h2>dodaj mema</h2>
			<p className={formVisible ? "displayNone" : "thanks"}>
				{title !== "" && validator.isURL(imgSrc)
					? "Dziękujemy za dodanie mema, "
					: "Niestety tego mema nie dodaliśmy, "}
				<span
					onClick={(e) => {
						setIsFormVisible(!formVisible);
					}}
				>
					dodaj jeszcze raz
				</span>
				!
			</p>
			<div id="formWrapper" className={formVisible ? "" : "displayNone"}>
				<form>
					<label>Podaj tytuł swojego mema:</label>
					<input
						type="text"
						value={title}
						onChange={(event) => setTitle(event.target.value)}
					/>
					<br />
					<label>Podaj ścieżkę do mema:</label>
					<input
						type="text"
						value={imgSrc}
						onChange={(event) => setImgSrc(event.target.value)}
					/>
				</form>

				<button
					className="addMemBtn"
					onClick={(e) => {
						if (title !== "" && validator.isURL(imgSrc)) {
							const newMemDetails = {
								index: mems.length,
								isStarred: false,
								title: title,
								upvotes: 0,
								downvotes: 0,
								img: imgSrc,
							};

							dispatch({
								type: ADD_MEM,
								payload: newMemDetails,
							});
						} else
							alert(
								"Jeśli chcesz dodać mema musisz podać poprawny url obrazka i wymyślić fajny tytuł"
							);
						setIsFormVisible(!formVisible);
					}}
				>
					Dodaj mema do bazy
				</button>
			</div>
		</div>
	);
};
