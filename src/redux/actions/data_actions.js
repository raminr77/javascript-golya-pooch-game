export const _start = (credit) => {
	return {
		type: "START",
		credit
	};
};

export const _cancel = (credit) => {
	return {
		type: "CANCEL",
		credit
	};
};

export const _risk = () => {
	return {
		type: "RISK"
	};
};

export const _next = () => {
	return {
		type: "NEXT"
	};
};

export const _select = (selected_box) => {
	return {
		type: "SELECT",
		selected_box
	};
};