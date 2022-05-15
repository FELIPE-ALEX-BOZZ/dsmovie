import { ReactComponent as GithubIcon } from '../../assets/img/github.svg';
import './styles.css';

function Navbar() {
    return (
        <header>
            <nav className="container">
                <div className="dsmovie-nav-content">
                    <h1>DSMovie</h1>
                    <a href="https://github.com/FELIPE-ALEX-BOZZ/dsmovie/commits/main">
                        <div>
                            <GithubIcon />
                            <p>/FELIPE-ALEX-BOZZ</p>
                        </div>
                    </a>
                </div>
            </nav>
        </header>
    )
}
export default Navbar;