import { useDispatch } from "react-redux";
import { SET_DOWNVOTES, SET_STARRED, SET_UPVOTES } from "../store/reducer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faArrowDown,
	faArrowUp,
	faStar,
} from "@fortawesome/free-solid-svg-icons";
import { faStar as farStar } from "@fortawesome/free-regular-svg-icons";

export const CreateMem = (mem) => {
	const dispatch = useDispatch();
	return (
		<div key={mem.index} className="memCard">
			<div className="memHeader">
				<h3 className="memTitle">
					<span className="label">tytuł:</span> {mem.title}
				</h3>
				<button
					className={mem.isStarred ? "star active" : "star"}
					onClick={(e) => {
						dispatch({
							type: SET_STARRED,
							index: mem.index,
						});
					}}
				>
					{mem.isStarred ? (
						<FontAwesomeIcon icon={faStar} className="active" />
					) : (
						<FontAwesomeIcon icon={farStar} />
					)}
				</button>
			</div>

			<img className="memImg" src={mem.img} alt={mem.title} />

			<br />
			<button
				className="voteBtn"
				onClick={(e) => {
					dispatch({
						type: SET_UPVOTES,
						index: mem.index,
					});
				}}
			>
				{mem.upvotes} <FontAwesomeIcon icon={faArrowUp} />
			</button>
			<button
				className="voteBtn"
				onClick={(e) => {
					dispatch({
						type: SET_DOWNVOTES,
						index: mem.index,
					});
				}}
			>
				{mem.downvotes} <FontAwesomeIcon icon={faArrowDown} />
			</button>
		</div>
	);
};
