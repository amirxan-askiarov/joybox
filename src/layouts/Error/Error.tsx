import styles from "./Error.module.scss";

import Header from "../../components/Header/Header.tsx";
import Footer from "../../components/Footer/Footer.tsx";

interface ErrorPageProps {
  pageTitle: string;
}

const Error: React.FC<ErrorPageProps> = ({ pageTitle }) => {
  return (
    <>
      <Header />
      <main className={styles.mainContainer}>
        <h1 className={styles.mainContainer__heading}>
          Error during loading page {pageTitle}...
        </h1>
      </main>
      <Footer />
    </>
  );
};
export default Error;
