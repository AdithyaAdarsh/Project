import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_PRODUCTS_BY_CATEGORY } from './config';
import './Products.css'; // Import your custom CSS for styling

function Products({ categoryId }) {
  const { loading, error, data } = useQuery(GET_PRODUCTS_BY_CATEGORY, {
    variables: { categoryId },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  if (data) {
    const products = data.category.products.edges;

    return (
      <div className="products-container">
        <ul className="product-list">
          {products.map(({ node }) => (
            <li key={node.id} className="product">
              <div className="product-image">
                <img src={node.images[0].url} alt={node.name} />
              </div>
              <div className="product-details">
                <h3>{node.name}</h3>
                {/* Display only the text from the description */}
                <p>{extractTextFromDescription(node.description)}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return null;
}

function extractTextFromDescription(description) {
  try {
    const data = JSON.parse(description);
    if (Array.isArray(data.blocks)) {
      const paragraphs = data.blocks.filter((block) => block.type === 'paragraph');
      const text = paragraphs.map((paragraph) => paragraph.data.text).join(' ');
      return text;
    }
  } catch (error) {
    console.error('Error extracting text from description:', error);
  }
  return 'Description not available';
}

export default Products;
