import * as React from 'react'
import { PropTypes } from 'react'
import { Location as LocationType, location as locationType } from './PropTypes'

export type MissProps = {
  children?: Node,
  location?: LocationType,
  render?: Function,
  component?: Function
}

class Miss extends React.Component<MissProps, any> {
  static contextTypes = {
    match: PropTypes.object,
    location: PropTypes.object,
    serverRouter: PropTypes.object
  }

  constructor(props, context) {
    super(props, context)

    // ignore if rendered out of context (probably for unit tests)
    if (context.match && !context.serverRouter) {
      this.unsubscribe = this.context.match.subscribe((matchesFound) => {
        this.setState({
          noMatchesInContext: !matchesFound
        })
      })
    }

    if (context.serverRouter) {
      context.serverRouter.registerMissPresence(
        context.match.serverRouterIndex
      )
    }

    this.state = {
      noMatchesInContext: false
    }
  }

  componentWillUnmount() {
    if (this.unsubscribe) {
      this.unsubscribe()
    }
  }

  render() {
    const { render, component:Component } = this.props
    const { noMatchesInContext } = this.state
    const { location:locationProp } = this.props
    const location = locationProp || this.context.location
    const { serverRouter, match } = this.context
    const noMatchesOnServerContext = serverRouter &&
      serverRouter.missedAtIndex(match.serverRouterIndex)
    if (noMatchesInContext || noMatchesOnServerContext) {
      return (
        render ? (
          render({ location })
        ) : (
          <Component location={location}/>
        )
      )
    } else {
      return null
    }
  }
}

if (__DEV__) {
  Miss.propTypes = {
    children: PropTypes.node,
    location: locationType,
    render: PropTypes.func,
    component: PropTypes.func
  }
}

export default Miss
