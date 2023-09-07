/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/no-unescaped-entities */
import styles from "./index.module.scss";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";

//image
import image1 from "@/assets/mamma.jpg";
import image2 from "@/assets/zia.jpg";
import image3 from "@/assets/nonna.jpg";
import image4 from "@/assets/giada.jpg";
import icon from "@/assets/commento.png";
import Image from "next/image";

const Testimonial = () => {
	return (
		<div className={styles.Testimonial}>
			<h1 className={styles.__title}>Testimonials</h1>
			<Swiper
				slidesPerView={1}
				spaceBetween={30}
				loop={true}
				pagination={{
					clickable: true,
				}}
				centeredSlides={true}
				autoplay={{
					delay: 5500,
					disableOnInteraction: false,
				}}
				modules={[Pagination, Navigation, Autoplay]}
				className={styles.__slider}
			>
				<SwiperSlide>
					<div className={styles.__card}>
						<figure className={styles.__figure}>
							<Image src={image1} alt={"image 1"} className={styles.__image} />
						</figure>
						<div className={styles.__text}>
							<h3 className={styles.__name}>Daniela</h3>
							<Image src={icon} alt={"commento"} className={styles.__icon} />
							<p className={styles.__p}>
								Un'esperienza straordinaria! Le mie unghie non sono mai state
								così belle. Grazie per il tocco magico, tornerò sicuramente!
							</p>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className={styles.__card}>
						<figure className={styles.__figure}>
							<Image src={image2} alt={"image 2"} className={styles.__image} />
						</figure>
						<div className={styles.__text}>
							<h3 className={styles.__name}>Gabriella</h3>
							<Image src={icon} alt={"commento"} className={styles.__icon} />
							<p className={styles.__p}>
								Sono rimasta affascinata dal tuo talento nell'arte delle unghie.
								Ogni visita è un trattamento di lusso per me. Altamente
								raccomandato
							</p>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className={styles.__card}>
						<figure className={styles.__figure}>
							<Image src={image3} alt={"image 3"} className={styles.__image} />
						</figure>
						<div className={styles.__text}>
							<h3 className={styles.__name}>Jolanda</h3>
							<Image src={icon} alt={"commento"} className={styles.__icon} />
							<p className={styles.__p}>
								Le tue abilità sono incredibili! Hai trasformato le mie unghie
								in opere d'arte. Non vedo l ora di tornare per un altra sessione
								di bellezza!
							</p>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className={styles.__card}>
						<figure className={styles.__figure}>
							<Image src={image4} alt={"image 4"} className={styles.__image} />
						</figure>
						<div className={styles.__text}>
							<h3 className={styles.__name}>Giada</h3>
							<Image src={icon} alt={"commento"} className={styles.__icon} />
							<p className={styles.__p}>
								Un'esperienza rilassante e professionale. Le tue mani esperte
								hanno reso le mie unghie fantastiche. Non potrei essere più
								felice dei risultati. Grazie mille!
							</p>
						</div>
					</div>
				</SwiperSlide>
			</Swiper>
		</div>
	);
};

export default Testimonial;
