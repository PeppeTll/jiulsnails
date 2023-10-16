import Icona from "@/Atoms/icona";
import Choose_us from "@/components/choose_us";
import Reveal from "@/reveal";
import styles from "@/styles/contacts.module.scss";

import { useState } from "react";

//Icon
import facebook from "@/assets/facebook.png";
import instagram from "@/assets/instagram.png";
import email from "@/assets/email.png";
import phone from "@/assets/phone.png";

function Contacts() {
	const [viewEmail, setViewEmail] = useState(false);
	const [viewPhone, setViewPhone] = useState(false);

	const handleShowEmail = () => {
		setViewEmail((prev) => !viewEmail);
	};

	const handleShowPhone = () => {
		setViewPhone((prev) => !viewPhone);
	};

	return (
		<div className={styles.contacts}>
			<Reveal>
				<Choose_us />
			</Reveal>
			<Reveal>
				<div className={styles.__recapiti}>
					<h1 className={styles.__title}>Recapiti</h1>
					<div className={styles.__container_info}>
						<Icona
							img={facebook}
							href={"https://www.facebook.com/profile.php?id=100080040019715"}
						/>
						<p className={styles.info}></p>
					</div>
					<div className={styles.__container_info}>
						<Icona
							img={instagram}
							href={"https://www.instagram.com/jiuls.nails/"}
						/>
						<p className={styles.info}></p>
					</div>
					<div className={styles.__container_info} onClick={handleShowEmail}>
						<Icona img={email} />

						{viewEmail && <p className={styles.info}>Example@gmail.com</p>}
					</div>
					<div className={styles.__container_info} onClick={handleShowPhone}>
						<Icona img={phone} />
						{viewPhone && <p className={styles.info}>+39 388 7977005</p>}
					</div>
				</div>
			</Reveal>
		</div>
	);
}

export default Contacts;
