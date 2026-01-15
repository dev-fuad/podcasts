/**
 * podcasts
 * _layout.tsx
 * created: 16/01/2026
 * Fuad Mohd. Firoz
 *
 * @format
 */

import { Slot } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import '../global.css';
import { Uniwind } from 'uniwind'

// Enable system theme (adaptive themes)
Uniwind.setTheme('system')

export default function App() {
  return (
    <View className="flex-1 bg-gray-100 dark:bg-slate-900 items-center justify-center">
      <Slot />
      <StatusBar style="auto" />
    </View>
  );
}
