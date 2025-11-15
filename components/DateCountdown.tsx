'use client';

import { useEffect, useState } from 'react';
import { differenceInDays, differenceInHours, differenceInMinutes } from 'date-fns';

const DEADLINE = new Date('2025-12-25T23:59:59-03:00');

export function DateCountdown() {
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
  } | null>(null);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();

      if (now > DEADLINE) {
        setTimeLeft(null);
        return;
      }

      const days = differenceInDays(DEADLINE, now);
      const hours = differenceInHours(DEADLINE, now) % 24;
      const minutes = differenceInMinutes(DEADLINE, now) % 60;

      setTimeLeft({ days, hours, minutes });
    };

    calculateTimeLeft();
    const interval = setInterval(calculateTimeLeft, 60000); // Actualizar cada minuto

    return () => clearInterval(interval);
  }, []);

  if (timeLeft === null) {
    return (
      <div className="bg-red-100 border border-red-300 rounded-lg p-4 text-center">
        <p className="text-red-800 font-semibold">
          El plazo para comentar ha finalizado
        </p>
        <p className="text-red-600 text-sm mt-1">
          Fecha límite: 25 de diciembre de 2025
        </p>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg p-6 text-center">
      <h3 className="text-lg font-semibold mb-4">Tiempo restante para comentar</h3>
      <div className="flex justify-center gap-4">
        <div className="bg-white/20 rounded-lg p-4 min-w-[80px]">
          <div className="text-3xl font-bold">{timeLeft.days}</div>
          <div className="text-sm opacity-90">días</div>
        </div>
        <div className="bg-white/20 rounded-lg p-4 min-w-[80px]">
          <div className="text-3xl font-bold">{timeLeft.hours}</div>
          <div className="text-sm opacity-90">horas</div>
        </div>
        <div className="bg-white/20 rounded-lg p-4 min-w-[80px]">
          <div className="text-3xl font-bold">{timeLeft.minutes}</div>
          <div className="text-sm opacity-90">minutos</div>
        </div>
      </div>
      <p className="text-sm mt-4 opacity-90">Hasta el 25 de diciembre de 2025</p>
    </div>
  );
}
