import categories from '../Data/categories.json';
import { useDispatch, useSelector } from 'react-redux';
import { setSubCategory } from '../redux/actions/subCategoryActions';
import '../styles/SubCategories.scss';

function SubCategories() {
  const dispatch = useDispatch();
  const selectedCategory = useSelector(state => state.selectedCategory);
  const selectedSubCategory = useSelector(state => state.selectedSubCategory);
  const subCategories = categories.categories.filter(c => c.parent === selectedCategory);

  return (
    <div className="subcat-scroll">
      {subCategories.map(sub => (
        <button
          key={sub.id}
          onClick={() => dispatch(setSubCategory(sub.id))}
          className={`subcat-btn ${sub.id === selectedSubCategory ? 'selected' : ''}`}
        >
          {sub.name}
        </button>
      ))}
    </div>
  );
}

export default SubCategories;
