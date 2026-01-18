/**
 * podcasts
 * podcast-item.tsx
 * created: 17/01/2026
 * Fuad Mohd. Firoz
 *
 * @format
 */

import { Link } from "expo-router";
import { View, Text, Image } from "react-native";
import { Podcast } from "@/types/__generated__/graphql";

export type PodcastItemProps = {
  podcast: Podcast;
};

const PodcastItem = ({ podcast }: PodcastItemProps) => {
  return (
    <View className="flex-row items-center gap-2 px-3 py-2">
      <Image
        src={podcast.thumbnail}
        className="bg-gray-200 dark:bg-gray-800 w-12 h-12 rounded-lg"
      />
      <View className="flex-1">
        <Text className="font-semibold" numberOfLines={1}>
          {podcast.podcastName}
        </Text>
        <Text className="text-xs text-gray-500" numberOfLines={1}>
          {podcast.artist}
        </Text>
        <Link
          href={{
            pathname: "/search/details/[id]",
            params: { id: podcast.feedUrl },
          }}
        >
          <Text className="text-xs text-blue-800">
            Episodes: {podcast.episodesCount}
          </Text>
        </Link>
      </View>
    </View>
  );
};

export default PodcastItem;
