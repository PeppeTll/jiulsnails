import Reveal from "@/reveal";
import styles from "../styles/services.module.scss";

//Components
import Services from "@/components/services";
import Testimonial from "@/components/testimonial";

function services() {
	return (
		<div className={styles.services}>
			<Reveal>
				<Services />
			</Reveal>
			<Reveal>
				<Testimonial />
			</Reveal>
		</div>
	);
}

export default services;
