import Image from "next/image";
import styles from "./index.module.scss";
import Link from "next/link";

//image
import logo from "@/assets/logo.png";

const Header = () => {
	return (
		<div className={styles.container}>
			<div className={styles.__Header}>
				<Image src={logo} alt={"logo"} className={styles.__logo} />
				<nav className={styles.__nav}>
					<ul className={styles.__ul}>
						<li className={styles.__li}>
							<Link href={"/"}>Home</Link>
						</li>
						<li className={styles.__li}>
							<Link href={"/about"}>About</Link>
						</li>
						<li className={styles.__li}>
							<Link href={"/services"}>Services</Link>
						</li>
						<li className={styles.__li}>
							<Link href={"/contacts"}> Contacts</Link>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	);
};

export default Header;
