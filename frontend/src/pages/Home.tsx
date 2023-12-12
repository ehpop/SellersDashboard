import "./styles/Home.css";
import useDocumentTitle from "../hooks/useDocumentTitle";

function Home() {
    useDocumentTitle("Home");

    return (
    <div className="main-div">
      <h1>Home</h1>
      <p>This is the home page</p>
    </div>
  );
}

export function homeLoader() {
  return <h1>loader</h1>;
}

export default Home;