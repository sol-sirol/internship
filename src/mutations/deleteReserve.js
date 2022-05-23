import { gql } from "@apollo/client";

export const DELETE_RESERVES = gql`
  mutation ($id: String) {
    booking(id: $id) {
      delete {
        status
      }
    }
  }
`;
