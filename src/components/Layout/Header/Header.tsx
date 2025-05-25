"use client";
import { useEffect, useRef, useState } from "react";
import scss from "./Header.module.scss";

const Header = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [showHint, setShowHint] = useState(true);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    const handleUserInteraction = () => {
      if (!hasInteracted && audioRef.current) {
        audioRef.current.volume = 0.2;
        audioRef.current.play().catch((error) => {
          console.error("Не удалось воспроизвести аудио:", error);
        });
        setHasInteracted(true);
        setShowHint(false);
        // Удаляем только после первого взаимодействия
        document.removeEventListener("click", handleUserInteraction);
        document.removeEventListener("touchstart", handleUserInteraction);
      }
    };

    // Добавляем обработчики для разных типов взаимодействий
    document.addEventListener("click", handleUserInteraction);
    document.addEventListener("touchstart", handleUserInteraction);

    return () => {
      document.removeEventListener("click", handleUserInteraction);
      document.removeEventListener("touchstart", handleUserInteraction);
    };
  }, [hasInteracted]);

  return (
    <header className={scss.Header}>
      <div className="container">
        <div className={scss.content}>
          {showHint && (
            <div className={scss.modalOverlay}>
              <div className={scss.modalContent}>
                <p>Нажмите где угодно, чтобы запустить музыку 🎵</p>
              </div>
            </div>
          )}

          {/* Убрали autoPlay - он бесполезен без пользовательского взаимодействия */}
          <audio ref={audioRef} loop>
            <source src="/audio/videoplayback.mp3" type="audio/mpeg" />
            Ваш браузер не поддерживает аудио.
          </audio>
        </div>
      </div>
    </header>
  );
};

export default Header;