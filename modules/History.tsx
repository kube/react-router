import * as React from 'react'
import { PropTypes } from 'react'
import { historyContext as historyContextType } from './PropTypes'


export type HistoryProps = {
  children?: Function | Node,
  createHistory: Function,
  historyOptions?: Object
}

/**
 * The common public API for all *History components.
 */
class History extends React.Component<HistoryProps, void> {
  static childContextTypes = {
    history: historyContextType.isRequired
  }

  private history
  private unlisten

  getChildContext() {
    return {
      history: this.history
    }
  }

  componentWillMount() {
    const { createHistory, historyOptions } = this.props
    this.history = createHistory(historyOptions)
    this.unlisten = this.history.listen(() => this.forceUpdate())
  }

  componentWillUnmount() {
    this.unlisten()
  }

  render() {
    const history = this.history
    const { location, action } = history

    return this.props.children({
      history,
      location,
      action
    })
  }
}

if (__DEV__) {
  History.propTypes = {
    children: PropTypes.func.isRequired,
    createHistory: PropTypes.func.isRequired,
    historyOptions: PropTypes.object
  }
}

export default History
