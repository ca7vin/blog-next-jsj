import "bootstrap/dist/css/bootstrap.min.css";
import Container from "../components/container/container";

function MyApp({ Component, pageProps }) {
  return (
    <Container>
      <Component {...pageProps} />
    </Container>
  );
}

export default MyApp;
