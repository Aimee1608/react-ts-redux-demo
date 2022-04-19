import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as counterActions from '../../store/actions/counter.actions'
function CounterChild({ count, increment, decrement }) {
  return (
    <div>
      <button onClick={()=>increment(5)}>increment</button>
      <span>{count}</span>
      <button onClick={()=>decrement(5)}>decrement</button>
    </div>
  )
}
const mapStateToProps = state => ({
  count: state.counter.count
})
const mapDispatchToProps = dispatch => ({ ...bindActionCreators(counterActions, dispatch) })

export default connect(mapStateToProps, mapDispatchToProps)(CounterChild)