import {gql} from '@apollo/client';

export const GET_CHAMPIONS_QUERY = gql`
  query getChampions($tkey: ID!) {
    champions: getChampions(tkey: $tkey) {
      firstName
      lastName
      year
      walkerCup
    }
  }
`;
