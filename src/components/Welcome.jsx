import { useState } from "react";
import { useDispatch } from "react-redux";
import { _start } from "../redux/actions/data_actions";
import { ToastContainer, toast } from "react-toastify";

const Welcome = () => {
	const [credit, setCredit] = useState(10);
	const [showHelp, toggleHelp] = useState(false);

	const dispatch = useDispatch();

	const updateCredit = (e) => {
		let value = e.target.value;
		if (value === "" || value < 10) {
			setCredit(10);
			return;
		}
		if (isNaN(value) || value < 1) {
			toast.error("Your Credit In Not Valid", {
				position: "bottom-center",
				hideProgressBar: false,
				progress: undefined,
				closeOnClick: true,
				pauseOnHover: true,
				autoClose: 5000,
				draggable: true,
			});
			return;
		}
		setCredit(value);
	};

	const startGame = () => {
		dispatch(_start(credit));
	};

	return (
		<div className="welcome">
			<span>Please Enter Your First Credit</span>
			<input
				type="text"
				placeholder="Enter Your Credit"
				value={credit}
				onChange={updateCredit}
			/>
			<button onClick={startGame} className="start-btn">
				OK
			</button>
			<button className="help-btn" onClick={() => toggleHelp(!showHelp)}>
				{showHelp ? "Hide Help" : "Show Help"}
			</button>
			<p className={showHelp ? "show" : ""}>
				<span>Help:</span>
				<br />
				You enter the game with the initial amount of capital, then try
				to select one of the boxes, if you select a certain box, your
				money is doubled and you go to the next level otherwise, you
				lose.
				<br />
				- You can risk at any level and zero all your credit and go to
				the next level, and if you choose correctly in the next level,
				your assets will double.
				<br />
				- At each level, you can receive your money and leave.
				<br />
				- If you make the wrong choice, you lose and lose your
				credibility.
				<br />
				<br />I hope you have fun... 😎
			</p>
			<ToastContainer
				position="bottom-center"
				hideProgressBar={false}
				newestOnTop={false}
				autoClose={5000}
				pauseOnFocusLoss
				closeOnClick
				pauseOnHover
				rtl={false}
				draggable
			/>
		</div>
	);
};
export default Welcome;
