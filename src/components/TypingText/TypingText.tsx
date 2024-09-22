import React, { useEffect, useState } from "react";
import "./TypingText.css"; // Импортируем CSS файл

const TypingText = ({ text }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);
  const [isFinished, setIsFinished] = useState(false); // Новое состояние для отслеживания завершения

  useEffect(() => {
    const timer = setTimeout(
      () => {
        if (isDeleting) {
          setDisplayedText((prev) => prev.slice(0, -1));
          if (displayedText.length === 0) {
            setIsDeleting(false);
            setIndex(0); // Сброс индекса
            setIsFinished(true); // Устанавливаем флаг завершения
          }
        } else {
          setDisplayedText((prev) => text.slice(0, index + 1));
          if (index < text.length - 1) {
            setIndex((prev) => prev + 1);
          } else {
            setIsDeleting(true);
          }
        }
      },
      isDeleting ? 50 : 100
    ); // Задержка между символами

    return () => clearTimeout(timer);
  }, [displayedText, index, isDeleting, text]);

  // Запускаем анимацию заново, когда текст полностью стертый
  useEffect(() => {
    if (isFinished) {
      const resetTimer = setTimeout(() => {
        setDisplayedText("");
        setIsFinished(false); // Сбрасываем флаг завершения
      }, 1000); // Задержка перед началом новой анимации

      return () => clearTimeout(resetTimer);
    }
  }, [isFinished]);

  return (
    <div className="typing-container">
      <span>{displayedText}</span>
      <span className="cursor"></span>
    </div>
  );
};

export default TypingText;
