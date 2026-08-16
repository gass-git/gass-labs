import S from "./styles/Nav.module.css";
import { useNavigate, useLocation } from "react-router";

export default function Nav() {
  const sections = [
    { key: "news", sectionTitle: "on the burner" },
    { key: "products", sectionTitle: "it's all about the fun" },
    { key: "about", sectionTitle: "baked by humans" },
  ];

  const navigate = useNavigate();
  const location = useLocation();

  function select(i: number) {
    const section = sections[i];

    navigate(section.key, { state: { sectionTitle: section.sectionTitle } });
  }

  function currentSection() {
    return location.pathname.slice(1);
  }

  return (
    <div className={S.container}>
      {sections.map((section, i) => (
        <div
          onClick={() => select(i)}
          className={currentSection() == section.key ? S.selected : ""}
          key={section.key}
        >
          {section.key}
        </div>
      ))}
    </div>
  );
}
