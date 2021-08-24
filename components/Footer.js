import Link from "next/link";
import Image from "next/image";
import fb from "../public/fb.png";
import instagram from "../public/in.png";
import wp from "../public/wp.png";
import styles from "../styles/Footer.module.css";
import { useState } from "react";

export default function Footer() {
  return (
    <div className={styles.footerContainer}>
      <div>
        <a
          href="https://www.facebook.com/%D8%B3%D8%A7%D8%AA%D9%8A-100262371669071"
          target="_blank"
        >
          <div>
            <Image src={fb} alt="fb" />
          </div>
        </a>
      </div>
      {/* <div>
        <Link href="#">
          <div>
            <Image src={instagram} alt="instagram" />
          </div>
        </Link>
      </div>
      <div>
        <Link href="#">
          <div>
            <Image src={wp} alt="wp" />
          </div>
        </Link>
      </div> */}
      <div
        style={{
          width: "100px",
          color: "white",
          direction: "ltr",
          height: "20px",
          fontSize: "18px",
        }}
      >
        99066673
      </div>
    </div>
  );
}
