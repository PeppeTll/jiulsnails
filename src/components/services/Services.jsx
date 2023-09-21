import Image from "next/image";
import styles from "./index.module.scss";

//image
import nails from "@/assets/nails.png";
import manicure from "@/assets/manicure.png";
import pedicure from "@/assets/pedicure.png";
import skinCare from "@/assets/skinCare.png";
import services from "@/assets/services.jpg";

const Services = () => {
	return (
		<div className={styles.Services}>
			<div className={styles.__cardWrap}>
				<div className={styles.__card}>
					<Image src={nails} alt={"nails"} />
					<h3 className={styles.__title}>Manicure</h3>
					<p className={styles.__p}>
						I trattamenti per le unghie stimolano la crescita delle unghie e
						ammorbidiscono la pelle secca e opaca.
					</p>
				</div>
				<div className={styles.__card}>
					<Image src={pedicure} alt={"pedicure"} />
					<h3 className={styles.__title}>Pedicure</h3>
					<p className={styles.__p}>
						I servizi di pedicure offrono una completa ripristino delle tue
						unghie con una lucidatura extra.
					</p>
				</div>
				<div className={styles.__card}>
					<Image src={manicure} alt={"maincure"} />
					<h3 className={styles.__title}>Nails Art</h3>
					<p className={styles.__p}>
						Regalati un design elegante, scegli tra più decorazioni e stili
						disponibili.
					</p>
				</div>
				<div className={styles.__card}>
					<Image src={skinCare} alt={"skin care"} />
					<h3 className={styles.__title}>Skin care</h3>
					<p className={styles.__p}>
						Questo è un trattamento per mani e piedi che completa la tua
						manicure e pedicure.
					</p>
				</div>
			</div>
			<Image src={services} alt={"services"} className={styles.__image} />
		</div>
	);
};

export default Services;
