import React from 'react'

export const StoreContext = React.createContext(null)

export default ({ children }) => {
  const [color, setColor] = React.useState('primary')
  const [font, setFont] = React.useState('')

  const store = {
    color: [color, setColor],
    font: [font, setFont]
  }

  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
}