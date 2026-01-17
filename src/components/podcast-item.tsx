/**
 * podcasts
 * podcast-item.tsx
 * created: 17/01/2026
 * Fuad Mohd. Firoz
 *
 * @format
 */

import { View, Text, Image } from "react-native";
import { PodcastItem as PodcastItemType } from "@/types/podcasts";

export type PodcastItemProps = {
  podcast: PodcastItemType;
};

const PodcastItem = ({ podcast }: PodcastItemProps) => {
  return (
    <View className="flex-row items-center gap-2 px-3 py-2">
      <Image
        src={podcast.image}
        className="bg-gray-200 dark:bg-gray-800 w-12 h-12 rounded-lg"
      />
      <View>
        <Text className="font-semibold">{podcast.title ?? podcast.author}</Text>
        <Text className="text-sm text-gray-500">{podcast.description}</Text>
        <Text className="text-sm text-blue-500">
          Episodes: {podcast.episodes}
        </Text>
      </View>
    </View>
  );
};

export default PodcastItem;
