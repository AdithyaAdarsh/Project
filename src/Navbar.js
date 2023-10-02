import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_CATEGORIES } from './config';
import './Navbar.css'; // Import the CSS file
import logo from './tg.png'; // Import the image
import Products from './Product'; // Import the Products component

function App() {
  const { loading, error, data } = useQuery(GET_CATEGORIES);
  const [selectedCategory, setSelectedCategory] = useState(null);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const categories = data.categories?.edges || [];

  const handleCategoryClick = (categoryId) => {
    setSelectedCategory(categoryId);
    console.log('Selected Category ID:', categoryId);
  };
  
  return (
    <div>
      <div className="navbar">
        <img src={logo} alt="Logo" className="logo" />
        <ul className="category-list">
          {categories.map((category) => (
            <li
              key={category.node.id}
              className={`category-item ${
                selectedCategory === category.node.id ? 'active' : ''
              }`}
              onClick={() => handleCategoryClick(category.node.id)}
            >
              {category.node.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="content">
        {selectedCategory && <Products categoryId={selectedCategory} />}
      </div>
    </div>
  );
}

export default App;
