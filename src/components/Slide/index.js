import {Component} from 'react'
import './index.css'

class Slide extends Component {
  state = {condition: true}

  getActiveSlide = () => {
    const {slideData} = this.props
    const {heading, description} = slideData
    const {condition} = this.state

    const onClickHeading = () => {
      this.setState({condition: false})
    }

    const onChangeHeading = event => {
      if (event.key === 'Enter') {
        this.setState({condtion: true})
      } else {
        slideData.heading = event.target.value
      }
    }

    return (
      <div className="slide-container">
        {condition ? (
          <h1 className="slide-heading" onClick={onClickHeading}>
            {heading}
          </h1>
        ) : (
          <input type="text" onChange={onChangeHeading} />
        )}
        <p className="slide-desc">{description}</p>
      </div>
    )
  }

  getListOfSlides = () => {
    const {slideData, activeSlide, isActive} = this.props

    const {id, heading, description, num} = slideData
    const onClickActiveSlide = () => {
      activeSlide(id)
    }

    const bgClassName = isActive && 'list-bg-color'

    return (
      <div className="list-bg-container">
        <li
          className={`main-list-item ${bgClassName}`}
          onClick={onClickActiveSlide}
        >
          <p className="num">{num}</p>
          <div className="list-item">
            <h1 className="list-heading">{heading}</h1>
            <p className="list-description">{description}</p>
          </div>
        </li>
        {isActive && this.getActiveSlide()}
      </div>
    )
  }

  render() {
    return <>{this.getListOfSlides()}</>
  }
}

export default Slide
