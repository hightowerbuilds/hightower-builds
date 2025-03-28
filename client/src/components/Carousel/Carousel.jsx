import './Carousel.css';
import { useState } from 'react';

export default function Carousel({
  photoZero,
  photoOne,
  photoTwo,
  photoThree,
  photoZeroA,
  photoOneA,
  photoTwoA,
  photoThreeA,
  photoZeroB,
  photoOneB,
  photoTwoB,
  photoThreeB,
  photoZeroC,
  photoOneC,
  photoTwoC,
  photoThreeC,
  firstItem,
  secondItem,
  thirdItem,
  fourthItem,
}) {
  const [index, setIndex] = useState(0);
  const [item, setItem] = useState(0);

  const stageHolder = [
    [photoZero, photoOne, photoTwo, photoThree],
    [photoZeroA, photoOneA, photoTwoA, photoThreeA],
    [photoZeroB, photoOneB, photoTwoB, photoThreeB],
    [photoZeroC, photoOneC, photoTwoC, photoThreeC],
  ];

  const handlePrev = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? stageHolder[item].length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setIndex((prevIndex) =>
      prevIndex === stageHolder[item].length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div>
      <div>
        <div className="imagesBlueArrow">
          <img src={stageHolder[item][index]} className="imageMain"  />
          <button onClick={handlePrev} style={{ marginLeft: '50%' }}>
            {'<<<'}
          </button>
          <button onClick={handleNext}>{'>>>'}</button>
          <button style={{ marginLeft: '90%', marginBottom: '2%', height: '30px' }}>
            buy this
          </button>

          <div className="imageSubBank">
            {stageHolder[item].map((subImage, subIndex) => (
              <img
                key={subIndex}
                src={subImage}
                className="subImageA"
                alt={`Carousel Sub ${subIndex}`}
              />
            ))}
          </div>
        </div>

        <div className="interiorBlueArrow">
          <p className="carouselItem" onClick={() => setItem(0)}>
            {firstItem}
          </p>
          <p className="carouselItem" onClick={() => setItem(1)}>
            {secondItem}
          </p>
          <p className="carouselItem" onClick={() => setItem(2)}>
            {thirdItem}
          </p>
          <p className="carouselItem" onClick={() => setItem(3)}>
            {fourthItem}
          </p>
        </div>
      </div>
    </div>
  );
}