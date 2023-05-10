import {Component} from 'react'

// import {v4 as uuidv4} from 'uuid'

import Header from '../Header'

import Slide from '../Slide'

import './index.css'

const initialSlidesList = [
  {
    id: 'cc6e1752-a063-11ec-b909-0242ac120002',
    heading: 'Welcome',
    description: 'Rahul',
    num: 1,
  },
  {
    id: 'cc6e1aae-a063-11ec-b909-0242ac120002',
    heading: 'Agenda',
    description: 'Technologies in focus',
    num: 2,
  },
  {
    id: 'cc6e1e78-a063-11ec-b909-0242ac120002',
    heading: 'Cyber Security',
    description: 'Ethical Hacking',
    num: 3,
  },
  {
    id: 'cc6e1fc2-a063-11ec-b909-0242ac120002',
    heading: 'IoT',
    description: 'Wireless Technologies',
    num: 4,
  },
  {
    id: 'cc6e20f8-a063-11ec-b909-0242ac120002',
    heading: 'AI-ML',
    description: 'Cutting-Edge Technology',
    num: 5,
  },
  {
    id: 'cc6e2224-a063-11ec-b909-0242ac120002',
    heading: 'Blockchain',
    description: 'Emerging Technology',
    num: 6,
  },
  {
    id: 'cc6e233c-a063-11ec-b909-0242ac120002',
    heading: 'XR Technologies',
    description: 'AR/VR Technologies',
    num: 7,
  },
]

class NextSlidesApp extends Component {
  state = {
    slidesList: initialSlidesList,
    activeId: initialSlidesList[0].id,
    headCondition: false,
    descCondition: false,
    headingText: initialSlidesList[0].heading,
    descText: initialSlidesList[0].description,
  }

  onClickAddSlide = () => {
    const {slidesList} = this.state

    const newSlideObj = {
      id: 'cc6e233c-a063-11ec-b909-0242ac120003',
      heading: 'Heading',
      description: 'Description',
      num: 8,
    }

    this.setState(prevState => ({
      slidesList: [...prevState.slidesList, newSlideObj],
    }))
  }

  activeSlide = id => {
    this.setState({activeId: id})
  }

  showActiveTab = () => {
    const {activeId, slidesList, headCondition, descCondition} = this.state
    const slideInfo = slidesList.find(eachSlide => eachSlide.id === activeId)

    const {heading, description} = slideInfo

    const onClickHeading = () => {
      this.setState({headCondition: true})
    }

    const onHeadingChange = event => {
      slideInfo.heading = event.target.value
      this.setState({slidesList})
    }

    return (
      <div className="slide-info-container">
        {!headCondition ? (
          <h1 className="info-heading" onClick={onClickHeading}>
            {heading}{' '}
          </h1>
        ) : (
          <input
            type="text"
            className="heading-input"
            onChange={onHeadingChange}
          />
        )}
        <p className="info-description">{description}</p>
      </div>
    )
  }

  changeHeading = () => {}

  changeDesc = () => {}

  render() {
    const {slidesList, activeId} = this.state

    return (
      <>
        <Header />
        <div className="main-container">
          <button
            type="button"
            className="new-button"
            onClick={this.onClickAddSlide}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-slides/nxt-slides-plus-icon.png"
              alt="new plus icon"
              className="new-button-image"
            />
            <p className="new-text">New</p>
          </button>
          <div className="main-slides-container">
            <ol className="slide-list-container">
              {slidesList.map(eachSlide => (
                <Slide
                  slideData={eachSlide}
                  key={eachSlide.id}
                  activeSlide={this.activeSlide}
                  isActive={eachSlide.id === activeId}
                  changeHeading={this.changeHeading()}
                  changeDesc={this.changeDesc()}
                />
              ))}
            </ol>
          </div>
        </div>
      </>
    )
  }
}

export default NextSlidesApp
