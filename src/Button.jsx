import "./Button.css";
import Data from "./data.json";
import Icon from "@mui/material/Icon";

function Button() {
  return (
    <>
      <div className="button button_primary">
        <Icon>{Data.elements[4].icon}</Icon>
        {Data.elements[4].title}
      </div>
    </>
  )
}

export default Button