import { useState } from "react";

export default function Carousel(props) {

    const [ index, setIndex ] = useState(0);
    const [ item, setItem] = useState(0);

    const handlePrev = () => {
        setIndex((prevIndex) => (prevIndex === 0 ? stageHolder[item].length - 1 : prevIndex - 1));
      };
      
    const handleNext = () => {
        setIndex((prevIndex) => (prevIndex === stageHolder[item].length - 1 ? 0 : prevIndex + 1));
      };
      
    const stage = [props.photoZero, props.photoOne, props.photoTwo, props.photoThree]
    const stageA = [props.photoZeroA, props.photoOneA, props.photoTwoA, props.photoThreeA]
    const stageB = [props.photoZeroB, props.photoOneB, props.photoTwoB, props.photoThreeB]
    const stageC = [props.photoZeroC, props.photoOneC, props.photoTwoC, props.photoThreeC]

    const stageHolder = [ stage, stageA, stageB, stageC ]


  return (
    <div>

        <div>

            <div className='imagesBlueArrow'>
            <img src={stageHolder[item][index]} className='imageMain' />
            <button onClick={handlePrev} style={{marginLeft: '50%'}}>{'<<<'}</button>
            <button onClick={handleNext}>{'>>>'}</button>
            <button style={{marginLeft: '90%', marginBottom: '2%', height: '30px'}}>buy this </button>

            <div className='imageSubBank'>
                <img src={stageHolder[item][0]} className='subImageA'/>
                <img src={stageHolder[item][1]} className='subImageA' />
                <img src={stageHolder[item][2]} className='subImageA' />
                <img src={stageHolder[item][3]} className='subImageA' />
            </div>
            </div>

            <div className='interiorBlueArrow'>

            <p onClick={() => {setItem(0)}}>pants A</p>
            <p onClick={() => {setItem(1)}}>pants B</p>
            <p onClick={() => {setItem(2)}}>pants C</p>
            <p onClick={() => {setItem(3)}}>pants D</p>

            </div>

        </div> 

    </div>
  )
}
