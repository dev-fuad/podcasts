/**
 * podcasts
 * episode-item.tsx
 * created: 18/01/2026
 * Fuad Mohd. Firoz
 *
 * @format
 */

import { Text, View } from "react-native";

const EpisodeItem = () => {
  return (
    <View className="flex-1 px-3 py-2">
      <Text className="text-xs text-gray-500 uppercase">Friday</Text>
      <Text className="text-base font-semibold">Title</Text>
      <Text className="text-gray-500" numberOfLines={2}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus quo
        odit esse minus praesentium facilis eligendi porro ullam repellendus
        perspiciatis tempore a dolor optio officia enim explicabo, voluptate
        iusto nesciunt!
      </Text>
      <Text className="text-xs text-gray-500">2hr and 30 mins</Text>
    </View>
  );
};

export default EpisodeItem;
