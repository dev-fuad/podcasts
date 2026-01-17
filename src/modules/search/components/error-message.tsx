/**
 * podcasts
 * error-message.tsx
 * created: 17/01/2026
 * Fuad Mohd. Firoz
 *
 * @format
 */

import { Text, View } from "react-native";

const ErrorMessage = ({ error }: { error?: string }) => {
  if (!error) {
    return undefined;
  }

  return (
    <View className="p-2 bg-red-500">
      <Text className="text-sm text-white">{error}</Text>
    </View>
  );
};

export default ErrorMessage;
