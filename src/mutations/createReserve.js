import { gql } from "@apollo/client";

export const CREATE_RESERVES = gql`
  mutation ($entity: BookingInput!) {
    booking {
      create(entity: $entity) {
        status
      }
    }
  }
`;
