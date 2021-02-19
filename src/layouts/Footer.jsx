import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { _cancel, _risk, _next } from "../redux/actions/data_actions";

const Footer = () => {
	const dispatch = useDispatch();
	const { dataReducer } = useSelector((state) => state);

	const next = () => {
		if (!dataReducer.selected_box) {
			toast.error("Please Select One", {
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
		dispatch(_next());
	};

	const risk = () => {
		if (dataReducer.last_risk) return;
		dispatch(_risk());
	};

	return (
		<footer>
			<button onClick={next} className="select">
				Select
			</button>
			<button
				onClick={() => dispatch(_cancel(dataReducer.credit))}
				className="cancel"
			>
				Cancel
			</button>
			<button
				onClick={risk}
				className={`${dataReducer.last_risk ? "u-disabled" : ""} risk`}
			>
				Risk
			</button>
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
		</footer>
	);
};
export default Footer;
