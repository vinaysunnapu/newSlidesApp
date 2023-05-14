import {Component} from 'react'

import Header from '../Header'

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

class SlidesApp extends Component {
  state = {
    slidesList: initialSlidesList,
    activeSlide: initialSlidesList[0].id,
    heading: initialSlidesList[0].heading,
    desc: initialSlidesList[0].description,
    headCond: false,
    descCond: false,
  }

  onKeyDown = event => {
    const {slidesList} = this.state
    if (event.key === 'Enter') {
      this.setState({headCond: false})
    }
  }

  onEditHeading = () => {
    this.setState({headCond: true})
  }

  onChangeHeading = event => {
    const {activeSlide, slidesList} = this.state
    console.log(slidesList)
    this.setState({heading: event.target.value})

    // const changeSlide = slidesList.find(each => each.id === activeSlide)
    // changeSlide.heading = event.target.value
    this.setState(prevState => ({
      slidesList: prevState.slidesList.map(eachItem => {
        if (eachItem.id === activeSlide) {
          const slide = event.target.value
          return {...eachItem, heading: slide}
        }
        return eachItem
      }),
    }))
  }

  showSlides = () => {
    const {slidesList} = this.state

    return slidesList.map(eachSlide => {
      const {activeSlide} = this.state
      const {heading, description, id} = eachSlide
      const isActive = activeSlide === eachSlide.id
      const className = isActive && 'list-color'

      const onClickSlide = () => {
        this.setState({
          activeSlide: eachSlide.id,
          heading,
          desc: description,
        })
      }

      return (
        <li className={`${className} each-list`} onClick={onClickSlide}>
          <h1>{heading}</h1>
          <p>{description}</p>
        </li>
      )
    })
  }

  onClickAddSlide = () => {
    const {slidesList} = this.state

    const newSlide = {
      id: 10,
      heading: 'heading',
      description: 'description',
      num: 100,
    }

    this.setState(prevState => ({
      slidesList: [...prevState.slidesList, newSlide],
    }))
  }

  render() {
    const {heading, desc, list, headCond, descCond} = this.state

    // console.log(list)

    return (
      <>
        <Header />
        <button
          type="button"
          className="new-buttons"
          onClick={this.onClickAddSlide}
        >
          New
        </button>
        <div className="main-container">
          <ul className="u-list">{this.showSlides()}</ul>
          <div className="main-slide-container">
            {headCond ? (
              <input
                type="text"
                onChange={this.onChangeHeading}
                onKeyDown={this.onKeyDown}
              />
            ) : (
              <h1 onClick={this.onEditHeading}>{heading}</h1>
            )}
            {descCond ? (
              <input type="text" onChange={this.onChangeDescription} />
            ) : (
              <p onClick={this.onEditParaGraph}>{desc}</p>
            )}
          </div>
        </div>
      </>
    )
  }
}
export default SlidesApp
