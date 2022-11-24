import { useState } from 'react';
import { AddCategory, GifGrid } from './components';
import './styles.css'; 

export const GeckoGifs = () => {
    const [categories, setCategories] = useState(['GIPHY']);

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) {
          return;  
        }
        
        setCategories([newCategory]);

    };

    return (
        <>
            <div className='header'>
              <img src="/images/GeckoGIFSlogo.png" alt="GeckoGIFSlogo" />  
            </div>
            <AddCategory onNewCategory={onAddCategory} />
             {categories.map((category) => (
                    <GifGrid key={category} category={category} />
                ))} 
        </>
    );
};