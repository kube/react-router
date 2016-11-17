import * as React from 'react'
import { PropTypes } from 'react'
import createMemoryHistory from 'history/createMemoryHistory'
import StaticRouter from './StaticRouter'
import History from './History'


export type MemoryRouterTypes = {
  getUserConfirmation?: Function,
  initialEntries?: Array<any>,
  initialIndex?: number,
  keyLength?: number,
  children?: Function | Node
}

const MemoryRouter = ({
  getUserConfirmation,
  initialEntries,
  initialIndex,
  keyLength,
  ...routerProps
}: MemoryRouterTypes) => (
  <History
    createHistory={createMemoryHistory}
    historyOptions={{
      getUserConfirmation,
      initialEntries,
      initialIndex,
      keyLength
    }}
  >
    {({ history, action, location }) => (
      <StaticRouter
        action={action}
        location={location}
        onPush={history.push}
        onReplace={history.replace}
        blockTransitions={history.block}
        {...routerProps}
      />
    )}
  </History>
)

if (__DEV__) {
  MemoryRouter.propTypes = {
    getUserConfirmation: PropTypes.func,
    initialEntries: PropTypes.array,
    initialIndex: PropTypes.number,
    keyLength: PropTypes.number,
    children: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.node
    ])
  }
}

export default MemoryRouter
