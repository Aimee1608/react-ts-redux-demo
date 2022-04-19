import { useState } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
function Header(props) {
    const [title, setTitle] = useState('')
    const { addTodo } = props
    return (
      <header className="header">
        <h1>todos</h1>
        <input
          className="new-todo"
          autoFocus
          value={title}
          onChange={e => setTitle(e.target.value)}
          onKeyUp={e => {
            if (e.key !== 'Enter') return
            addTodo(title)
            setTitle('')
          }}
        />
      </header>
    )
  }
  const mapStateToProps = state => ({
    
  })
  const mapDispatchToProps = dispatch => ({ ...bindActionCreators(counterActions, dispatch) })
  
  export default connect(mapStateToProps, mapDispatchToProps)(Header)