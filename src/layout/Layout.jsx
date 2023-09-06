import styles from "./index.module.scss";

//Components
import Header from "@/components/header";

const Layout = ({ children }) => {
	return (
		<>
			<Header />
			{children}
			{/* <Footer /> */}
		</>
	);
};

export default Layout;
