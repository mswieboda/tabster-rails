import React from 'react'
import { connect } from 'react-redux'
import { addTab } from '../actions'

let AddTab = ({ dispatch }) => {
  let input

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addTab(input.value))
        input.value = ''
      }}>
        <input ref={node => {
          input = node
        }} />
        <button type="submit">
          Add Tab
        </button>
      </form>
    </div>
  )
}
AddTab = connect()(AddTab)

export default AddTab
