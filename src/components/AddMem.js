import { useDispatch } from "react-redux";
import { ADD_MEM } from "../store/reducer";
import { useState } from "react";
import { useSelector } from "react-redux";
import validator from "validator";

export const AddMem = () => {
	const [title, setTitle] = useState("");
	const [imgSrc, setImgSrc] = useState("");
	const mems = useSelector((state) => state.mems);
	const dispatch = useDispatch();
	const thankU = document.querySelector(".displayNone");
	const formWrapper = document.getElementById("formWrapper");

	return (
		<div className="wrapper">
			<h2>dodaj mema</h2>
			<p className="displayNone">
				{title !== "" && validator.isURL(imgSrc)
					? "Dziękujemy za dodanie mema, "
					: "Niestety tego mema nie dodaliśmy, "}
				{console.log(validator.isURL(imgSrc))}
				<span
					onClick={(e) => {
						thankU.classList.remove("thanks");
						formWrapper.classList.remove("displayNone");
					}}
				>
					dodaj jeszcze raz
				</span>
				!
			</p>
			<div id="formWrapper">
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
						thankU.classList.add("thanks");
						formWrapper.classList.add("displayNone");
					}}
				>
					Dodaj mema do bazy
				</button>
			</div>
		</div>
	);
};
