import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

import PropTypes from 'prop-types'

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="customTooltip">
        <div>{`${payload[0].value}kg`}</div>
        <div>{`${payload[1].value}kCal`}</div>
      </div>
    )
  }
  return null
}

function Chart({ activityDatas }) {
  const barRadius = [10, 10, 0, 0]

  return (
    <div className="chart">
      <div className="head flex">
        <h2>Activité quotidienne</h2>

        <ul className="legends flex">
          <li>
            <i className="fa-solid fa-circle"></i>
            <span>Poids (kg)</span>
          </li>
          <li>
            <i className="fa-solid fa-circle"></i>
            <span>Calories brûlées (kCal)</span>
          </li>
        </ul>
      </div>
      <ResponsiveContainer width="100%" aspect={3}>
        <BarChart
          width={500}
          height={300}
          data={activityDatas}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid
            strokeDasharray="2 2"
            stroke="#DEDEDE"
            vertical={false}
          />

          <XAxis
            dataKey="day"
            domain={['dataMin', 'dataMax']}
            tickLine={false}
            tickFormatter={(value) => value.substring(value.length - 1)}
            dy={15}
            tick={{ fill: '#9B9EAC', fontSize: 14 }}
            stroke={'#DEDEDE'}
          />
          <YAxis
            yAxisId="right"
            domain={['dataMin-1', 'dataMax+1']}
            orientation="right"
            tickLine={false}
            axisLine={false}
            allowDecimals={false}
            dx={25}
            tick={{ fill: '#9B9EAC', fontSize: 14 }}
          />
          <YAxis
            yAxisId="left"
            orientation="left"
            hide={true}
            domain={['dataMin-100', 'dataMax+100']}
          />

          <Tooltip
            content={<CustomTooltip />}
            itemStyle={{ background: 'rgba(196, 196, 196, 0.5)' }}
            wrapperStyle={{ outline: 'none' }}
            offset={50}
          />

          <Bar
            yAxisId="right"
            dataKey="kilogram"
            fill="#282D30"
            barSize={7}
            radius={barRadius}
          />
          <Bar
            yAxisId="left"
            dataKey="calories"
            fill="#E60000"
            barSize={7}
            radius={barRadius}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart

Chart.propTypes = {
  activityDatas: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.string.isRequired,
      kilogram: PropTypes.number.isRequired,
      calories: PropTypes.number.isRequired,
    }),
  ).isRequired,
}
