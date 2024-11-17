import "./loader.css";
import { ScaleLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="loading">
      <ScaleLoader className="loader" color="yellow" />
    </div>
  )
}
export default Loader