/**
 * podcasts
 * index.tsx
 * created: 17/01/2026
 * Fuad Mohd. Firoz
 *
 * @format
 */

import { FlatList, View } from "react-native";
import PodcastItem from "@/components/podcast-item";
import Input from "@/components/ui/input";
import { searchResults } from "@/data/DummyData";

const SearchScreen = () => {
  return (
    <View className="flex-1 bg-white dark:bg-slate-900">
      <Input
        autoFocus
        className="m-2"
        placeholder="Search Podcast"
        returnKeyType="search"
      />
      <FlatList
        data={searchResults}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <PodcastItem podcast={item} />}
        ItemSeparatorComponent={() => (
          <View className="h-px mx-2 bg-gray-200 dark:bg-gray-800" />
        )}
      />
    </View>
  );
};

export default SearchScreen;
