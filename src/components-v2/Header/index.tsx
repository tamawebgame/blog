import {
  faAngleRight,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { assetUrl } from "../../lib/assetUrl";
import logo from "../../../assets/images/logo_trans_02.png";

const Header = () => {
  const home = assetUrl("");

  return (
    <div className="p-8">
      <div className="flex items-center gap-12 max-w-[1200px] mx-auto">
        <a href={home}>
          <img src={logo} className="w-40" alt="Tamaweb" />
        </a>
        <div className="flex items-center gap-6 font-bold w-full">
          <a href={home}>Home</a>
          <a href={home}>News</a>
          <div className="ml-auto flex items-center gap-2">
            <button
              type="button"
              aria-label="Search"
              className="flex items-center justify-center size-10 rounded-full border border-brand-foreground/20 text-brand-foreground hover:bg-brand-muted/60 transition-colors"
            >
              <FontAwesomeIcon icon={faMagnifyingGlass} size="sm" />
            </button>
            <a
              className="flex items-center gap-1.5 h-10 px-4 rounded-full bg-accent text-accent-foreground no-underline hover:bg-accent/90 transition-colors"
              href="https://tamawebgame.github.io/"
            >
              Play Tamaweb <FontAwesomeIcon size="sm" icon={faAngleRight} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
