import React, { Component } from 'react'
import './Header.css'
import Body from '../Body/Body'

const historyList = [
      {
        id: 1,
        timeAccess: '07:45 PM',
        logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
        title: 'Instagram',
        domainUrl: 'www.instagram.com',
      },
      {
        id: 2,
        timeAccess: '05:45 PM',
        logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
        title: 'Twitter. It what happening / Twitter',
        domainUrl: 'www.twitter.com',
      },
      {
        id: 3,
        timeAccess: '04:35 PM',
        logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
        title: 'Facebook  log in or sign up',
        domainUrl: 'www.facebook.com',
      },
      {
        id: 4,
        timeAccess: '04:25 PM',
        logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
        title: 'LinkedIn: Log In or Sign Up',
        domainUrl: 'www.linkedin.com',
      },
      {
        id: 5,
        timeAccess: '04:00 PM',
        logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
        title: 'Hashnode: Everything you need to start blogging as a developer!',
        domainUrl: 'www.hashnode.com',
      },
      {
        id: 6,
        timeAccess: '03:25 PM',
        logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
        title: 'GitHub: Where the world builds software · GitHub',
        domainUrl: 'www.github.com',
      },
      {
        id: 7,
        timeAccess: '02:45 PM',
        logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
        title: 'React  A JavaScript library for building user interfaces',
        domainUrl: 'www.reactjs.org',
      },
      {
        id: 8,
        timeAccess: '09:25 AM',
        logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
        title: 'Gmail',
        domainUrl: 'www.gmail.com',
      },
      {
        id: 9,
        timeAccess: '09:00 AM',
        logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
        title: 'Google',
        domainUrl: 'www.google.com',
      },
]

class Header extends Component {

    state = {
      searchInput: '',
      list: historyList,
    }

    browseHistory = event => {
       const {list} = this.state
       this.setState({
        searchInput:event.target.value,
        list,
       })
    }

    onDeleteHistory = id => {
      const {searchInput,list} = this.state
      this.setState({
        searchInput,
        list: list.filter(each => each.id !== id ),
      })
    }
   
    searchResult = searchResultArray => {
      if (searchResultArray.length === 0) {
        return (
          <div className='empty-list-container'>
            <p className='empty-msg'>There is no history </p>
          </div>
        )
      }
      return(
        <ul className="history-list-container">
           {searchResultArray.map(each => (
            <Body 
              key={each.id}
              historyItem={each}
              onDeleteFn = {this.onDeleteHistory}
            />
           ))}
        </ul>
      )
    }

  render () {
    const {searchInput,list} = this.state

    const searchResultArray = list.filter(each => 
      each.title.toLowerCase().includes(searchInput.toLocaleLowerCase()),
      )

  return (
        <div className='header'>
          <div className='header-bar'>
            <img src='https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png' 
            className='header-logo' 
            alt=''/>
            <div className='outer-adjust'> 
              <div className='search-container'>  
                <img src='https://assets.ccbp.in/frontend/react-js/search-img.png' 
                alt='search' 
                className='search-icon'/>
                
                  <input 
                    type='search'
                    onChange={this.browseHistory}
                    className='header-search'
                    placeholder='Search History'
                  />
              </div>
            </div>     
          </div> 
          {this.searchResult(searchResultArray)}
        </div>
    )
  }
}

export default Header