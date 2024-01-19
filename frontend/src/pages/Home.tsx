import "./styles/Home.css";
import useDocumentTitle from "../hooks/useDocumentTitle";
import Container from "react-bootstrap/Container";
import WidgetsGroup from "../components/WidgetsGroup";

function Home() {
    useDocumentTitle("Home");

    return (
        <Container fluid>
            {/*<MainTabs/>*/}
            {
                <WidgetsGroup/>
            }
        </Container>
  );
}

export function homeLoader() {
  return <h1>loader</h1>;
}

export default Home;
