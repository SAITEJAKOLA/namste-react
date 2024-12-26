export const NavItems = ({ items }) => (
  <div className="nav-items">
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>
);
