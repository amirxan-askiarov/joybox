import styles from "./NoResults.module.scss";

import Header from "../../components/Header/Header.tsx";
import Footer from "../../components/Footer/Footer.tsx";

interface NoResultsPageProps {
  pageTitle: string;
}

const NoResultsPage: React.FC<NoResultsPageProps> = ({ pageTitle }) => {
  return (
    <>
      <Header />
      <main className={styles.mainContainer}>
        <h1 className={styles.mainContainer__heading}>
          No results shown for {pageTitle}...
        </h1>
      </main>
      <Footer />
    </>
  );
};
export default NoResultsPage;
