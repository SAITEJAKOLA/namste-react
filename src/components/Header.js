import { NavItems } from './NavItems';
import { Logo } from './Logo.js';
import { LogInOut } from './LogIn';
import { useState } from 'react';
import { swiggy_api } from '../utils/constant';
import axios from 'axios';
import _ from 'lodash';

/**
 * Header Component
 */
export const Header = () => {
	const [isLogin, setIsLogin] = useState(false);

	const setLoginF = () => {
		setIsLogin((prevState) => !prevState);
	}; 

	return (
		<div className="header">
			<Logo />
			<NavItems
				items={['Home', 'About', 'Contact', 'Cart']}
				isLogin={isLogin}
				setLoginF={setLoginF}
			/>
		</div>
	);
};
