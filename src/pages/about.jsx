import Attestati from "@/components/attestati";
import styles from "../styles/about.module.scss";
import Reveal from "@/reveal";
import Testimonial from "@/components/testimonial";
import Self from "@/components/self";

function About() {
	return (
		<div className={styles.about}>
			<Reveal>
				<Attestati />
			</Reveal>
			<Reveal>
				<Self />
			</Reveal>
		</div>
	);
}

export default About;
