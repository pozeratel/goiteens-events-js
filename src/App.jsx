import { useState } from "react";
import { Title } from "./components/Title/Title.jsx";
import events from "./upcoming-events.json";
import "./App.css";
import { PageBoard } from "./components/PageBoard/PageBoard";

function App() {
  return (
    <>
      <PageBoard events={events} />
    </>
  );
}

export default App;
