import PropTypes from 'prop-types'

function Home({ user, updateUser }) {

  const users = [
    { name: 'Karl', id: '12' },
    { name: 'Cecilia', id: '18' },
    { name: 'Thomas (Test)', id: '15' }
  ]

  return (
    <main>
      <h1>Accueil</h1>
      <form>
        <fieldset>
          <legend>Selectionner un utilisateur:</legend>

          {users.map(({ name, id }, index) => (
            <div key={index}>
              <input
                type="radio"
                id={id}
                name="user"
                defaultValue={name}
                defaultChecked={user === id ? true : false}
                onChange={(e) => updateUser(e.target.id)}
              />
              <label htmlFor={id}>{name}</label>
            </div>
          ))}
        </fieldset>
      </form>
    </main>
  )
}

export default Home

Home.propTypes = {
  user: PropTypes.string.isRequired
}
