import Image from "next/image";
import styles from "./index.module.scss";

//image
import logo from "@/assets/logo.png";

const Footer = () => {
	return (
		<div className={styles.container}>
			<div className={styles.__Footer}>
				<Image src={logo} alt={"logo"} className={styles.__logo} />
				<ul className={styles.__ul}>
					<li className={styles.__li}>Home</li>
					<li className={styles.__li}>About</li>
					<li className={styles.__li}>Services</li>
					<li className={styles.__li}>Contacts</li>
				</ul>
			</div>
		</div>
	);
};

export default Footer;
