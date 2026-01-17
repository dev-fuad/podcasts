export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type FeedItem = {
  __typename: 'FeedItem';
  description: Scalars['String']['output'];
  duration: Scalars['String']['output'];
  image: Maybe<Scalars['String']['output']>;
  linkUrl: Scalars['String']['output'];
  pubDate: Scalars['String']['output'];
  subtitle: Scalars['String']['output'];
  summary: Scalars['String']['output'];
  text: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type Podcast = {
  __typename: 'Podcast';
  artist: Scalars['String']['output'];
  episodesCount: Scalars['Int']['output'];
  feedUrl: Scalars['String']['output'];
  genres: Array<Scalars['String']['output']>;
  podcastName: Scalars['String']['output'];
  thumbnail: Scalars['String']['output'];
};

export type Query = {
  __typename: 'Query';
  feed: Array<FeedItem>;
  search: Array<Podcast>;
};


export type QueryFeedArgs = {
  feedUrl: Scalars['String']['input'];
};


export type QuerySearchArgs = {
  term: Scalars['String']['input'];
};

export type SearchQueryQueryVariables = Exact<{
  query: Scalars['String']['input'];
}>;


export type SearchQueryQuery = { search: Array<{ __typename: 'Podcast', podcastName: string, artist: string, episodesCount: number, feedUrl: string, genres: Array<string>, thumbnail: string }> };
