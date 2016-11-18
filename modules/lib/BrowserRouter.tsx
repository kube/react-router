import * as React from 'react'
import { PropTypes } from 'react'
import createBrowserHistory from 'history/createBrowserHistory'
import StaticRouter from './StaticRouter'
import History from './History'


export type BrowserRouterProps = {
  basename?: string,
  forceRefresh?: boolean,
  getUserConfirmation?: Function,
  keyLength?: number,
  children?: Function | Node
}

const BrowserRouter = (props: BrowserRouterProps) => (
  <History
    createHistory={createBrowserHistory}
    historyOptions={{
      basename: props.basename,
      forceRefresh: props.forceRefresh,
      getUserConfirmation: props.getUserConfirmation,
      keyLength: props.keyLength
    }}
    >
    {({ history, action, location }) => (
      <StaticRouter
        action={action}
        location={location}
        basename={props.basename}
        onPush={history.push}
        onReplace={history.replace}
        blockTransitions={history.block}
        // {...routerProps}
        />
    )}
  </History>
)

if (__DEV__) {
  BrowserRouter.propTypes = {
    basename: PropTypes.string,
    forceRefresh: PropTypes.bool,
    getUserConfirmation: PropTypes.func,
    keyLength: PropTypes.number,
    children: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.node
    ])
  }
}

export default BrowserRouter
