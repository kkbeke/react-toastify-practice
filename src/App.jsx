import "./App.css";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const NotifyInfo = () => {
    toast.info("Information");
  };
  const NotifySuccess = () => {
    toast.success("Success ");
  };
  const NotifyWarning = () => {
    toast.warn("Warning ");
  };
  const NotifyError = () => {
    toast.error("Error ");
  };
  return (
    <div className="container">
      <h1>REACT-TOASTIFY PRACTICE</h1>
      <div className="buttonContainer">
        <button className="btn btn-primary p-3 text-black" onClick={NotifyInfo}>
          Info
        </button>
        <button
          className="btn btn-success p-3 text-black"
          onClick={NotifySuccess}
        >
          Success
        </button>
        <button
          className="btn btn-warning p-3 text-black"
          onClick={NotifyWarning}
        >
          Warning
        </button>
        <button className="btn btn-danger p-3 text-black" onClick={NotifyError}>
          Error
        </button>
      </div>
      <ToastContainer position="bottom-right" autoClose={3000} />
    </div>
  );
}

export default App;
