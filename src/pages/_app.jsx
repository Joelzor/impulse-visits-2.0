import "../styles/globals.css";
import Layout from "../components/Layout";
import { SearchProvider } from "../context/search";

export default function App({ Component, pageProps }) {
  return (
    <SearchProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SearchProvider>
  );
}
