import React from "react";
import { GiFlowerEmblem } from "react-icons/gi";

const CalendarPage = () => {
  // September айының күндері
  const days = ["Дүй", "Сей", "Сәр", "Бей", "Жұм", "Сен", "Жек"];
  const weeks = [
    ["1", "2", "3", "4", "5", "6", "7"],
    ["8", "9", "10", "11", "12", "13", "14"],
    ["15", "16", "17", "18", "19", "20", "21"],
    ["22", "23", "24", "25", "26", "27", "28"],
    ["29", "30", "", "", "", "", ""],
  ];

  return (
    <div className="relative min-h-screen bg-white overflow-hidden px-4">
      <div className="flex items-center justify-center min-h-screen">
        <div className="max-w-2xl w-full space-y-8 text-center py-16">
          <h2 className="text-4xl mb-8 text-gray-800 font-bold">
            Той салтанаты:
          </h2>

          <h3 className="text-3xl mb-8 text-gray-800 font-semibold">
            6 қыркүйек 2025 жыл
          </h3>

          <div className="max-w-md mx-auto bg-white/90 rounded-3xl p-6 shadow-xl border border-gray-200">
            {/* Calendar header with days */}
            <div className="grid grid-cols-7 gap-2 mb-6">
              {days.map((day) => (
                <div
                  key={day}
                  className="text-gray-800 text-base font-bold py-2 px-1 bg-gray-100 rounded-lg shadow-sm"
                >
                  {day}
                </div>
              ))}
            </div>

            {/* Calendar dates */}
            {weeks.map((week, weekIndex) => (
              <div key={weekIndex} className="grid grid-cols-7 gap-2 mb-3">
                {week.map((date, dateIndex) => (
                  <div
                    key={`${weekIndex}-${dateIndex}`}
                    className="h-10 flex items-center justify-center relative"
                  >
                    {date ? (
                      date === "6" ? (
                        <div className="flex items-center justify-center">
                          <div className="relative flex items-center justify-center w-16 h-16">
                            <div className="absolute inset-0 bg-gradient-to-br from-pink-200 via-rose-300 to-pink-400 rounded-full shadow-lg"></div>
                            <GiFlowerEmblem className="absolute inset-0 w-full h-full text-rose-500/60 drop-shadow-lg" />
                            <span className="relative z-10 text-2xl font-bold text-white drop-shadow-lg">
                              6
                            </span>
                          </div>
                        </div>
                      ) : (
                        <span className="text-gray-700 text-base font-medium hover:bg-gray-100 w-full h-full flex items-center justify-center rounded">
                          {date}
                        </span>
                      )
                    ) : null}
                  </div>
                ))}
              </div>
            ))}
          </div>

          <div className="text-2xl mt-8 text-gray-800 font-semibold">
            Сағат 10:00 - де басталады
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarPage;
