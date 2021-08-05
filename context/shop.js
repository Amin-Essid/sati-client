import { createContext, useContext, useState } from "react";

const shopContext = createContext();

export function ShopWrapper({ children }) {
  const [shopFiles, setShopFiles] = useState([]);
  const [shopFilesCount, setShopFilesCount] = useState(0);
  const [showButtons, setShowButtons] = useState(false);

  const checkShopFiles = (file) => {
    let files = shopFiles;
    if (files.findIndex((fl) => fl._id === file._id) === -1) return false;
    return true;
  };

  const updateShopFiles = (file) => {
    let files = shopFiles;
    // filesIds = shopFilesIds;
    if (checkShopFiles(file)) {
      let fileIndex = shopFiles.findIndex((fl) => fl._id === file._id);
      files.splice(fileIndex, 1);
      setShopFilesCount(shopFilesCount - 1);
    } else {
      files.push(file);
      setShopFilesCount(shopFilesCount + 1);
      setShowButtons(true);
    }
    // console.log(files);
    setShopFiles(files);
    console.log(shopFiles);
  };

  // const getShopFiles = () => shopFiles;
  return (
    <shopContext.Provider
      value={{
        checkShopFiles,
        updateShopFiles,
        shopFiles,
        shopFilesCount,
        showButtons,
        setShowButtons,
      }}
    >
      {children}
    </shopContext.Provider>
  );
}

export function useShopContext() {
  return useContext(shopContext);
}
