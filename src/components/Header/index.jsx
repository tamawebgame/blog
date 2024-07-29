import logo from '../../../assets/images/logo_trans_01.png';
import { Button } from '../Button'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

export const Header = () => {
    return (
        <div className="bg-white h-20 rounded-b-3xl flex items-center px-8 justify-between drop-shadow-lg fixed w-full top-0">
            <img 
                src={logo}
                width={180}
            />
            <Button variant={"solid"} color={"primary"} className={'font-bold'} rightIcon={faAngleRight} onClick={() => window.open("https://autosam.github.io/Tamaweb/", '_blank')}>
                Play Tamaweb!
            </Button>
        </div>
    )
}