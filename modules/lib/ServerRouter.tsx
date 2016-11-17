import * as React from 'react'
import { PropTypes } from 'react'
import StaticRouter from './StaticRouter'


export type ServerRouterProps = {
  context: Object,
  location: String,
  children?: Function | Node
}

class ServerRouter extends React.Component<ServerRouterProps, any> {
  static childContextTypes = {
    serverRouter: PropTypes.object.isRequired
  }

  getChildContext() {
    return {
      serverRouter: this.props.context
    }
  }

  render() {
    const { context, location, ...rest } = this.props
    const redirect = (location) => {
      context.setRedirect(location)
    }
    return (
      <StaticRouter
        action="POP"
        location={location}
        onReplace={redirect}
        onPush={redirect}
        {...rest}
        />
    )
  }
}

if (__DEV__) {
  ServerRouter.propTypes = {
    context: PropTypes.object.isRequired,
    location: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.node
    ])
  }
}

export default ServerRouter
