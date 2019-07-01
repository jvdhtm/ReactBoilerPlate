import * as React from 'react'
import styled from 'styled-components'
import style from './style'

const Wrapper = styled.div`
  ${style}
`

const Standard = ({ children, ...props }) => {
  return (
    <Wrapper {...props}>
      <header />
      <div className="main">{children}</div>
      <footer />
    </Wrapper>
  )
}
export default Standard
