import categories from '../Data/categories.json';
import { useDispatch, useSelector } from 'react-redux';
import { setCategory } from '../redux/actions/categoryActions';
import { setSubCategory } from '../redux/actions/subCategoryActions';
import '../styles/Categories.scss';

function Categories() {
  const dispatch = useDispatch();
  const selectedCategory = useSelector(state => state.selectedCategory);
  const mainCategories = categories.categories.filter(c => c.parent === null);

  const handleCategoryClick = (catId) => {
    dispatch(setCategory(catId));

    const subCategories = categories.categories.filter(c => c.parent === catId);
    if (subCategories.length > 0) {
      dispatch(setSubCategory(subCategories[0].id));
    } else {
      dispatch(setSubCategory(null));
    }
  };

  return (
    <div className="categories">
      {mainCategories.map(cat => (
        <button 
          key={cat.id}
          onClick={() => handleCategoryClick(cat.id)}
          className={`category-btn ${cat.id === selectedCategory ? 'selected' : ''}`}
        >
          {cat.name}
        </button>
      ))}
    </div>
  );
}

export default Categories;
