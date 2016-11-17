import { PropTypes } from 'react'

export type Action = 'PUSH' | 'REPLACE' | 'POP'

export const action = PropTypes.oneOf([
  'PUSH',
  'REPLACE',
  'POP'
])

export type MatchContext = {
  addMatch: Function,
  removeMatch: Function
}

export const matchContext = PropTypes.shape({
  addMatch: PropTypes.func.isRequired,
  removeMatch: PropTypes.func.isRequired
})

export type History = {
  listen: Function,
  listenBefore: Function,
  push: Function,
  replace: Function,
  go: Function
}

export const history = PropTypes.shape({
  listen: PropTypes.func.isRequired,
  listenBefore: PropTypes.func.isRequired,
  push: PropTypes.func.isRequired,
  replace: PropTypes.func.isRequired,
  go: PropTypes.func.isRequired
})

export type Location = {
  pathname: string,
  search: string,
  hash: string,
  state?: any,
  key?: string
}

export const location = PropTypes.shape({
  pathname: PropTypes.string.isRequired,
  search: PropTypes.string.isRequired,
  hash: PropTypes.string.isRequired,
  state: PropTypes.any,
  key: PropTypes.string
})

export type HistoryContext = {
  action: Action,
  location: Location,
  push: Function,
  replace: Function,
  go: Function,
  goBack: Function,
  goForward: Function,
  canGo?: Function,
  block: Function 
}

export const historyContext = PropTypes.shape({
  action: action.isRequired,
  location: location.isRequired,
  push: PropTypes.func.isRequired,
  replace: PropTypes.func.isRequired,
  go: PropTypes.func.isRequired,
  goBack: PropTypes.func.isRequired,
  goForward: PropTypes.func.isRequired,
  canGo: PropTypes.func,
  block: PropTypes.func.isRequired
})

export type RouterContext = {
  transitionTo: Function,
  replaceWith: Function,
  blockTransitions: Function,
  createHref: Function  
}

export const routerContext = PropTypes.shape({
  transitionTo: PropTypes.func.isRequired,
  replaceWith: PropTypes.func.isRequired,
  blockTransitions: PropTypes.func.isRequired,
  createHref: PropTypes.func.isRequired
})
