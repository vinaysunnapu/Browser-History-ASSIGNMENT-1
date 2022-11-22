import {Component} from 'react'

import './App.css'

let searchList

// These are the list used in the application. You can move them to any component needed.
const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]

const SearchItem = props => {
  const {eachItem, onDeleteItem} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = eachItem

  const onDelete = () => {
    onDeleteItem(id)
  }

  return (
    <li className="list-container">
      <p>{timeAccessed}</p>
      <div className="app-details-container">
        <img
          src={logoUrl}
          alt="domain logo"
          className="app-image each-margin"
        />
        <p className="each-margin">{title}</p>
        <p className="each-margin">{domainUrl}</p>
      </div>
      <button
        type="button"
        className="delete-button"
        onClick={onDelete}
        testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
          className="delete-image"
        />
      </button>
    </li>
  )
}

class App extends Component {
  state = {
    searchItem: '',
    historyList: initialHistoryList,
  }

  onSearchItem = event => {
    this.setState({searchItem: event.target.value})
  }

  onDeleteItem = id => {
    const {historyList} = this.state

    const filterList = historyList.filter(each => each.id !== id)

    this.setState({historyList: filterList})
  }

  render() {
    const {searchItem, historyList} = this.state

    searchList = historyList.filter(eachList =>
      eachList.title.toLowerCase().includes(searchItem.toLowerCase()),
    )

    let condition = false

    if (searchList.length === 0) {
      condition = true
    }

    return (
      <div className="bg-container">
        <div className="nav-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
            className="image"
          />
          <div className="search-container">
            <button type="button" className="search-button">
              <img
                src="https://assets.ccbp.in/frontend/react-js/search-img.png"
                alt="search"
                className="search-image"
              />
            </button>
            <input
              type="search"
              className="search-input"
              onChange={this.onSearchItem}
            />
          </div>
        </div>
        <ul className="searchItems-container">
          {searchList.map(eachList => (
            <SearchItem
              eachItem={eachList}
              key={eachList.id}
              onDeleteItem={this.onDeleteItem}
            />
          ))}
          {condition ? (
            <p className="no-history">There is no history to show</p>
          ) : null}
        </ul>
      </div>
    )
  }
}

export default App
