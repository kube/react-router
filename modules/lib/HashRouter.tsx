import * as React from 'react'
import { PropTypes } from 'react'
import createHashHistory from 'history/createHashHistory'
import History from './History'
import { addLeadingSlash, stripLeadingSlash } from 'history/PathUtils'
import StaticRouter from './StaticRouter'

const createHref = hashType => path => {
  let newPath

  switch (hashType) {
    case 'hashbang':
      newPath = path.charAt(0) === '!' ? path : '!/' + stripLeadingSlash(path)
      break
    case 'noslash':
      newPath = stripLeadingSlash(path)
      break
    case 'slash':
    default:
      newPath = addLeadingSlash(path)
      break
  }

  return `#${newPath}`
}


export type HashRouterProps = {
  basename?: string,
  getUserConfirmation?: Function,
  hashType?: string,
  children?: Function | Node
}

/**
 * A router that uses the URL hash.
 */
const HashRouter = (props: HashRouterProps) => (
    <History
      createHistory={createHashHistory}
      historyOptions={{
        basename: props.basename,
        getUserConfirmation: props.getUserConfirmation,
        hashType: props.hashType
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
          createHref={createHref(props.hashType)}
          // {...routerProps}
          />
      )}
    </History>
  )

if (__DEV__) {
  HashRouter.propTypes = {
    basename: PropTypes.string,
    getUserConfirmation: PropTypes.func,
    hashType: PropTypes.string,
    children: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.node
    ])
  }
}

export default HashRouter
