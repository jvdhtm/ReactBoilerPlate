import { css } from 'styled-components'

const style = css`
  &.btn {
    display: inline-flex;
    align-items: center;
    white-space: nowrap;
    height: 2.5em;
    justify-content: center;
    text-decoration: none;
    cursor: pointer;
    appearance: none;
    padding: 0 1em;
    border-radius: 0.125em;
    box-sizing: border-box;
    transition: background-color 250ms ease-out, color 250ms ease-out,
      border-color 250ms ease-out;
    &__primary {
      background-color: ${props => props.theme.primary};
      color: ${props => props.theme.white};

      &:hover,
      &:focus,
      &:active {
      }
    }
    &__secondary {
      background-color: ${props => props.theme.secondary};
      color: ${props => props.theme.black};
      &:hover,
      &:focus,
      &:active {
      }
    }
    &__default {
      background-color: ${props => props.theme.default};
      color: ${props => props.theme.white};
      &:hover,
      &:focus,
      &:active {
      }
    }
    &__warning {
      background-color: ${props => props.theme.warning};
      color: ${props => props.theme.white};
      &:hover,
      &:focus,
      &:active {
      }
    }
    &:focus {
      outline: none;
    }
  }
`

export default style
