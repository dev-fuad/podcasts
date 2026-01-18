/**
 * podcasts
 * details-header.tsx
 * created: 18/01/2026
 * Fuad Mohd. Firoz
 *
 * @format
 */

import Ionicons from "@expo/vector-icons/Ionicons";
import { Image, Pressable, Text, View } from "react-native";
import { Podcast } from "@/types/__generated__/graphql";
import { useCSSVariable } from "uniwind";

const DetailsHeader = ({ podcast }: { podcast: Podcast }) => {
  const color = useCSSVariable("--color-gray-500") as string;
  return (
    <View>
      <View className="flex-row items-center gap-2 px-3 py-2">
        <Image
          source={{ uri: podcast.thumbnail }}
          defaultSource={require("../../../../assets/adaptive-icon.png")}
          className="w-24 h-24 bg-gray-200 dark:bg-gray-800 rounded-full"
        />
        <View className="flex-1">
          <Text className="text-lg font-semibold">{podcast.podcastName}</Text>
          <Text className="text-sm text-gray-500">{podcast.artist}</Text>
          <Text className="text-sm text-blue-800">Subscribe</Text>
        </View>
      </View>
      <Pressable className="flex-row items-center gap-2 px-3 py-2">
        <Ionicons name="play-outline" size={24} color={color} />
        <View>
          <Text className="font-semibold text-gray-500">Play Last Episode</Text>
          <Text className="text-xs text-blue-800">#100 - Episode Title</Text>
        </View>
      </Pressable>
      <Text className="px-3 py-2 text-lg font-semibold">Episodes</Text>
    </View>
  );
};

export default DetailsHeader;
