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
        <Link href="#">
          <Image src={fb} alt="fb" />
        </Link>
      </div>
      <div>
        <Link href="#">
          <Image src={instagram} alt="instagram" />
        </Link>
      </div>
      <div>
        <Link href="#">
          <Image src={wp} alt="wp" />
        </Link>
      </div>
    </div>
  );
}
