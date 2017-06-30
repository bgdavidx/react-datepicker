import React from 'react'
import DatePicker from '../../dist/react-datepicker.min.js'
import moment from 'moment'

export default class HeroExample extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      startDate: moment()
    }
  }

  handleChange = (date) => {
    this.setState({
      startDate: date
    })
  }

  render () {
    return <DatePicker
        autoFocus
        selected={this.state.startDate}
        onChange={this.handleChange} />
  }
}
