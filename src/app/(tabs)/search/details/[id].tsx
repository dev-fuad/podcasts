/**
 * podcasts
 * (id).tsx
 * created: 17/01/2026
 * Fuad Mohd. Firoz
 *
 * @format
 */

import { useLocalSearchParams } from "expo-router";
import PodcastDetailsScreen from "@/modules/podcast/podcast-details";
import { Podcast } from "@/types/__generated__/graphql";

const DummyPodcast: Podcast = {
  podcastName: "A Very Long Podcast Name That Will Not Fit In The Screen",
  artist: "Artist",
  episodesCount: 10,
  feedUrl: "https://example.com/feed",
  genres: ["Genre 1", "Genre 2"],
};

const Details = () => {
  // const {podcast} = useLocalSearchParams();
  return <PodcastDetailsScreen podcast={DummyPodcast} />;
};

export default Details;
