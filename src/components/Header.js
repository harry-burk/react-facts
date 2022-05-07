import logo from '../images/logo-cropped.svg';

function Header() {
	return (
		<header className="header">
			<nav className="nav-wrap">
				<img src={logo} className="app-logo"/>
				<ul className="nav-items">
					<li>Pricing</li>
					<li>About</li>
					<li>Contact</li>
				</ul>
			</nav>
		</header>
	)
}

export default Header;
