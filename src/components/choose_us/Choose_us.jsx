import Image from "next/image";
import styles from "./index.module.scss";

//image
import choose_us from "@/assets/choose_us.png";

const Choose_us = () => {
	return (
		<div className={styles.Choose_us}>
			<figure className={styles.__figure}>
				<p className={styles.__block}></p>
				<Image src={choose_us} alt={"choose us"} className={styles.__image} />
			</figure>
			<div className={styles.__text}>
				<h1 className={styles.__title}>fasdfasdfasd</h1>
				<p className={styles.__line}></p>
				<p className={styles.__p}>
					Lorem ipsum dolor sit amet consectetur. Animi et ullam libero aut
					iusto. Iusto dicta laudantium ullam beatae facilis. Saepe ipsa quam
					nulla eligendi veniam?
				</p>
				<button className={styles.__button}> Visita </button>
			</div>
		</div>
	);
};

export default Choose_us;
