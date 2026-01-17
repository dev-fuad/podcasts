import { gql } from "@apollo/client";

export const searchQuery = gql`
  query searchQuery($query: String!) {
    search(term: $query) {
      podcastName
      artist
      episodesCount
      feedUrl
      genres
      thumbnail
    }
  }
`;
