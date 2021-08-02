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
          <div>
            <Image src={fb} alt="fb" />
          </div>
        </Link>
      </div>
      <div>
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
      </div>
    </div>
  );
}
