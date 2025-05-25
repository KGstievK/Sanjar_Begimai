"use client";
import { Oswald } from "next/font/google";
import scss from "./Gps.module.scss";
const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  fallback: ["Arial", "sans-serif"],
});

const Gps = () => {
  return (
    <section className={scss.Gps}>
      <div className="container">
        <div className={scss.content}>
          <h1>АДРЕС:</h1>
          <p>Город Талас, Улица Ч. Айтматова, 246</p>
          <p className={oswald.className}>
            Ресторан: <br />{" "}
            
              <strong className={oswald.className}>ТАЛАС</strong>
            
          </p>
          <a href="https://go.2gis.com/eL0vu">
          <button>Карта</button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gps;
