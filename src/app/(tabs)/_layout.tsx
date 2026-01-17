import { Tabs } from "expo-router";
import { useCSSVariable, useResolveClassNames } from "uniwind";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function Layout() {
  const color = useCSSVariable("--color-indigo-900") as string;
  const headerTitleStyle = useResolveClassNames("text-blue-900");
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: color,
        headerTitleStyle,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Podcasts",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="mic-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="library"
        options={{
          title: "Library",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="library-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="search-outline" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
