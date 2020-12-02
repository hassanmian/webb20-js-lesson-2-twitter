import React from 'react'
import Tweet from './components/Tweet'

function App() {

  const tweetList = [
    {
      "imageURL": "https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
      "content": "My Awesome tweet",
      "author": "John",
      "date": "2020-12-03"
    },
    {
      "imageURL": "https://images.unsplash.com/photo-1497316730643-415fac54a2af?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
      "content": "It smells like christmas",
      "author": "Jane",
      "date": "2020-12-02"
    },
    {
      "imageURL": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
      "content": "T-22 days until christmas",
      "author": "Eliza",
      "date": "2020-12-02"
    },
    {
      "imageURL": "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
      "content": "Dressing up like Santa Claus tomorrow",
      "author": "Eliza",
      "date": "2020-12-01"
    }
  ]
  return (
    <div>
      {tweetList.map((item, index) => {
        return <Tweet 
          key={index}
          author={item.author} 
          content={item.content}
          date={item.date}
          imageURL={item.imageURL}
        />
      })}
    </div>
  );
}

export default App;
