import { LogInOut } from './LogIn';
export const NavItems = ({ items, isLogin, setLoginF }) => (
	<div className="nav-items">
		<ul>
			{items.map((item, index) => (
				<li key={index}>{item}</li>
			))}
		</ul>
		<LogInOut isLogin={isLogin} setLoginF={setLoginF} />
	</div>
);
