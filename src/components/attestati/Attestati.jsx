import Image from "next/image";
import styles from "./index.module.scss";

//images
import attestato1 from "@/assets/certificato1.jpg";
import attestato2 from "@/assets/certificato2.jpg";

const Attestati = () => {
	return (
		<div className={styles.Attestati}>
			<figure className={styles.__left_image}>
				<p className={styles.__block}></p>
				<Image
					src={attestato1}
					alt={"attestato 1"}
					className={styles.__image}
				/>
			</figure>
			<figure className={styles.__right_image}>
				<p className={styles.__block}></p>
				<Image
					src={attestato2}
					alt={"attestato 2"}
					className={styles.__image}
				/>
			</figure>
		</div>
	);
};

export default Attestati;
