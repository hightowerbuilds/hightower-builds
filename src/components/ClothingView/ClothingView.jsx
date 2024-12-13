
import './ClothingView.css'

export default function ClothingView(props) {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
        
        <div>
            <strong className='itemTitle'>sweatshirt</strong>
            <img src={props.sweatshirt}  className='sweatshirt' />
        </div>
     
          <div className='imgContainerClothingView'>
            <img src={props.imgOne} className='imgOneClothingView' />
            <img src={props.imgTwo} className='imgOneClothingView' />
            <img src={props.imgThree} className='imgThreeClothingView'/>
          </div>

    </div>
  )
}
