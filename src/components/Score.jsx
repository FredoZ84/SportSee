import {
  RadialBarChart,
  RadialBar,
  ResponsiveContainer,
  PolarAngleAxis,
  Legend,
} from 'recharts'

import PropTypes from 'prop-types'

function Score({ userDatas }) {
  const data = [userDatas]

  function myLegend() {
    return (
      <p>
        <span className="score_value">{data[0].score}%</span>
        <br />
        <span className="objective">
          de votre
          <br />
          objectif
        </span>
      </p>
    )
  }

  return (
    <div className="infos_square score">
      <h2>Score</h2>
      <ResponsiveContainer>
        <RadialBarChart
          cx="50%"
          cy="50%"
          innerRadius="100%"
          outerRadius="75%"
          barSize={10}
          data={data}
          startAngle={90}
          endAngle={90 + (data[0].score / 100) * 360}
        >
          <PolarAngleAxis type="number" domain={[0, 1]} tick={false} />
          <RadialBar
            minAngle={15}
            dataKey="score"
            fill="red"
            cornerRadius={20}
          />
          <Legend
            width={180}
            height={180}
            layout="vertical"
            verticalAlign="middle"
            align="center"
            content={myLegend}
          />
          <circle cx="50%" cy="50%" fill="white" r="33%"></circle>
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Score

Score.propTypes = {
  userDatas: PropTypes.shape({
    score: PropTypes.number,
  }).isRequired,
}