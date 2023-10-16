import styles from "./index.module.scss";

import Image from "next/image";
import jiuls from "@/assets/jiuls.jpg";

const Self = () => {
	return (
		<div className={styles.self}>
			<Image className={styles.__img} src={jiuls} alt="jiuls" />
			<div className={styles.__article}>
				<h2 className={styles.__title}>Lorem ipsum dolor sit.</h2>
				<p className={styles.__paragraph}>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea quaerat
					repudiandae quos vel et, vero vitae.
				</p>
			</div>
		</div>
	);
};

export default Self;
