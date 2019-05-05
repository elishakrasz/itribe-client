import React from 'react'
import ImageSlide from './ImageSlide';
import LeftArrow from './LeftArrow'
import RightArrow from './RightArrow'

// const imgUrls = ["../../../Igbo/Igbo Community of HaShem.jpg","../../../Pashtun/children.jpg"]

export class Carousel extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      images: [
        "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/aurora.jpg",
        "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/canyon.jpg",
        "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/city.jpg",
        "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/desert.jpg",
        "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/mountains.jpg",
        "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/redsky.jpg",
        "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/sandy-shores.jpg",
        "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/tree-of-life.jpg"
      ],
      currentIndex: 0
    }
  }
    goToPrevSlide = () => {

    }
  
    goToNextSlide = () => {
      this.setState(prevState => ({
        currentIndex: prevState.currentIndex + 1
      }));
  }
  
  render() {
    return (
      <div className="slider">
      {
          this.state.images.map((image, i) => (
            <ImageSlide key={i} image={image} />
          ))
        }
      
  <LeftArrow 
         goToPrevSlide={this.goToPrevSlide}
        />
        <RightArrow 
         goToNextSlide={this.goToNextSlide}    
        />
      </div>
    );
  }
}