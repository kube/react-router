import * as React from 'react'
import { PropTypes } from 'react'
import { historyContext as historyContextType } from './PropTypes'


export type NavigationPromptProps = {
  when?: boolean,
  message: Function | string
}

class NavigationPrompt extends React.Component<NavigationPrompt, any> {
  static contextTypes = {
    history: historyContextType.isRequired
  }

  static defaultProps = {
    when: true
  }

  block() {
    if (!this.teardownPrompt)
      this.teardownPrompt = this.context.history.block(this.props.message)
  }

  unblock() {
    if (this.teardownPrompt) {
      this.teardownPrompt()
      this.teardownPrompt = null
    }
  }

  componentWillMount() {
    if (this.props.when)
      this.block()
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.when) {
      this.block()
    } else {
      this.unblock()
    }
  }

  componentWillUnmount() {
    this.unblock()
  }

  render() {
    return null
  }
}

if (__DEV__) {
  NavigationPrompt.propTypes = {
    when: PropTypes.bool,
    message: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.string
    ]).isRequired
  }
}

export default NavigationPrompt
