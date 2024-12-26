import { mediaURL } from "../utils/constant";
export const Logo = () => (
  <div className="logo-container">
    <img
      className="logo"
      src={`${mediaURL}fl_lossy,f_auto,q_auto,w_192,h_192/portal/c/logo_2022.png`}
      alt="App Logo"
    />
  </div>
);
