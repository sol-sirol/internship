import { gql } from "@apollo/client";

export const UPDATE_RESERVES = gql`
  mutation ($id: String, $entity: BookingInput!) {
    booking(id: $id) {
      update(entity: $entity) {
        status
        message
        entity {
          id
          name
          persons
        }
        entity_id
      }
    }
  }
`;
