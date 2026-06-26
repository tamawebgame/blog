import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

import Logo from "/assets/images/logo.svg?react";

const Header = () => {
  return (
    <div className="p-8">
      <div className="flex items-center gap-12 max-w-[1200px] mx-auto">
        <Link to="/blog/">
          <img src="svg/logo.svg" className="w-40" />
        </Link>
        <div className="flex items-center gap-6 font-bold w-full">
          <Link to="/blog/">Home</Link>
          <Link to="/blog/">News</Link>
          <Link className="flex items-center gap-1 ml-auto" to="/blog/">
            Play Tamaweb <FontAwesomeIcon size="sm" icon={faAngleRight} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
