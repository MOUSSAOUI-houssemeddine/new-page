import "./App.css";
import Layout from "./Layout/Layout";
import { ToastContainer } from "react-toastify";
import Routers from "./Routes/Routers";


function App() {

  return (
    <>
        <ToastContainer />
        <Routers />
    </>
  );
}

export default App;
