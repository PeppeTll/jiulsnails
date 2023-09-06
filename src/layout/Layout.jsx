import styles from "./index.module.scss";

//Components
import Header from "@/components/header";
import Footer from "@/components/footer";

const Layout = ({ children }) => {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	);
};

export default Layout;
