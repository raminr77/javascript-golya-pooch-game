import { useDispatch, useSelector } from "react-redux";
import { _select } from "../redux/actions/data_actions";

const Game = () => {
	const dispatch = useDispatch();
	const { dataReducer } = useSelector((state) => state);
	let itemsCount = [...Array(dataReducer.level + 1).keys()];

	const select = (e) => {
		dispatch(_select(e.target.value));
	};

	return (
		<div className="game">
			{itemsCount.map((item) => (
				<label key={item}>
					<input
						onClick={select}
						type="radio"
						name="box"
						value={item + 1}
					/>
					<div className="game__box">{item + 1}</div>
				</label>
			))}
		</div>
	);
};
export default Game;
