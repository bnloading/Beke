import React, { useState, useEffect } from "react";

const CountdownTimer = () => {
  const calculateTimeLeft = () => {
    const targetDate = new Date("2025-09-06T17:00:00+06:00");
    const now = new Date();
    const difference = targetDate - now;

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const TimeUnit = ({ value, label }) => (
    <div className="text-center">
      <div className="text-5xl font-semibold mb-2 text-black">
        {String(value).padStart(2, "0")}
      </div>
      <div className="text-lg text-gray-600">{label}</div>
    </div>
  );

  return (
    <div className="relative min-h-screen bg-white overflow-hidden px-4">
      <div className="flex items-center justify-center min-h-screen">
        <div className="max-w-4xl w-full space-y-12 text-center py-16">
          <h2 className="text-3xl text-black mb-12">Той салтанатына дейін:</h2>

          <div className="grid grid-cols-4 gap-8 max-w-2xl mx-auto">
            <TimeUnit value={timeLeft.days} label="күн" />
            <TimeUnit value={timeLeft.hours} label="сағат" />
            <TimeUnit value={timeLeft.minutes} label="минут" />
            <TimeUnit value={timeLeft.seconds} label="секунд" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
