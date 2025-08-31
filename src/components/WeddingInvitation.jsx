import React from "react";
import { weddingData } from "../constants/weddingData";
import PoemPage from "./PoemPage";
import MusicPlayer from "./MusicPlayer";
import ComponentSeparator from "./ComponentSeparator";

const WeddingInvitation = () => {
  const { brideInfo } = weddingData;

  return (
    <div className="relative">
      {/* Desktop Warning */}
      <div className="hidden lg:flex fixed inset-0 bg-black/90 z-50 items-center justify-center">
        <div className="text-white text-center p-6">
          <h2 className="text-3xl font-semibold mb-4">Ескерту!</h2>
          <p className="text-2xl">Тек ғана телефон немесе таблеттен көріңіз</p>
        </div>
      </div>

      {/* Mobile/Tablet View */}
      <div className="lg:hidden">
        {/* First Page */}
        <div
          className="min-h-screen flex flex-col justify-end pb-4 relative"
          style={{
            backgroundImage: 'url("/image/Beke2.jpg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* Gradient overlay to make text more visible */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20"></div>

          <div className="text-center px-6 mt-36 relative z-10">
            <h1
              className="font-3 text-6xl text-white mb-2 drop-shadow-2xl font-bold"
              style={{
                fontFamily: "KZRosaMarena",
                textShadow:
                  "2px 2px 8px rgba(0,0,0,0.8), 0 0 20px rgba(0,0,0,0.6)",
              }}
            >
              {brideInfo.name}
            </h1>
            <h1
              className="font-3 text-3xl text-white mb-4 drop-shadow-2xl font-semibold"
              style={{
                fontFamily: "KZRosaMarena",
                textShadow:
                  "1px 1px 6px rgba(0,0,0,0.8), 0 0 15px rgba(0,0,0,0.6)",
              }}
            >
              Қыз ұзату
            </h1>

            <div className="flex items-center gap-4 justify-center mb-6">
              <div className="h-[1px] w-20 bg-white/80"></div>
              <span className="text-white text-2xl drop-shadow">❈</span>
              <div className="h-[1px] w-20 bg-white/80"></div>
            </div>
          </div>
        </div>

        {/* Music Player */}
        <MusicPlayer />
        <ComponentSeparator />
        {/* Poem Page */}
        <PoemPage />
      </div>
    </div>
  );
};

export default WeddingInvitation;
