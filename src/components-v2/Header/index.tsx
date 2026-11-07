import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { assetUrl } from "../../lib/assetUrl";

const Header = () => {
  const home = assetUrl("");

  return (
    <div className="p-8">
      <div className="flex items-center gap-12 max-w-[1200px] mx-auto">
        <a href={home}>
          <img src={assetUrl("svg/logo.svg")} className="w-40" alt="Tamaweb" />
        </a>
        <div className="flex items-center gap-6 font-bold w-full">
          <a href={home}>Home</a>
          <a href={home}>News</a>
          <a
            className="flex items-center gap-1 ml-auto text-accent hover:text-accent/80 transition-colors"
            href="https://tamawebgame.github.io/"
          >
            Play Tamaweb <FontAwesomeIcon size="sm" icon={faAngleRight} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
