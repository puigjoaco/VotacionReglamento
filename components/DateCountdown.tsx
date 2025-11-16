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
      <div className="bg-red-900/50 border border-red-500/30 rounded-xl p-6 text-center backdrop-blur-sm">
        <p className="text-red-300 font-semibold text-lg">
          El plazo para comentar ha finalizado
        </p>
        <p className="text-red-400/80 text-sm mt-2">
          Fecha límite: 25 de diciembre de 2025
        </p>
      </div>
    );
  }

  return (
    <div className="bg-slate-800/80 border border-slate-700/50 rounded-xl p-6 text-center backdrop-blur-sm">
      <h3 className="text-base font-medium text-slate-300 mb-4">Tiempo restante para comentar</h3>
      <div className="flex justify-center gap-3">
        <div className="bg-blue-600/20 border border-blue-500/30 rounded-lg p-3 min-w-[70px]">
          <div className="text-2xl font-bold text-blue-400">{timeLeft.days}</div>
          <div className="text-xs text-blue-300/80">días</div>
        </div>
        <div className="bg-blue-600/20 border border-blue-500/30 rounded-lg p-3 min-w-[70px]">
          <div className="text-2xl font-bold text-blue-400">{timeLeft.hours}</div>
          <div className="text-xs text-blue-300/80">horas</div>
        </div>
        <div className="bg-blue-600/20 border border-blue-500/30 rounded-lg p-3 min-w-[70px]">
          <div className="text-2xl font-bold text-blue-400">{timeLeft.minutes}</div>
          <div className="text-xs text-blue-300/80">minutos</div>
        </div>
      </div>
      <p className="text-xs mt-4 text-slate-400">Hasta el 25 de diciembre de 2025</p>
    </div>
  );
}
