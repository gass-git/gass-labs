import { useState } from "react";
import S from "./Nav.module.css";
import { useNavigate } from "react-router";

export default function Nav() {
  const sections = [
    { key: "news", sectionTitle: "on the burner" },
    { key: "games", sectionTitle: "it's all about the fun" },
    { key: "web-apps", sectionTitle: "software for the web" },
    { key: "about", sectionTitle: "baked by humans" },
  ];

  const [sectionIndex, setSectionIndex] = useState(0);
  const navigate = useNavigate();

  function select(i: number) {
    const section = sections[i];

    setSectionIndex(i);
    navigate(section.key, { state: { sectionTitle: section.sectionTitle } });
  }

  return (
    <div className={S.row}>
      {sections.map((section, i) => (
        <div
          onClick={() => select(i)}
          className={sections[sectionIndex] == section ? S.selected : ""}
          key={section.key}
        >
          {section.key}
        </div>
      ))}
    </div>
  );
}
