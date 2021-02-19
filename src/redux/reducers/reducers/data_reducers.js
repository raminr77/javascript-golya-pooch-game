const INITIAL_STATE = {
	runing: false,
	level: 1,
	bonus: 20,
	credit: 10,
	last_credit: 0,
	selected_box: 0,
	last_risk: false,
};

const showResult = (state) => {
	let range = state.level + 1
	let goal = Math.floor(Math.random() * range) + 1

	if (goal === state.selected_box) {
		return {
			...state,
			selected_box: 0,
			last_risk: false,
			credit: state.bonus,
			level: state.level + 1,
			bonus: state.bonus * 2,
			last_credit: state.bonus,
		};
	}
	return {
		...state,
		level: 1,
		bonus: 20,
		credit: 10,
		runing: false,
		last_credit: 0,
		selected_box: 0,
		last_risk: false,
	};
}

const dataReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case "START":
			return {
				...state,
				level: 1,
					runing: true,
					selected_box: 0,
					last_risk: false,
					credit: action.credit,
					bonus: action.credit * 2,
					last_credit: action.credit
			};

		case "CANCEL":
			return {
				...state,
				last_credit: state.credit,
					last_risk: false,
					selected_box: 0,
					runing: false,
					credit: 10,
					bonus: 20,
					level: 1,
			};

		case "RISK":
			return {
				...state,
				credit: 0,
					last_risk: true,
					selected_box: 0,
					level: state.level + 1,
					bonus: state.bonus * 2,
			};

		case "NEXT":
			return showResult(state)

		case "SELECT":
			return {
				...state,
				selected_box: parseInt(action.selected_box)
			};

		default:
			return state;
	}
};
export default dataReducer;