import styles from "./index.module.scss";

//image
import Image from "next/image";

//Router
import { useRouter } from "next/router";

const Icona = ({ img, href, width = "100", height = "100" }) => {
	const router = useRouter();

	const handleRedirect = () => {
		if (href) {
			router.push(href);
		}
	};

	return (
		<div className={styles.icon}>
			<Image
				src={img}
				alt="icon image"
				onClick={handleRedirect}
				width={width}
				height={height}
			/>
		</div>
	);
};

export default Icona;
