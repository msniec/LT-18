import React from 'react'

function colors({ match }) {
  return <div>Color: {match.params.id}</div>
}

export default colors