import PropTypes from 'prop-types'
import { useState } from 'react'
import { Carousel as ICarousel } from 'react-responsive-carousel'

function Carousel({ images }) {
  const [isHovered, setHovered] = useState(false)
  const renderArrowPrev = (clickHandler, hasPrev, label) => {
    return <button className="button previous is-rounded" onClick={clickHandler} aria-label={label} disabled={!hasPrev}>
            <span className="icon is-small">
              <i className="fas fa-caret-left"></i>
            </span>
          </button>
  }

  const renderArrowNext = (clickHandler, hasNext, label) => {
    return <button className="button next is-rounded" onClick={clickHandler} aria-label={label} disabled={!hasNext}>
            <span className="icon is-small">
              <i className="fas fa-caret-right"></i>
            </span>
          </button>
  }

  const handleHover = () => {
    setHovered(!isHovered)
  }

  return (
    <div onMouseEnter={handleHover} onMouseLeave={handleHover}>
      <ICarousel showArrows={true} autoFocus={true} showThumbs={false} showStatus={false} showIndicators={false} renderArrowPrev={renderArrowPrev} renderArrowNext={renderArrowNext} className={isHovered ? '' : 'hidden-controls'}>
        {images.map((image, index) => {
          return (
            <figure className="image" key={index}>
              <img src={image} />
            </figure>
          )
        })}
      </ICarousel>
    </div>
  )
}

Carousel.propTypes = {
  images: PropTypes.array.isRequired
}

export default Carousel