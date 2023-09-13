import Image from "next/image";
import styles from "./index.module.scss";
import Link from "next/link";

//image
import logo from "@/assets/logo.png";

const Footer = () => {
	return (
		<div className={styles.container}>
			<div className={styles.__Footer}>
				<Image src={logo} alt={"logo"} className={styles.__logo} />
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
			</div>
		</div>
	);
};

export default Footer;
