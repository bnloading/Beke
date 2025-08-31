import React from "react";
import WeddingInvitation from "./components/WeddingInvitation";
import PoemPage from "./components/PoemPage";
import InvitationPage from "./components/InvitationPage";
import CalendarPage from "./components/CalendarPage";
import LocationPage from "./components/LocationPage";
import ComponentSeparator from "./components/ComponentSeparator";
import CountdownTimer from "./components/CountdownTimer";
import LocationDetails from "./components/LocationDetails";
import Gallery from "./components/Gallery";

const App = () => {
  return (
    <div className="relative">
      <WeddingInvitation />
      <ComponentSeparator />

      <InvitationPage />
      <ComponentSeparator />

      <Gallery />
      <ComponentSeparator />

      <CalendarPage />
      <ComponentSeparator />

      <LocationPage />
      <ComponentSeparator />

      <CountdownTimer />
      <ComponentSeparator />

      <LocationDetails />
    </div>
  );
};

export default App;
