import Link from "next/link";
import Image from "next/image";
import Logo from "../public/logo.png";
import Shop from "../public/shop.png";
import mobileNavIcon from "../public/mobileNavIcon.png";
import styles from "../styles/Header.module.css";
import { useState, useEffect } from "react";
import { useShopContext } from "../context/shop";

const links = [
  {
    name: "الأدوات البيداغوجية",
    url: "#",
  },
  {
    name: "إنظم إلينا",
    url: "#",
  },
  {
    name: "إتصل بنا",
    url: "#",
  },
];
export default function Header() {
  const { shopFilesCount } = useShopContext();
  const [mobileMode, setMobileMode] = useState(false);
  // const [files, setFiles] = useState(shopFiles);
  // useEffect(() => {
  //   // Update the document title using the browser API
  //   console.log("updated");
  // });
  console.log(shopFilesCount);

  const nav = links.map((link, index) => (
    <Link key={index} href={link.url}>
      {link.name}
    </Link>
  ));
  const mobileNav = links.map((link, index) => (
    <div key={index}>
      <Link href={link.url}>{link.name}</Link>
    </div>
  ));
  return (
    <div className={styles.headerLargeContainer}>
      <div className={styles.headerContainer}>
        <div className={styles.headerLogo}>
          <Image src={Logo} alt="logo" />
        </div>
        <div className={styles.headerNav}>{nav}</div>
        <div className={styles.headerMobileNavIcon}>
          <Image
            onClick={() => setMobileMode(!mobileMode)}
            src={mobileNavIcon}
            alt="mobile Nav Icon"
          />
        </div>
        <div
          style={{
            cursor: "pointer",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              color: "white",
              backgroundColor: "red",
              width: "25px",
              height: "25px",
              textAlign: "center",
              marginLeft: "5px",
              borderRadius: "50%",
            }}
          >
            {shopFilesCount}
          </div>
          <Image src={Shop} alt="shop" />
        </div>
      </div>
      <div
        className={
          mobileMode ? styles.openHeaderMobileNav : styles.closedHeaderMobileNav
        }
      >
        {mobileNav}
      </div>
    </div>
  );
}
