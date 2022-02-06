import PropTypes from "prop-types";
import style from "./Button.module.css";

const Button = ({ onLoadMore, text }) => {
  return (
    <>
      <button
        type="submit"
        name="button"
        className={style.Button}
        onClick={() => onLoadMore()}
      >
        {text}
      </button>
    </>
  );
};

Button.propTypes = {
  onLoadMore: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

export default Button;
