import { Oswald } from 'next/font/google';
import scss from './Photo.module.scss'


const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  fallback: ["Arial", "sans-serif"],
});
const Photo = () => {
  return (
    <section className={scss.Photo}>
      <div className="container">
        <div className={scss.content}>
          <h1>ФОТО</h1>
          <p className={oswald.className}>
            Для вашего удобства мы создали чат в Telegram, куда можно будет добавлять Фото и видео со свадьбы. Давайте поделимся друг с другом счастливыми моментами этого важного дня и будем на связи!
          </p>
          <button>
            <a href="https://t.me/+ezhgFca9kw5lMmVi">
              ВСТУПИТЬ
            </a>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Photo