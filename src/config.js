import { gql } from '@apollo/client';

// Query to fetch categories
export const GET_CATEGORIES = gql`
  query {
    categories(first: 20) {
      edges {
        node {
          id
          name
        }
      }
    }
  }
`;


export const GET_PRODUCTS_BY_CATEGORY = gql`
query GetProductsByCategory($categoryId: ID!) {
    category(id: $categoryId) {
      id
      products(first: 50, channel: "default-channel") {
        edges {
          node {
            id
            name
            description
            images {
              id
              url
            }
          }
        }
      }
    }
  }
  
`;

// Your other queries can be defined here as well
