import { useEffect, useState } from "react";

const useCountdown = (date) => {
  const [day, setDay] = useState(0);
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);

  useEffect(() => {
    if (!date) {
      return;
    }

    const countdown = () => {
      const targetDate = new Date(date).getTime();
      const now = Date.now();

      const difference = targetDate - now;

      // Quando o evento chegar, mantém tudo em zero
      if (difference <= 0) {
        setDay(0);
        setHour(0);
        setMinute(0);
        setSecond(0);

        return;
      }

      const SECOND = 1000;
      const MINUTE = SECOND * 60;
      const HOUR = MINUTE * 60;
      const DAY = HOUR * 24;

      const days = Math.floor(difference / DAY);

      const hours = Math.floor((difference % DAY) / HOUR);

      const minutes = Math.floor((difference % HOUR) / MINUTE);

      const seconds = Math.floor((difference % MINUTE) / SECOND);

      setDay(days);
      setHour(hours);
      setMinute(minutes);
      setSecond(seconds);
    };

    // Executa imediatamente
    countdown();

    // Atualiza a cada segundo
    const intervalId = setInterval(countdown, 1000);

    // Limpa o interval quando a data mudar
    // ou o componente for desmontado
    return () => {
      clearInterval(intervalId);
    };
  }, [date]);

  return [day, hour, minute, second];
};

export default useCountdown;
