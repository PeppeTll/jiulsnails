import Image from "next/image";
import styles from "./index.module.scss";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import Swiper core and required modules
import { Pagination, Autoplay, EffectFade } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

//images
import attestato1 from "@/assets/certificato1.jpg";
import attestato2 from "@/assets/certificato2.jpg";
import attestato3 from "@/assets/certificato3.jpg";

const Attestati = () => {
	return (
		<div className={styles.Attestati}>
			<Swiper
				className={styles.__slider}
				spaceBetween={30}
				effect={"fade"}
				// centeredSlides={true}
				autoplay={{
					delay: 2500,
					disableOnInteraction: false,
				}}
				pagination={{
					clickable: true,
				}}
				modules={[Autoplay, Pagination, EffectFade]}
			>
				<SwiperSlide>
					<div className={styles.__slide}>
						<figure className={styles.__figure}>
							<Image
								src={attestato1}
								alt={"attestato 1"}
								className={styles.__image}
							/>
						</figure>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className={styles.__slide}>
						<figure className={styles.__figure}>
							<Image
								src={attestato2}
								alt={"attestato 2"}
								className={styles.__image}
							/>
						</figure>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className={styles.__slide}>
						<figure className={styles.__figure}>
							<Image
								src={attestato3}
								alt={"attestato 3"}
								className={styles.__image}
							/>
						</figure>
					</div>
				</SwiperSlide>
			</Swiper>
		</div>
	);
};

export default Attestati;
