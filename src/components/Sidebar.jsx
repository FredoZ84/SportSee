import personZen from '../assets/icons/person_zen.png'
import personSwimming from '../assets/icons/person_swimming.png'
import personBiking from '../assets/icons/person_biking.png'
import dumbbell from '../assets/icons/dumbbell.png'
//import React  from 'react'

function Sidebar() {
  const icons = [
    { source: personZen, definition: 'Icône montrant une personne zen' },
    {
      source: personSwimming,
      definition: 'Icône montrant une personne qui nage',
    },
    {
      source: personBiking,
      definition: 'Icône montrant une personne qui fait du vélo',
    },
    { source: dumbbell, definition: 'Icône montrant un haltère' },
  ]

  return (
    <section id="sidebar" className="flex">
      <ul className="icons">
        {icons.map((icon, index) => (
          <li key={`${index}`} className="flex">
            <img src={icon.source} alt={icon.definition} />
          </li>
        ))}
      </ul>
      <p className="copyright"> Copiryght, SportSee 2020 </p>
    </section>
  )
}

export default Sidebar
