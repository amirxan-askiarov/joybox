import styles from "./Loading.module.scss";

import Header from "../../components/Header/Header.tsx";
import Footer from "../../components/Footer/Footer.tsx";

interface LoadingPageProps {
  pageTitle: string;
}

const Loading: React.FC<LoadingPageProps> = ({ pageTitle }) => {
  return (
    <>
      <Header />
      <main className={styles.mainContainer}>
        <h1 className={styles.mainContainer__heading}>
          Loading {pageTitle}...
        </h1>
      </main>
      <Footer />
    </>
  );
};

export default Loading;
