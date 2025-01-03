import { LogInOut } from './LogIn';
import { Link } from 'react-router-dom';
export const NavItems = ({ items, isLogin, setLoginF }) => (
	<div className="nav-items">
		<ul>
			{items.map((item, index) => (
				<li key={index}>
					<Link to = {`/${item}`}>{item}</Link>
				</li>
			))}
		</ul>
		<LogInOut isLogin={isLogin} setLoginF={setLoginF} />
	</div>
);
