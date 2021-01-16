import React from 'react'

const css = {
  fontSize : '40px',
  color : 'blue'
}

function InlineStyle() {
  return (
    <div>
      <h1 style={css}>Inline StyleSheet</h1>
    </div>
  )
}

export default InlineStyle
