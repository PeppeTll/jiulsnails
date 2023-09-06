import Image from "next/image";
import styles from "./index.module.scss";

//image
import logo from "@/assets/logo.png";

const Header = () => {
	return (
		<div className={styles.container}>
			<div className={styles.__Header}>
				<Image src={logo} alt={"logo"} className={styles.__logo} />
				<nav className={styles.__nav}>
					<ul className={styles.__ul}>
						<li className={styles.__li}>Home</li>
						<li className={styles.__li}>About</li>
						<li className={styles.__li}>Services</li>
						<li className={styles.__li}>Contacts</li>
					</ul>
				</nav>
			</div>
		</div>
	);
};

export default Header;
