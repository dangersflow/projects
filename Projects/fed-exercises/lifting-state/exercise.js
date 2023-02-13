import React from 'react'

function Name({name, onNameChange}) {
  return (
    <div>
      <label htmlFor="name">Name: </label>
      <input id="name" value={name} onChange={onNameChange} />
    </div>
  )
}

function FavoriteFood() {
  const [food, setFood] = React.useState('')

  return (
    <div>
      <label htmlFor="animal">Favorite Food: </label>
      <input
        id="animal"
        value={food}
        onChange={event => setFood(event.target.value)}
      />
    </div>
  )
}

function Display({name}) {
  return <div>{`Hey ${name}, you are great!`}</div>
}

function App() {
  const [name, setName] = React.useState('')

  return (
    <form>
      <Name name={name} onNameChange={event => setName(event.target.value)} />
      <FavoriteFood />
      <Display name={name} />
    </form>
  )
}

export default App