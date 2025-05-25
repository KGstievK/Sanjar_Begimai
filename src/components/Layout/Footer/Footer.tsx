"use client";
import scss from './Footer.module.scss'
import { useEffect, useRef, useState } from "react";
const Footer = () => {

   const audioRef = useRef<HTMLAudioElement>(null);
    const [showHint, setShowHint] = useState(true);
  
    useEffect(() => {
      const handleUserInteraction = () => {
        if (audioRef.current) {
          audioRef.current.volume = 0.2;
          audioRef.current.play().catch((error) => {
            console.log("Не удалось воспроизвести аудио:", error);
          });
        }
        setShowHint(false); // скрываем подсказку
        document.removeEventListener("click", handleUserInteraction);
      };
  
      document.addEventListener("click", handleUserInteraction);
  
      return () => {
        document.removeEventListener("click", handleUserInteraction);
      };
    }, []);

  return (
    <footer className={scss.Footer}>
      <div className="container">
        <div className={scss.content}>
          {showHint && (
            <div className={scss.modalOverlay}>
              <div className={scss.modalContent}>
                <p>Нажмите где угодно, чтобы запустить музыку 🎵</p>
              </div>
            </div>
          )}

          <audio ref={audioRef} loop>
            <source src="/public/audio/videoplayback.mp3" type="audio/mpeg" />
            <source src="/public/audio/videoplayback.ogg" type="audio/ogg" />
            Ваш браузер не поддерживает аудио.
          </audio>
        </div>
      </div>
    </footer>
  )
}

export default Footer