import { useEffect, useState } from "react";
import {
  plus,
  shuffleIcon,
  iconX,
  refresh,
  star,
  gift,
  arrowRight,
  snowFlake,
} from "./utils/Icons";
import "./App.css";
import ElfCard from "./components/ElfCard";
import Header from "./components/Header";
import { useLocalData } from "./utils/Hooks";
import Listing from "./components/Listing";
import Shuffled from "./components/Shuffled";
import Revelation from "./components/Revelation";
import End from "./components/End";

function App() {
  // Pairs
  const [elves, setElves] = useLocalData("elves");
  const [shuffledPairs, setShuffledPairs] = useLocalData("pairs");
  const [currElfIdx, setCurrElfIdx] = useState(0);

  // Display elf pair
  const [isElfOpen, setElfOpen] = useState(false);

  // Flow
  const [currFlow, setCurrFlow] = useState(() => {
    const savedFlow = localStorage.getItem("currFlow");
    return savedFlow ? savedFlow : "listing-screen";
  });

  // Shuffles pairs and goes to next screen
  const raffle = (members) => {
    const pairs = {};
    if (!members || members.length < 3) {
      console.log("insuficientes");
      return;
    } else {
      let shuffled;
      do {
        shuffled = [...members].sort(() => Math.random() - 0.5);
      } while (shuffled.some((item, i) => item === members[i]));
      for (let i = 0; i < members.length; i++) {
        pairs[members[i]] = shuffled[i];
      }
      setShuffledPairs(pairs);
      localStorage.setItem("pairs", JSON.stringify(pairs));
      setCurrFlow("shuffled-screen");
      return pairs;
    }
  };

  // Handles screen flow
  const handleFlow = (screenId) => {
    let screens = document.getElementsByClassName("screen");
    let currScreen = document.getElementById(screenId);

    Array.from(screens).forEach((screen) => {
      if (screen === currScreen) {
        screen.classList.remove("hidden!");
        if (screenId === "listing-screen") {
          document
            .getElementById("listing-screen-header")
            .classList.remove("hidden!");
        }
      } else {
        if (!screen.classList.contains("hidden!"))
          screen.classList.add("hidden!");
      }
    });
  };

  // Adds data do local storage
  useEffect(() => {
    localStorage.setItem("elves", JSON.stringify(elves));
  }, [elves]);
  useEffect(() => {
    localStorage.setItem("pairs", JSON.stringify(shuffledPairs));
  }, [shuffledPairs]);
  useEffect(() => {
    localStorage.setItem("currFlow", currFlow);
    handleFlow(currFlow);
  }, [currFlow]);

  // Handles add elf to list
  const handleAddElf = () => {
    let elfInputField = document.getElementById("elf-name-input");
    let newElf = elfInputField.value;
    if (!newElf) {
      return;
    }
    let stored = localStorage.getItem("elves");
    let existingElves = stored ? JSON.parse(stored) : [];
    if (existingElves.includes(newElf)) {
      return;
    }

    setElves((elves) => [...elves, elfInputField.value.trim()]);
  };

  // Handles remove elf from list
  const handleRemoveElf = (elf) => {
    let stored = localStorage.getItem("elves");
    let existingElves = stored ? JSON.parse(stored) : [];
    if (!existingElves.includes(elf)) {
      return;
    }
    let filtered = existingElves.filter(
      (untargetedElf) => untargetedElf !== elf
    );
    setElves(filtered);
  };

  // Resets storage and states
  const handleReset = () => {
    if (elves) setElves([]);
    if (shuffledPairs) setShuffledPairs([]);
  };

  return (
    <>
      <Header />
      <main className="h-full">
        <Listing
          elves={elves}
          handleAddElf={handleAddElf}
          handleRemoveElf={handleRemoveElf}
          handleReset={handleReset}
          raffle={raffle}
        />
        <Shuffled setCurrFlow={setCurrFlow} />
        <Revelation
          elves={elves}
          currElfIdx={currElfIdx}
          shuffledPairs={shuffledPairs}
          isElfOpen={isElfOpen}
          setCurrElfIdx={setCurrElfIdx}
          setElfOpen={setElfOpen}
          setCurrFlow={setCurrFlow}
        />
        <End setCurrFlow={setCurrFlow} handleReset={handleReset} />
      </main>
    </>
  );
}

export default App;
