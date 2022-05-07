function CurrentYear() {
	return (
		new Date().getFullYear()
	)
}

function Footer() {
	return (
		<footer className="footer">
			<small>&copy; <CurrentYear/> Harry Burk. All rights reserved.</small>
		</footer>
	)
}

export default Footer;
