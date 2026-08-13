import { useState } from "react";
import S from "./Nav.module.css";
import { useNavigate } from "react-router";

export default function Nav() {
  const options = ["news", "games", "web-apps", "about"];
  const [selected, setSelected] = useState(options[0]);
  const navigate = useNavigate();

  function select(option: string) {
    setSelected(option);
    navigate(option);
  }

  return (
    <div className={S.row}>
      {options.map((option) => (
        <div
          onClick={() => select(option)}
          className={selected == option ? S.selected : ""}
        >
          {option}
        </div>
      ))}
    </div>
  );
}
