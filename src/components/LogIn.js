export const LogInOut = ({ isLogin, setLoginF }) => {
	return (
		<button className="log-btn" onClick={setLoginF}>
			{isLogin ? 'Logout' : 'Login'}
		</button>
	);
};
