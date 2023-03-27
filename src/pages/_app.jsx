import "../styles/globals.css";
import Layout from "../components/Layout";
import { SearchProvider } from "../context/search";
import { AuthProvider } from "../context/auth";

export default function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      <SearchProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SearchProvider>
    </AuthProvider>
  );
}
