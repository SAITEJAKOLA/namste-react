export const SearchBar = ({ searchText, onSearchChange }) => (
	<div className="search-bar-container">
		<input
			type="text"
			className="search-input"
			placeholder="Search restaurants..."
			value={searchText}
			onChange={(e) => onSearchChange(e.target.value)}
		/>
	</div>
);
