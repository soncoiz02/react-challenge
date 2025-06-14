
import '../../styles/scss/_header.scss';

const Header = () => {
    return (
        <header className='header'>
            <div className="container">
                <h2 className="logo">MO.<span>VIES</span></h2>
                <nav className="header-nav">
                    <div className="btn-nav active">Now Playing</div>
                    <div className="btn-nav">Top Rated</div>
                </nav>
            </div>
        </header>
    )
}

export default Header