import React from 'react'
import { setFilter, clearFilter } from '../reducers/filterReducer'
import { connect } from 'react-redux'

const Filter = (props) => {
  const handleChange = (event) => {
    if(event.target.value === ''){
      props.clearFilter()
    } else {
      props.setFilter(event.target.value)
    }
  }

  const style = {
    marginTop: 10
  }

  return (
    <div style={style}>
      filter <input name='filter' onChange={handleChange} />
    </div>
  )
}

export default connect(
  null,
  {setFilter, clearFilter}
)(Filter)