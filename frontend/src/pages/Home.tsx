import "./styles/Home.css";
import useDocumentTitle from "../hooks/useDocumentTitle";
import WidgetsGroup from "../components/WidgetsGroup";

function Home() {
    useDocumentTitle("Home");

    return (
        <WidgetsGroup/>
    );
}

export function homeLoader() {
    return <h1>loader</h1>;
}

export default Home;
