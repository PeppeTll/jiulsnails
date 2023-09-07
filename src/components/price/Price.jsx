import Image from "next/image";
import styles from "./index.module.scss";

//image
import price from "@/assets/price.png";

const Price = () => {
	return (
		<div className={styles.Price}>
			<Image src={price} alt={"price"} className={styles.__image} />
		</div>
	);
};

export default Price;
