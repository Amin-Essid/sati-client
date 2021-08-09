import { useState } from "react";
import Filter from "./Filter";
import FilesMenu from "./FilesMenu";
import CheckPopup from "../components/CheckPopup";

export default function HomeContainer({ allFiles }) {
  const [files, setFiles] = useState(allFiles);
  const [filtredFiles, setFiltredFiles] = useState(files);
  const [type, setType] = useState("");
  const [level, setJLevel] = useState("");
  const [subject, setSubject] = useState("");
  return (
    <div>
      <Filter setType={setType} setJLevel={setJLevel} setSubject={setSubject} />
      <FilesMenu filtredFiles={filtredFiles} />
      <CheckPopup />
    </div>
  );
}
