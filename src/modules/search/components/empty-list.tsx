/**
 * podcasts
 * empty-list.tsx
 * created: 17/01/2026
 * Fuad Mohd. Firoz
 *
 * @format
 */

import { Text, View } from "react-native";

const EmptyList = ({
  searched,
  loading,
}: {
  searched: boolean;
  loading: boolean;
}) => {
  if (loading) {
    return undefined;
  }

  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-gray-500">
        {searched ? "No podcasts found" : "Search for a podcast"}
      </Text>
    </View>
  );
};

export default EmptyList;
