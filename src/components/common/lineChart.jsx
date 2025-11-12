import React, { useState } from 'react'

function LineChart({ 
  data = [], 
  xAxisLabels = [], 
  yAxisLabels = [], 
  height = 300,
  className = ''
}) {
  const [hoveredPoint, setHoveredPoint] = useState(null)

  // Default sample data if none provided
  const defaultData = [
    { x: 1, y: 100 },
    { x: 4, y: 250 },
    { x: 7, y: 500 },
    { x: 9, y: 1200 },
    { x: 12, y: 3932.98 },
    { x: 15, y: 2000 },
    { x: 18, y: 1500 },
    { x: 20, y: 2500 },
    { x: 23, y: 1800 },
    { x: 26, y: 2200 },
    { x: 30, y: 3000 }
  ]

  const chartData = data.length > 0 ? data : defaultData
  const xLabels = xAxisLabels.length > 0 ? xAxisLabels : chartData.map(d => d.x)
  const yLabels = yAxisLabels.length > 0 ? yAxisLabels : ['$100', '$250', '$500', '$1,000', '$5,000']

  // Calculate chart dimensions
  const padding = { top: 20, right: 40, bottom: 40, left: 60 }
  const chartWidth = 600
  const chartHeight = height
  const innerWidth = chartWidth - padding.left - padding.right
  const innerHeight = chartHeight - padding.top - padding.bottom

  // Get min and max values for scaling
  const yValues = chartData.map(d => d.y)
  const minY = Math.min(...yValues)
  const maxY = Math.max(...yValues)

  // Scale functions
  const scaleX = (x) => {
    const maxX = Math.max(...chartData.map(d => d.x))
    const minX = Math.min(...chartData.map(d => d.x))
    return ((x - minX) / (maxX - minX)) * innerWidth
  }

  const scaleY = (y) => {
    // Logarithmic scale for better visualization
    const logMin = Math.log10(minY || 1)
    const logMax = Math.log10(maxY || 1)
    const logY = Math.log10(y || 1)
    return innerHeight - ((logY - logMin) / (logMax - logMin)) * innerHeight
  }

  // Generate path for line
  const pathData = chartData
    .map((point, index) => {
      const x = scaleX(point.x) + padding.left
      const y = scaleY(point.y) + padding.top
      return index === 0 ? `M ${x} ${y}` : `L ${x} ${y}`
    })
    .join(' ')

  // Generate area path (line + bottom closing)
  const firstPoint = chartData[0]
  const lastPoint = chartData[chartData.length - 1]
  const bottomY = chartHeight - padding.bottom
  const firstX = scaleX(firstPoint.x) + padding.left
  const lastX = scaleX(lastPoint.x) + padding.left
  
  const areaPath = `${pathData} L ${lastX} ${bottomY} L ${firstX} ${bottomY} Z`

  // Generate grid lines
  const gridLines = yLabels.map((_, index) => {
    const y = (innerHeight / (yLabels.length - 1)) * index + padding.top
    return (
      <line
        key={`grid-${index}`}
        x1={padding.left}
        y1={y}
        x2={chartWidth - padding.right}
        y2={y}
        stroke="#4A4A4A"
        strokeWidth="1"
        strokeDasharray="2,2"
      />
    )
  })

  return (
    <div className={`relative ${className}`}>
      <svg
        width={chartWidth}
        height={chartHeight}
        className="w-full h-auto"
        viewBox={`0 0 ${chartWidth} ${chartHeight}`}
      >
        {/* Gradient Definition */}
        <defs>
          <linearGradient id="goldenGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#C9A44A" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#C9A44A" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#C9A44A" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Grid Lines */}
        {gridLines}

        {/* Filled Area */}
        <path
          d={areaPath}
          fill="url(#goldenGradient)"
        />

        {/* Chart Line */}
        <path
          d={pathData}
          fill="none"
          stroke="#C9A44A"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Data Points */}
        {chartData.map((point, index) => {
          const x = scaleX(point.x) + padding.left
          const y = scaleY(point.y) + padding.top
          const isHovered = hoveredPoint === index

          return (
            <g key={`point-${index}`}>
              {/* Circle marker */}
              <circle
                cx={x}
                cy={y}
                r={isHovered ? 6 : 4}
                fill="#C9A44A"
                stroke="#C9A44A"
                strokeWidth="2"
                onMouseEnter={() => setHoveredPoint(index)}
                onMouseLeave={() => setHoveredPoint(null)}
                className="cursor-pointer"
              />
              
              {/* Tooltip */}
              {isHovered && (
                <g>
                  <rect
                    x={x - 50}
                    y={y - 35}
                    width="100"
                    height="25"
                    fill="#C9A44A"
                    rx="4"
                  />
                  <text
                    x={x}
                    y={y - 15}
                    textAnchor="middle"
                    fill="#000"
                    fontSize="12"
                    fontWeight="bold"
                    fontFamily="sans-serif"
                  >
                    ${point.y.toLocaleString('en-US', { minimumFractionDigits: 1, maximumFractionDigits: 1 })}
                  </text>
                </g>
              )}
            </g>
          )
        })}

        {/* Y-axis labels */}
        {yLabels.map((label, index) => {
          const y = (innerHeight / (yLabels.length - 1)) * (yLabels.length - 1 - index) + padding.top
          return (
            <text
              key={`y-label-${index}`}
              x={padding.left - 10}
              y={y + 4}
              textAnchor="end"
              fill="#AFAFAF"
              fontSize="12"
              fontFamily="sans-serif"
            >
              {label}
            </text>
          )
        })}

        {/* X-axis labels */}
        {xLabels.map((label, index) => {
          const point = chartData[index]
          if (!point) return null
          const x = scaleX(point.x) + padding.left
          return (
            <text
              key={`x-label-${index}`}
              x={x}
              y={chartHeight - padding.bottom + 20}
              textAnchor="middle"
              fill="#AFAFAF"
              fontSize="12"
              fontFamily="sans-serif"
            >
              {label}
            </text>
          )
        })}
      </svg>
    </div>
  )
}

export default LineChart

