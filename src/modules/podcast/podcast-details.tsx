/**
 * podcasts
 * podcast-details.tsx
 * created: 17/01/2026
 * Fuad Mohd. Firoz
 *
 * @format
 */

import { FlatList, Text, View } from "react-native";
import { Podcast } from "@/types/__generated__/graphql";
import DetailsHeader from "./components/details-header";
import EpisodeItem from "./components/episode-item";

type PodcastDetailsScreenProps = {
  podcast: Podcast;
};

const PodcastDetailsScreen = ({ podcast }: PodcastDetailsScreenProps) => {
  return (
    <View className="flex-1 bg-white dark:bg-slate-900">
      <FlatList
        data={[
          {
            id: "1",
            title: "Episode 1",
            description: "Description 1",
            date: "Date 1",
          },
          {
            id: "2",
            title: "Episode 2",
            description: "Description 2",
            date: "Date 2",
          },
        ]}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={<DetailsHeader podcast={podcast} />}
        ItemSeparatorComponent={() => (
          <View className="h-px bg-gray-200 dark:bg-gray-800 mx-3" />
        )}
        renderItem={({ item }) => <EpisodeItem />}
      />
    </View>
  );
};

export default PodcastDetailsScreen;
