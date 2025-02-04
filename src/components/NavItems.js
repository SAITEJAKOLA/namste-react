import { LogInOut } from './LogIn';
import { Link } from 'react-router-dom';

/**
 * Link is a component that is used to link to another page.
 * It is used to link to another page without reloading the page.
 * It is very similar to the anchor tag in HTML.
 * Link is a wrapper around the anchor tag.
 */
export const NavItems = ({ items, isLogin, setLoginF }) => (
	<div className="nav-items">
		<ul>
			{items.map((item, index) => (
				<li key={index}>
					<Link to={`/${item}`}>{item}</Link>
				</li>
			))}
		</ul>
		<LogInOut isLogin={isLogin} setLoginF={setLoginF} />
	</div>
);
