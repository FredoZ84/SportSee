import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from 'recharts'

import PropTypes from 'prop-types'

function Performances({ performanceDatas }) {
  const { data, kind } = performanceDatas

  const dataReverse = data
    .slice(0)
    .reverse()
    .map((element) => {
      return element
    })

  function formatTick(value) {
    const translate = {
      cardio: 'Cardio',
      energy: 'Energie',
      endurance: 'Endurance',
      strength: 'Force',
      speed: 'Vitesse',
      intensity: 'Intensité',
    }
    return translate[kind[value]]
  }

  return (
    <div className="infos_square performances">
      <ResponsiveContainer width="100%" height="90%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={dataReverse}>
          <PolarGrid radialLines={false} />
          <PolarAngleAxis
            dataKey="kind"
            stroke="#fff"
            tick={{ fontSize: 10 }}
            tickLine={false}
            tickFormatter={formatTick}
          />

          <Radar
            dataKey="value"
            stroke="#ff0101"
            fill="#ff0101"
            fillOpacity={0.7}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Performances
/* un objet qui contient une première propriété data 
qui un  tableau 
czlui-ci qui cotient un objet
avec une proprité value number
et une propriété  kind number

Et une seconde propriété kind qui est un objet avec des number

Performances.propTypes = {
  performanceDatas: PropTypes.shape({
    data: PropTypes.array,
    kind: PropTypes.shape,
  }).isRequired,
}

.shape({
        1: PropTypes.string.isRequired,
        2: PropTypes.string.isRequired,
        3: PropTypes.string.isRequired,
        4: PropTypes.string.isRequired,
        5: PropTypes.string.isRequired,
        6: PropTypes.string.isRequired,
      })
*/

Performances.propTypes = {
  performanceDatas: PropTypes.shape({
    data: PropTypes.arrayOf(
      PropTypes.shape({
        value: PropTypes.number.isRequired,
        kind: PropTypes.number.isRequired,
      }),
    ),
    kind: PropTypes.shape({
      1: PropTypes.string.isRequired,
      2: PropTypes.string.isRequired,
      3: PropTypes.string.isRequired,
      4: PropTypes.string.isRequired,
      5: PropTypes.string.isRequired,
      6: PropTypes.string.isRequired,
    }),
  }).isRequired,
}
