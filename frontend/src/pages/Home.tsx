import "./styles/Home.css";
import useDocumentTitle from "../hooks/useDocumentTitle";
import MainTabs from "../components/MainTabs";
import Container from "react-bootstrap/Container";

function Home() {
    useDocumentTitle("Home");

    return (
        <Container fluid>
            <MainTabs/>
        </Container>
  );
}

export function homeLoader() {
  return <h1>loader</h1>;
}

export default Home;