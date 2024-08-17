import React from 'react';
import { useParams } from 'react-router-dom';
import itemsData from '../Home/itemsData'; // Ensure this path is correct
import TShirtCustomizer from './TShirtCustomizer'; // Ensure this path is correct

const CustomizerPage = () => {
  const { id } = useParams();

  const item = itemsData.find(item => item.id === id);
  console.log("item data by id -----------", item)

  if (!item) {
    return <div>Item not found</div>; // Handle item not found
  }

  return (
    <TShirtCustomizer
      modelPath={item.modelPath}
      materials={item.materials}
      scale={item.scale} 
      fov={item.fov}
    />
  );
};

export default CustomizerPage;
