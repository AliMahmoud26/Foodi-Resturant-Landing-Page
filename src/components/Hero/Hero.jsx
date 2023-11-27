import HeroImage from '../../assets/images/Intersect.png';
import MaskGroup1 from '../../assets/images/Mask group1.png';
import MaskGroup2 from '../../assets/images/Mask group2.png';
import { FaBars, FaDollarSign, FaPepperHot, FaPlay, FaRegStar, FaStar, FaStarAndCrescent, FaStarOfDavid } from 'react-icons/fa';

const Hero = () => {

  const threeStarsIcons = Array(3).fill().map((_, index) => (
    <FaStar key={index} />
  ));

  const fourStarsIcons = Array(4).fill().map((_, index) => (
    <FaStar key={index} />
  ));

  return (
    <section className="hero">
      <div className="container">
        <div className="left-hero">
          <h1>Dive into Delights <br /> Of Delectable <span>Food</span></h1>
          <p>Where Each Plate Weaves a Story of Culinary <br /> Mastery and Passionate Craftsmanship</p>
          <div className="btns">
            <a href="#" className="btn">Order Now</a>
            <a href="#" className="btn transparent">Watch Video <FaPlay className='icon' size={50} /></a>
          </div>
        </div>
        <div className="right-hero">
          <div className="alt-text">
            <span>Hot spicy Food <FaPepperHot /></span>
          </div>

          <div className="hero-image">
            <img src={HeroImage} alt="Hero Image" />
          </div>

          <div className="mask-group">
            <div className="item">
              <img src={MaskGroup1} alt="Mask Group Image" />
              <div className="item-info">
                <h3>Spicy noodles</h3>
                <span className="threeStars">{threeStarsIcons}</span>
                <FaRegStar />
                <FaRegStar />
                <div className='price'>
                  <span><FaDollarSign className='icon' />18.00</span>
                </div>
              </div>
            </div>
            <div className="item">
              <img src={MaskGroup2} alt="Mask Group Image" />
              <div className="item-info">
                <h3>Vegetarian salad</h3>
                <span className='fourStars'>{fourStarsIcons}</span>
                <FaRegStar />
                <div className='price'>
                  <span><FaDollarSign className='icon' />23.00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero