import {Component} from 'react'
import './App.css'

const initialCountriesList = [
  {
    id: '53c9c67a-c923-4927-8a75-fdfc4bc5ec61',
    name: 'Australia',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-australia-img.png',
    isVisited: false,
  },
  {
    id: '8baa8029-fb2c-4f06-bfcc-3dc9ad12b24d',
    name: 'Canada',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-canada-img.png',
    isVisited: false,
  },
  {
    id: '1b520f98-6548-41f3-816e-c8b887865172',
    name: 'Greenland',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-greenland-img.png',
    isVisited: false,
  },
  {
    id: '25841996-fbfd-4554-add4-4c94082c8ccd',
    name: 'India',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-india-img.png',
    isVisited: true,
  },
  {
    id: '603c3568-13b0-11ec-82a8-0242ac130003',
    name: 'Netherlands',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-netherland-img.png',
    isVisited: false,
  },
  {
    id: '3c988dec-55e1-477d-a9e2-b354fd559849',
    name: 'Portugal',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-portugal-img.png',
    isVisited: false,
  },
  {
    id: 'd766f754-34f7-413e-81ec-9992821b97fa',
    name: 'Switzerland',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-switzerland-img.png',
    isVisited: false,
  },
  {
    id: '7ebb4e04-b124-417f-a69e-564a456d70f1',
    name: 'Thailand',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-thailand-img.png',
    isVisited: false,
  },
  {
    id: '1e4b1dcd-6ace-4dde-ad8d-675927d5ae47',
    name: 'United Kingdom',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-united-kingdom-img.png',
    isVisited: true,
  },
  {
    id: 'e76da8ca-bc48-4981-902b-a4d2d46feb6d',
    name: 'Venezuela',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-venezuela-img.png',
    isVisited: false,
  },
]

class App extends Component {
  state = {list: initialCountriesList}

  visited = event => {
    const {id} = event.target
    const {list} = this.state
    const newList = list.map(i => {
      if (i.id === id) {
        return {...i, isVisited: true}
      }
      return i
    })
    this.setState({list: newList})
  }

  removed = event => {
    const {list} = this.state
    const {id} = event.target
    console.log(list)
    const newRemovedList = list.map(i => {
      if (i.id === id) {
        return {...i, isVisited: false}
      }
      return i
    })
    this.setState({list: newRemovedList})
  }

  render() {
    const {list} = this.state
    const filteredList = list.filter(i => i.isVisited === true)
    console.log(filteredList)
    const zeroList = filteredList.length === 0
    return (
      <div>
        <h1>Countries</h1>
        <ul className="countries-list">
          {list.map(i => (
            <li key={i.id}>
              <div>
                <p>{i.name}</p>
                {i.isVisited ? (
                  <p>Visited</p>
                ) : (
                  <button id={i.id} onClick={this.visited} type="button">
                    Visit
                  </button>
                )}
              </div>
            </li>
          ))}
        </ul>
        <div>
          <h1>Visited Countries</h1>
          {zeroList ? (
            <p>No Countries Visited Yet!</p>
          ) : (
            <ul>
              {filteredList.map(i => (
                <li key={i.id}>
                  <div>
                    <img src={i.imageUrl} alt="thumbnail" />
                    <div>
                      <p>{i.name}</p>
                      <button id={i.id} onClick={this.removed} type="button">
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default App
