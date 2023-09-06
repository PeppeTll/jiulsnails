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

//import image
import Image from "next/image";
import slide1 from "@/assets/slide-img-1.png";
import slide2 from "@/assets/slide-img-2.png";
import slide3 from "@/assets/slide-img-3.png";

const Hero = () => {
	return (
		<div className={styles.Hero}>
			<div className={styles.__container}>
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
							<div className={styles.__text}>
								<h1 className={styles.__h1}>Per la cura delle tue unghia</h1>
								<p className={styles.__line}></p>
								<p className={styles.__p}>
									Lorem ipsum dolor sit amet consectetur. Sunt nemo nostrum
									porro officiis et? Quae minus obcaecati aliquam aut
									laudantium.
								</p>
							</div>
							<figure className={styles.__figure}>
								<Image
									src={slide1}
									alt={"slide 1"}
									className={styles.__image}
								/>
							</figure>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className={styles.__slide}>
							<div className={styles.__text}>
								<h1 className={styles.__h1}>Per la cura delle tue unghia</h1>
								<p className={styles.__line}></p>
								<p className={styles.__p}>
									Lorem ipsum dolor sit amet consectetur. Sunt nemo nostrum
									porro officiis et? Quae minus obcaecati aliquam aut
									laudantium.
								</p>
							</div>
							<figure className={styles.__figure}>
								<Image
									src={slide2}
									alt={"slide 1"}
									className={styles.__image}
								/>
							</figure>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className={styles.__slide}>
							<div className={styles.__text}>
								<h1 className={styles.__h1}>Per la cura delle tue unghia</h1>
								<p className={styles.__line}></p>
								<p className={styles.__p}>
									Lorem ipsum dolor sit amet consectetur. Sunt nemo nostrum
									porro officiis et? Quae minus obcaecati aliquam aut
									laudantium.
								</p>
							</div>
							<figure className={styles.__figure}>
								<Image
									src={slide3}
									alt={"slide 1"}
									className={styles.__image}
								/>
							</figure>
						</div>
					</SwiperSlide>
				</Swiper>
			</div>
		</div>
	);
};

export default Hero;
