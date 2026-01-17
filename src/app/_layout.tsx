/**
 * podcasts
 * _layout.tsx
 * created: 16/01/2026
 * Fuad Mohd. Firoz
 *
 * @format
 */

import { ApolloProvider } from "@apollo/client/react";
import { Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Uniwind } from "uniwind";
import "../global.css";
import { apolloClient } from "@/graphql/client";

// Enable system theme (adaptive themes)
Uniwind.setTheme("system");

export default function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <Slot />
      <StatusBar style="auto" />
    </ApolloProvider>
  );
}
