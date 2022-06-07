import {gql} from '@apollo/client';

export const GET_TOURNAMENT_QUERY = gql`
  query getTournament($slug: String!) {
    tournament: getTournament(slug: $slug) {
      _key
      name
      slug
      years {
        _key
        year
        name
        end
        start
        events {
          notes
          start
          descr
          end
        }
        scoring {
          events {
            name
            date
            teetimes
            leaderboard
          }
          type
        }
      }
    }
  }
`;
