import { gql } from "@apollo/client";

export const GET_RESERVES = gql`
  query GetReseres {
    bookings(page: 1, limit: 25) {
      data {
        id
        time
        name
        phone
        room
        persons
        date
      }
    }
  }
`;
