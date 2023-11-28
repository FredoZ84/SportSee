import { useState } from 'react'
import PropTypes from 'prop-types'

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

function AverageSessionDuration({ averageSessionDatas }) {
  const data = averageSessionDatas
  // eslint-disable-next-line no-unused-vars
  const [tooltipX, setTooltipX] = useState(0)

  function formatTick(value) {
    const ticks = {
      1: 'L',
      2: 'M',
      3: 'M',
      4: 'J',
      5: 'V',
      6: 'S',
      7: 'D',
    }
    return ticks[value]
  }

  function CustomTooltip({ active, payload, coordinate }) {
    if (active && payload && payload.length) {
      if (payload[0].payload.tickDisplay === false) return null
      // Hack to avoid warning update component while rendering another
      // by send it back to the callback queue
      setTimeout(() => setTooltipX(coordinate.x), 0)
      return <div className="customTooltip">{`${payload[0].value} min`}</div>
    }
    return null
  }

  function drawOverlay(state) {
    if (state.isTooltipActive) {
      const overlay = document.querySelector(
        '.average_session_duration_overlay',
      )
      const container = document.querySelector('.average_session_duration')
      const containerWidth = container.clientWidth
      const calculatedWidth = containerWidth - tooltipX
      overlay.style.width = calculatedWidth + 'px'
    } else {
      deleteOverlay()
    }
  }

  function deleteOverlay() {
    const overlay = document.querySelector('.average_session_duration_overlay')
    overlay.style.width = '0px'
  }

  return (
    <div className="infos_square average_session_duration">
      <div className="average_session_duration_overlay"></div>
      <h2>Durée moyenne des sessions</h2>
      <ResponsiveContainer width="100%" height="70%">
        <LineChart
          data={data}
          width={258}
          height={263}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 10,
          }}
          onMouseMove={drawOverlay}
          onMouseLeave={deleteOverlay}
        >
          <Tooltip
            content={<CustomTooltip />}
            cursor={false}
            wrapperStyle={{ outline: 'none' }}
            animationDuration={0}
            margin={{ right: -100 }}
          />
          <XAxis
            dataKey="day"
            stroke="rgba(255, 255, 255, 0.5)"
            tickLine={false}
            axisLine={false}
            tick={{ fontSize: 12 }}
            tickFormatter={formatTick}
            dy={15}
            interval={0}
          />
          <YAxis hide={true} domain={['dataMin', 'dataMax']} />

          <Line
            type="natural"
            dataKey="sessionLength"
            dot={false}
            strokeWidth={2}
            stroke="#fff"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default AverageSessionDuration

AverageSessionDuration.propTypes = {
  averageSessionDatas: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.number.isRequired,
      sessionLength: PropTypes.number.isRequired,
    }),
  ).isRequired,
}