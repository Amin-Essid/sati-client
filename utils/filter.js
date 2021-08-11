const filter = (type, level, subject, allFiles, setFiltredFiles) => {
  let files = allFiles;
  console.log(type, level, subject);
  if (type) {
    let temp = files.filter((file) => file.types.includes(type));
    files = temp;
  }
  if (level) {
    let temp = files.filter((file) => file.levels.includes(level));
    files = temp;
  }
  if (subject) {
    let temp = files.filter((file) => file.subjects.includes(subject));
    files = temp;
  }
  //   setFiltredFiles(files);
  return files;
};

export default filter;
