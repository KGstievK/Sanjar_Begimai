"use client";

import { Oswald } from "next/font/google";
import scss from "./Timer.module.scss";
const oswald = Oswald({ subsets: ["latin"], weight: ["400"],
  display: "swap",
  fallback: ["Arial", "sans-serif"], });

const Timer: React.FC = () => {
  return (
    <section className={scss.Timer}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.titlee}>
            <div className={scss.line}></div>
            <h1 className={scss.kindentosca}>Чакыруу!</h1>
            <div className={scss.line}></div>
          </div>
          <div className={scss.ourDay}>
            <p className={oswald.className}>
            Урматтуу биздин коноктор! Сиздерди үйлөнүү үлпөт тоюбузга арналган салтанатка, кадырлуу коногубуз болуп кетүүгө чакырабыз
            </p>
            <p className={oswald.className}>Саат 17:00</p>
            <h1 className={scss.kindentosca}>
              Той ээлери: Болот, Айсулу
            </h1>
          </div>
          <div className={scss.titlee}>
            <div className={scss.line}></div>
            <h1 className={scss.kindentosca}>Приглашение!</h1>
            <div className={scss.line}></div>
          </div>
          <div className={scss.ourDay}>
            <p className={oswald.className}>
              Совсем скоро, в жизни двух любящих людей произойдет одно из самых важных событий, свидетелями которого мы просим вас быть и разделить радость этого дня вместе с нами.
            </p>
            <p className={oswald.className}>
              В 17:00
            </p>
            <p className={oswald.className}>
              Будем рады пригласить вас стать почётными гостями торжества, посвящённого бракосочетания
            </p>
            <h1 className={scss.kindentosca}>
              С уважением хозяева торжества: <br /> Болот, Айсулу
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timer;
