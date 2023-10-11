import { useRef, useEffect } from "react";

import { motion, useInView, useAnimation } from "framer-motion";

const Reveal = ({ children }) => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });
	const mainControls = useAnimation();
	const slideControls = useAnimation();

	useEffect(() => {
		if (isInView) {
			mainControls.start("visible");
			slideControls.start("visible");
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isInView]);
	return (
		<div style={{ position: "relative", width: "100%", overflow: "hidden" }}>
			<motion.div
				ref={ref}
				variants={{
					hidden: { opacity: 0, y: 75 },
					visible: { opacity: 1, y: 0 },
				}}
				initial="hidden"
				animate={mainControls}
				transition={{ duration: 0.5, delay: 0.35 }}
			>
				{children}
			</motion.div>
			<motion.div
				variants={{
					hidden: { left: 0, opacity: 1 },
					visible: { left: "100%", opacity: 0 },
				}}
				initial="hidden"
				animate={slideControls}
				transition={{ duration: 0.5, ease: "easeIn" }}
				style={{
					position: "absolute",
					top: 4,
					bottom: 4,
					left: 0,
					right: 0,
					background: "#D1A878",
					zIndex: 20,
				}}
			/>
		</div>
	);
};

export default Reveal;
