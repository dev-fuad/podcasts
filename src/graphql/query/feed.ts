import { gql } from "graphql-request";

export const feedQuery = gql`
  query FeedQuery($feedUrl: String!) {
    feed(feedUrl: $feedUrl) {
      description
      duration
      image
      linkUrl
      pubDate
      subtitle
      summary
      text
      title
    }
  }
`;
