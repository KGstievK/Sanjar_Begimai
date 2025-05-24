"use client";
import Image from "next/image";
import scss from "./NikhahSection.module.scss";
import floral1 from "@/assets/Canjar.svg";
import floral2 from "@/assets/Begimai.svg";
import back from "@/assets/back.jpg";
import { Oswald } from "next/font/google";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  fallback: ["Arial", "sans-serif"],
});
const NikhahSection = () => {
  return (
    <section className={scss.NikhahSection}>
      <div className="container">
        <Image className={scss.back} src={back} alt="" />
        <h1>Wedding Day</h1>
        <div className={scss.content}>
          <div className={scss.name}>
            <div className={scss.we}>
              <div className={scss.cb}>
                <Image className={scss.floral1} src={floral1} alt="" />
                <div className={scss.line}></div>
                <Image className={scss.floral2} src={floral2} alt="" />
              </div>
              <h2 className={scss.fonts}><span>Cанжар</span> <span>&</span> <span>Бегимай</span></h2>
              <div className={scss.date}>
                <h2 className={oswald.className}>Июнь</h2>
                <div className={scss.day}>
                  <h3 className={oswald.className}>21</h3>
                  <p className={oswald.className}>2025</p>
                </div>
                <h2 className={oswald.className}>Суббота</h2>
              </div>
              <div className={scss.time}>
                <h4 className={oswald.className}>17:00</h4>
              </div>
            </div>
          </div>
          <div className={scss.name}>
            <div className={scss.we}>
              <div className={scss.dateCopy}>
                <h2 className={oswald.className}>Июнь</h2>
                <div className={scss.day}>
                  <h3 className={oswald.className}>21</h3>
                  <p className={oswald.className}>2025</p>
                </div>
                <h2 className={oswald.className}>Суббота</h2>
              </div>
              <div className={scss.timeCopy}>
                <h4 className={oswald.className}>17:00</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NikhahSection;
