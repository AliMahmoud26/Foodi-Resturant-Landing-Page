import CategoryImage1 from '../../assets/images/pngwing1.png';
import CategoryImage2 from '../../assets/images/pngwing2.png';
import CategoryImage3 from '../../assets/images/pngwing3.png';
import CategoryImage4 from '../../assets/images/pngwing4.png';

const Categories = () => {
  return (
    <section className="categories">
        <div className="special-heading">
          <span className='component-name'>Customer Favorites</span>
          <h1 className='component-description'>Popular Catagories</h1>
        </div>
      <div className="container">
        <div className="categories-container">
          <div className="category-item">
            <img src={CategoryImage1} alt="Category Image" />
            <h3>Main Dish</h3>
            <span>(86 dishes)</span>
          </div>
          <div className="category-item">
            <img src={CategoryImage2} alt="Category Image" />
            <h3>Break Fast</h3>
            <span>(12 break fast)</span>
          </div>
          <div className="category-item">
            <img src={CategoryImage3} alt="Category Image" />
            <h3>Dessert</h3>
            <span>(48 dessert)</span>
          </div>
          <div className="category-item">
            <img src={CategoryImage4} alt="Category Image" />
            <h3>Browse All</h3>
            <span>(255 Items)</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Categories