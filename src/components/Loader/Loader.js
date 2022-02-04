import { Puff } from "react-loader-spinner";
import style from "./Loader.module.css";

export default function Loader() {
  return (
    <div className={style.Loader}>
      <Puff color="#00BFFF" height={80} width={80} />
    </div>
  );
}
