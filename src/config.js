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
      products(first: 100, channel: "default-channel", sortBy: { field: RATING, direction: ASC }) {
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


export const GET_ALL_PRODUCTS = gql`
  query {
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
`;

// Your other queries can be defined here as well
