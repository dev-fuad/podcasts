/**
 * podcasts
 * index.tsx
 * created: 17/01/2026
 * Fuad Mohd. Firoz
 *
 * @format
 */

import { ActivityIndicator, FlatList, Text, View } from "react-native";
import { useCSSVariable } from "uniwind";
import PodcastItem from "@/components/podcast-item";
import Input from "@/components/ui/input";
import { useState } from "react";
import { useLazyQuery } from "@apollo/client/react";
import { searchQuery } from "@/graphql/query/search";
import {
  SearchQueryQuery,
  SearchQueryQueryVariables,
} from "@/types/__generated__/graphql";

const SearchScreen = () => {
  const color = useCSSVariable("--color-indigo-900") as string;
  const [searchTerm, setSearchTerm] = useState("");
  const [search, { data, loading, error }] = useLazyQuery<
    SearchQueryQuery,
    SearchQueryQueryVariables
  >(searchQuery);

  const handleSearch = () => {
    search({ variables: { query: searchTerm } });
  };

  return (
    <View className="flex-1 bg-white dark:bg-slate-900">
      <Input
        autoFocus
        className="m-2"
        placeholder="Search Podcast"
        returnKeyType="search"
        value={searchTerm}
        onChangeText={setSearchTerm}
        onSubmitEditing={handleSearch}
      />
      <FlatList
        data={data?.search}
        keyExtractor={(item) => item.feedUrl}
        className="flex-1"
        contentContainerClassName="grow"
        renderItem={({ item }) => <PodcastItem podcast={item} />}
        ListEmptyComponent={
          loading
            ? undefined
            : () => (
                <View className="flex-1 items-center justify-center">
                  <Text className="text-gray-500">
                    {searchTerm.trim().length > 0
                      ? "No podcasts found"
                      : "Search for a podcast"}
                  </Text>
                </View>
              )
        }
        ListHeaderComponent={
          loading
            ? () => <ActivityIndicator color={color} className="mt-4" />
            : undefined
        }
        ItemSeparatorComponent={() => (
          <View className="h-px mx-2 bg-gray-200 dark:bg-gray-800" />
        )}
      />
      {error?.message && (
        <View className="p-2 bg-red-500">
          <Text className="text-sm text-white">{error?.message}</Text>
        </View>
      )}
    </View>
  );
};

export default SearchScreen;
