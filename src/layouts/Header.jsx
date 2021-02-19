import { useSelector } from "react-redux";

const Header = () => {
	const { dataReducer } = useSelector((state) => state);
	const commas = (number) => {
		let value = parseInt(number);
		return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	};

	return (
		<header>
			<div className="header">
				{dataReducer.runing ? (
					<div className="header__credit">
						Credit: <span>{commas(dataReducer.credit)}</span>
					</div>
				) : (
					<div></div>
				)}
				<div className="header__title">
					<h3 className="title-font">Golya Pooch Game</h3>
					<div className="header__title--level">
						Level {dataReducer.level}
					</div>
				</div>
				{dataReducer.runing ? (
					<div className="header__bonus">
						Bonus: <span>{commas(dataReducer.bonus)}</span>
					</div>
				) : (
					<div></div>
				)}
			</div>
		</header>
	);
};
export default Header;
