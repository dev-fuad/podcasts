/**
 * podcasts
 * _layout.tsx
 * created: 17/01/2026
 * Fuad Mohd. Firoz
 *
 * @format
 */

import { Stack } from "expo-router";
import { useResolveClassNames } from "uniwind";

const Layout = () => {
  const headerTitleStyle = useResolveClassNames("text-blue-900");
  return (
    <Stack screenOptions={{ headerTitleStyle }}>
      <Stack.Screen name="index" options={{ title: "Search" }} />
      <Stack.Screen name="details/[id]" options={{ title: "" }} />
    </Stack>
  );
};

export default Layout;
