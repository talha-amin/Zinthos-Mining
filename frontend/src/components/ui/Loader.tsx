import { CSSProperties } from '@stitches/react'
import React from 'react'

interface LoaderProps {
  size?: number
  color?: string
}

const Loader: React.FC<LoaderProps> = ({ size = 40, color = '#000000' }) => {
  const loaderStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: `100%`,
    height: `${size}px`,
  }

  const outerCircleStyle: CSSProperties = {
    position: 'relative',
    width: `${size}px`,
    height: `${size}px`,
    borderRadius: '50%',
    border: `2px solid ${color}`,
    borderTopColor: 'transparent',
    borderBottomColor: 'transparent',
    animation: 'spin 2s infinite linear',
  }

  const innerCircleStyle: CSSProperties = {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    margin: 'auto',
    width: `${size * 0.6}px`,
    height: `${size * 0.6}px`,
    borderRadius: '50%',
    border: `2px solid ${color}`,
    borderTopColor: 'transparent',
    borderBottomColor: 'transparent',
    animation: 'spin 1s infinite linear',
  }

  const keyframes = `@keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }`

  return (
    <div style={loaderStyle}>
      <style>{keyframes}</style>
      <div style={outerCircleStyle}>
        <div style={innerCircleStyle}></div>
      </div>
    </div>
  )
}

export default Loader;
