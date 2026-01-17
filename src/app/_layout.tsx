/**
 * podcasts
 * _layout.tsx
 * created: 16/01/2026
 * Fuad Mohd. Firoz
 *
 * @format
 */

import { Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Uniwind } from "uniwind";
import "../global.css";

// Enable system theme (adaptive themes)
Uniwind.setTheme("system");

export default function App() {
  return (
    <>
      <Slot />
      <StatusBar style="auto" />
    </>
  );
}
